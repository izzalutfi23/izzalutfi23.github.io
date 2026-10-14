import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isPortfolioOrBlog: boolean;
}

const MobileMenu = ({ isPortfolioOrBlog }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Wait for scripts to load
    const initMenu = () => {
      const $ = window.$;
      if (!$) return;

      const hamburger = $(".trigger .hamburger");
      const mobileMenu = $(".dizme_tm_mobile_menu .dropdown");

      if (!hamburger.length || !mobileMenu.length) return;

      // Toggle mobile menu
      const handleToggle = () => {
        if (hamburger.hasClass("is-active")) {
          hamburger.removeClass("is-active");
          mobileMenu.slideUp();
          setIsOpen(false);
        } else {
          hamburger.addClass("is-active");
          mobileMenu.slideDown();
          setIsOpen(true);
        }
        return false;
      };

      hamburger.on("click", handleToggle);

      // Close on menu link click
      const handleLinkClick = () => {
        hamburger.removeClass("is-active");
        mobileMenu.slideUp();
        setIsOpen(false);
        return false;
      };

      mobileMenu.find("ul li a").on("click", handleLinkClick);

      return () => {
        hamburger.off("click", handleToggle);
        mobileMenu.find("ul li a").off("click", handleLinkClick);
      };
    };

    // Give time for scripts to load
    const timer = setTimeout(initMenu, 500);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: isPortfolioOrBlog ? "/#about" : "#about" },
    {
      label: "Portfolio",
      href: isPortfolioOrBlog ? "/portfolio" : "#portfolio",
    },
    { label: "Service", href: isPortfolioOrBlog ? "/#service" : "#service" },
    { label: "Blog", href: isPortfolioOrBlog ? "/blog" : "#blog" },
    { label: "Contact", href: isPortfolioOrBlog ? "/#contact" : "#contact" },
  ];

  return (
    <div className="dizme_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <Link to="/">
              <img src="/frontend/img/logo/logoq.webp" alt="" />
            </Link>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${isOpen ? "is-active" : ""}`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: isOpen ? "block" : "none" }}>
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            {navItems.map((item, index) => (
              <li key={item.href} className={index === 0 ? "current" : ""}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
            <li className="download_cv">
              <a href="/cv/Muhammad_Izza_Lutfi.pdf" download>
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
