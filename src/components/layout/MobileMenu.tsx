import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isPortfolioOrBlog: boolean;
}

const MobileMenu = ({ isPortfolioOrBlog }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Close menu on escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: isPortfolioOrBlog ? "/#about" : "#about" },
    {
      label: "Portfolio",
      href: isPortfolioOrBlog ? "/portfolio" : "#portfolio",
    },
    { label: "Service", href: isPortfolioOrBlog ? "/#service" : "#service" },
    // { label: "Blog", href: isPortfolioOrBlog ? "/blog" : "#blog" },
    { label: "Contact", href: isPortfolioOrBlog ? "/#contact" : "#contact" },
  ];

  return (
    <div className="dizme_tm_mobile_menu" ref={menuRef}>
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <Link to="/">
              <img src="/frontend/img/logo/logoq.webp" alt="" />
            </Link>
          </div>
          <div className="trigger">
            <button
              className={`hamburger hamburger--slider ${isOpen ? "is-active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="dropdown"
        style={{
          display: isOpen ? "block" : "none",
          maxHeight: isOpen ? "80vh" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out"
        }}
      >
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            {navItems.map((item, index) => (
              <li key={item.href} className={index === 0 ? "current" : ""}>
                <Link to={item.href} onClick={closeMenu}>{item.label}</Link>
              </li>
            ))}
            <li className="download_cv">
              <a
                href="/cv/Muhammad_Izza_Lutfi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.open('/cv/Muhammad_Izza_Lutfi.pdf', '_blank')}
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
              >
                <span>Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
