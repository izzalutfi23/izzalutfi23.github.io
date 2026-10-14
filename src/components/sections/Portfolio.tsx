import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import portfolioData from "../../data/portfolio.json";

interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  date: string;
  created_at: string;
}

const Portfolio = () => {
  const [selectedPortfolio, setSelectedPortfolio] =
    useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const portfolios = portfolioData.slice(0, 3) as PortfolioItem[]; // Show only 3 on home page

  useEffect(() => {
    // Process images - call the same function as init.js
    const $ = window.$;
    if ($ && typeof window.dizme_tm_data_images === 'function') {
      // Call the global function from init.js
      (window as any).dizme_tm_data_images();
    } else if ($) {
      // Fallback: manually process images like dizme_tm_data_images does
      $(".dizme_tm_news .main").each(function(this: HTMLElement) {
        const $el = $(this);
        const url = $el.data("img-url");
        if (url) {
          $el.css({ backgroundImage: "url(" + url + ")" });
        }
      });
    }
  }, []);

  const openModal = (portfolio: PortfolioItem) => {
    setSelectedPortfolio(portfolio);
    setIsModalOpen(true);
    window.$?.(".dizme_tm_modalbox").addClass("opened");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPortfolio(null);
    window.$?.(".dizme_tm_modalbox").removeClass("opened");
    window.$?.(".dizme_tm_modalbox .description_wrap").html("");
  };

  // Fix image paths
  const fixImagePath = (path: string) => {
    return path;
  };

  return (
    <>
      <div className="dizme_tm_section" id="portfolio">
        <div className="dizme_tm_news">
          <div className="container">
            <div className="dizme_tm_main_title" data-align="center">
              <span>Portfolio</span>
              <h3>My Amazing Works</h3>
              <p>
                Explore a captivating world of innovation and creativity through
                my Portfolio. Witness transformative projects that exemplify my
                dedication to crafting elegant software solutions
              </p>
            </div>
            <div className="news_list">
              <ul>
                {portfolios.map((portfolio) => (
                  <li
                    key={portfolio.id}
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div className="list_inner">
                      <div className="image">
                        <img
                          src={fixImagePath(portfolio.image)}
                          alt={portfolio.title}
                        />
                        <div
                          className="main"
                          data-img-url={fixImagePath(portfolio.image)}
                          style={{ backgroundImage: `url(${fixImagePath(portfolio.image)})` }}
                        ></div>
                        <a
                          className="dizme_tm_full_link"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            openModal(portfolio);
                          }}
                        ></a>
                      </div>
                      <div className="details">
                        <span className="category">
                          <a href="#">{portfolio.category}</a>
                        </span>
                        <div style={{ height: "60px", overflow: "hidden" }}>
                          <h3 className="title">
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                openModal(portfolio);
                              }}
                            >
                              {portfolio.title}
                            </a>
                          </h3>
                        </div>
                        <p>
                          {portfolio.description
                            .replace(/<[^>]*>/g, "")
                            .substring(0, 60)}
                          ...
                        </p>
                      </div>
                      {/* Hidden details for modal */}
                      <div
                        className="news_hidden_details"
                        style={{ display: "none" }}
                      >
                        <div className="news_popup_informations">
                          <div className="text">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: portfolio.description,
                              }}
                            />
                          </div>
                          {/* Image Grid */}
                          <div className="row mt-3 pt-3">
                            <div className="col-12">
                              <h5 className="mb-3">Preview Result</h5>
                            </div>
                            <div className="col-12">
                              <div className="row">
                                {portfolio.images.map((img, index) => (
                                  <div key={index} className="col-md-6 mb-3">
                                    <img
                                      className="img-fluid rounded"
                                      alt={`Preview ${index + 1}`}
                                      src={fixImagePath(img)}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          {/* End Image Grid */}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="dizme_tm_button_port">
                <Link to="/portfolio">
                  <span>See More</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="brush_1 wow zoomIn" data-wow-duration="1s">
            <img src="/frontend/img/brushes/portfolio/1.png" alt="" />
          </div>
          <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
            <img src="/frontend/img/brushes/portfolio/2.png" alt="" />
          </div>
        </div>
      </div>

      {/* Modal - rendered outside section for proper z-index */}
      {isModalOpen && selectedPortfolio && (
        <div className="dizme_tm_modalbox opened" style={{ zIndex: 9999 }}>
          <div className="box_inner">
            <div className="close" onClick={closeModal}>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <i className="icon-cancel"></i>
              </a>
            </div>
            <div className="description_wrap">
              <div className="news_popup_informations">
                <div className="image">
                  <img src={fixImagePath(selectedPortfolio.image)} alt="" />
                  <div
                    className="main"
                    data-img-url={fixImagePath(selectedPortfolio.image)}
                    style={{ backgroundImage: `url(${fixImagePath(selectedPortfolio.image)})` }}
                  ></div>
                </div>
                <div className="details">
                  <h3>{selectedPortfolio.title}</h3>
                  <span>
                    <a href="#">{selectedPortfolio.category}</a>
                  </span>
                </div>
                <div className="text">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedPortfolio.description,
                    }}
                  />
                </div>
                {/* Image Grid */}
                <div className="row mt-3 pt-3">
                  <div className="col-12">
                    <h5 className="mb-3">Preview Result</h5>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      {selectedPortfolio.images.map((img, index) => (
                        <div key={index} className="col-md-6 mb-3">
                          <img
                            className="img-fluid rounded"
                            alt={`Preview ${index + 1}`}
                            src={fixImagePath(img)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* End Image Grid */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
