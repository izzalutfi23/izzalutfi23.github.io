import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const isPortfolioOrBlog =
    location.pathname === "/portfolio" || location.pathname === "/blog";

  useEffect(() => {
    let cancelled = false;

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const existingScript = document.querySelector<HTMLScriptElement>(
          `script[src="${src}"]`,
        );

        if (existingScript?.dataset.loaded === "true") {
          resolve();
          return;
        }

        const script = existingScript ?? document.createElement("script");

        const handleLoad = () => {
          script.dataset.loaded = "true";
          resolve();
        };

        const handleError = () => {
          reject(new Error(`Gagal memuat script: ${src}`));
        };

        script.addEventListener("load", handleLoad, { once: true });
        script.addEventListener("error", handleError, { once: true });

        if (!existingScript) {
          script.src = src;
          script.async = false;
          document.body.appendChild(script);
        }
      });
    };

    const initialize = async () => {
      try {
        await loadScript("/frontend/js/plugins.js");
        await loadScript("/frontend/js/init.js");

        if (cancelled) return;

        const $ = window.$;

        if ($) {
          $("[data-img-url]").each(function (this: JQuery, _index: number, _element: Element) {
            const element = $(this as unknown as Element);
            const url = element.data("img-url");

            if (url) {
              element.css("backgroundImage", `url("${url}")`);
            }
          });
        }

        const preloader = document.getElementById("preloader");

        if (preloader) {
          window.setTimeout(() => {
            if (!cancelled) {
              preloader.classList.add("preloaded");

              window.setTimeout(() => {
                if (!cancelled) {
                  preloader.remove();
                }
              }, 1200);
            }
          }, 300);
        }
      } catch (error) {
        console.error(error);
        document.getElementById("preloader")?.remove();
      }
    };

    initialize();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      {/* Modal Box */}
      <div className="dizme_tm_modalbox">
        <div className="box_inner">
          <div className="close">
            <a href="#">
              <i className="icon-cancel"></i>
            </a>
          </div>
          <div className="description_wrap"></div>
        </div>
      </div>

      {/* Main Wrapper */}
      <div className="dizme_tm_all_wrap" data-magic-cursor="show">
        {/* Mobile Menu */}
        <MobileMenu isPortfolioOrBlog={isPortfolioOrBlog} />

        {/* Header */}
        <Header isPortfolioOrBlog={isPortfolioOrBlog} />

        {/* Content */}
        {children}

        {/* Footer with Contact Section */}
        <Footer />

        {/* Mouse Cursor */}
        <div className="mouse-cursor cursor-outer"></div>
        <div className="mouse-cursor cursor-inner"></div>

        {/* Progress Bar */}
        <div className="progressbar">
          <a href="#">
            <span className="text">To Top</span>
          </a>
          <span className="line"></span>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
