import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  isPortfolioOrBlog: boolean;
}

const Header = ({ isPortfolioOrBlog }: HeaderProps) => {
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/#" },
    { label: "About", href: "/#about" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Service", href: "/#service" },
    // { label: "Blog", href: "/#blog" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <div className="dizme_tm_header">
      <div className="container">
        <div className="inner">
          <div className="logo">
            <Link to="/">
              <img src="/frontend/img/logo/logoq.webp" alt="" />
            </Link>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className={`
                    ${!isPortfolioOrBlog && item.href === "/" ? "current" : ""}
                    ${item.href === "/portfolio" && location.pathname === "/portfolio" ? "current" : ""}
                    ${item.href === "/blog" && location.pathname === "/blog" ? "current" : ""}
                  `}
                >
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
              <li className="download_cv">
                <a href="/cv/Muhammad_Izza_Lutfi.pdf" target="_blank" rel="noopener noreferrer">
                  <span>Download CV</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
