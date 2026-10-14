import { useState, useEffect } from 'react';
import blogData from '../data/blog.json';

interface BlogItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  date: string;
  created_at: string;
}

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const blogs = blogData as BlogItem[];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Blog | Muhammad Izza Lutfi';

    // Process images - call the same function as init.js
    const $ = window.$;
    if ($ && typeof window.dizme_tm_data_images === 'function') {
      (window as any).dizme_tm_data_images();
    } else if ($) {
      $("*[data-img-url]").each(function(this: HTMLElement) {
        const $el = $(this);
        const url = $el.data("img-url");
        if (url) {
          $el.css({ backgroundImage: "url(" + url + ")" });
        }
      });
    }
  }, []);

  const openModal = (blog: BlogItem) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
    window.$?.(".dizme_tm_modalbox").addClass("opened");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
    window.$?.(".dizme_tm_modalbox").removeClass("opened");
    window.$?.(".dizme_tm_modalbox .description_wrap").html("");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="dizme_tm_section" id="blog">
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>From My Blog</span>
            <h3>Our Recent Updates, Blog, Tips, Tricks &amp; More</h3>
          </div>
          <div className="news_list">
            <ul>
              {blogs.map((blog) => (
                <li key={blog.id} className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <div className="image">
                      <img src={blog.image} alt={blog.title} />
                      <div className="main" data-img-url={blog.image} style={{ backgroundImage: `url(${blog.image})` }}></div>
                      <a className="dizme_tm_full_link" href="#" onClick={(e) => { e.preventDefault(); openModal(blog); }}></a>
                    </div>
                    <div className="details">
                      <span className="category"><a href="#">{blog.category}</a></span>
                      <div style={{ height: "60px", overflow: "hidden" }}>
                        <h3 className="title"><a href="#" onClick={(e) => { e.preventDefault(); openModal(blog); }}>{blog.title}</a></h3>
                      </div>
                      <p>{formatDate(blog.date)}</p>
                    </div>
                    {/* Hidden details */}
                    <div className="news_hidden_details" style={{ display: "none" }}>
                      <div className="news_popup_informations">
                        <div className="text">
                          <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s"><img src="/frontend/img/brushes/news/1.png" alt="" /></div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s"><img src="/frontend/img/brushes/news/2.png" alt="" /></div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedBlog && (
        <div className="dizme_tm_modalbox opened" style={{ zIndex: 9999 }}>
          <div className="box_inner">
            <div className="close" onClick={closeModal}>
              <a href="#" onClick={(e) => e.preventDefault()}><i className="icon-cancel"></i></a>
            </div>
            <div className="description_wrap">
              <div className="news_popup_informations">
                <div className="image">
                  <img src={selectedBlog.image} alt="" />
                  <div className="main" data-img-url={selectedBlog.image} style={{ backgroundImage: `url(${selectedBlog.image})` }}></div>
                </div>
                <div className="details">
                  <h3>{selectedBlog.title}</h3>
                  <span><a href="#">{selectedBlog.category}</a></span>
                  <span className="date">{formatDate(selectedBlog.date)}</span>
                </div>
                <div className="text">
                  <div dangerouslySetInnerHTML={{ __html: selectedBlog.description }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
