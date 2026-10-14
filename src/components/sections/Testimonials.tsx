const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Technology is not just about machines, software, or applications. It\'s about the impact we create to help others.',
      author: 'Satya Nadella',
      role: 'CEO Microsoft',
      image: '/frontend/img/quotes/nadella.jpg'
    },
    {
      quote: 'The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.',
      author: 'Mark Zuckerberg',
      role: 'CEO Meta',
      image: '/frontend/img/quotes/mark.jpeg'
    },
    {
      quote: 'We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don\'t let yourself be lulled into inaction.',
      author: 'Bill Gates',
      role: 'Founder Microsoft',
      image: '/frontend/img/quotes/gates.jpeg'
    }
  ];

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_testimonials">
        <div className="dizme_tm_main_title" data-align="center">
          <span>Quotes</span>
          <h3>Inspirational Quotes</h3>
          <p>Get inspired by these insightful quotes from remarkable individuals</p>
        </div>
        <div className="list_wrapper">
          <div className="total">
            <div className="in">
              <ul className="owl-carousel owl-theme">
                {testimonials.map((testimonial, index) => (
                  <li key={index}>
                    <div className="icon">
                      <img className="svg" src="/frontend/img/svg/testimonials/quote.svg" alt="" />
                    </div>
                    <div className="text">
                      <p>{testimonial.quote}</p>
                    </div>
                    <div className="short">
                      <div className="image">
                        <div className="main" data-img-url={testimonial.image}></div>
                      </div>
                      <div className="detail">
                        <h3>{testimonial.author}</h3>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="left_details">
              <div className="det_image one wow fadeIn" data-wow-duration="1s" data-img-url="/frontend/img/quotes/gates.jpeg"></div>
              <div className="det_image two wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s" data-img-url="/frontend/img/quotes/mark.jpeg"></div>
              <div className="det_image three wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s" data-img-url="/frontend/img/quotes/gates.jpeg"></div>
              <div className="det_image four wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s" data-img-url="/frontend/img/quotes/nadella.jpg"></div>
              <span className="circle green animPulse"></span>
              <span className="circle yellow animPulse"></span>
              <span className="circle border animPulse"></span>
            </div>
            <div className="right_details">
              <div className="det_image one wow fadeIn" data-wow-duration="1s" data-img-url="/frontend/img/quotes/mark.jpeg"></div>
              <div className="det_image two wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s" data-img-url="/frontend/img/quotes/gates.jpeg"></div>
              <div className="det_image three wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s" data-img-url="/frontend/img/quotes/nadella.jpg"></div>
              <span className="circle yellow animPulse"></span>
              <span className="circle purple animPulse"></span>
              <span className="circle border animPulse"></span>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInRight" data-wow-duration="1s"><img src="/frontend/img/brushes/testimonials/1.png" alt="" /></div>
      </div>
    </div>
  );
};

export default Testimonials;
