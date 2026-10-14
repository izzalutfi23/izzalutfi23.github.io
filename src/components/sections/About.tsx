import { useEffect, useRef } from 'react';

const About = () => {
  const countersRef = useRef<NodeListOf<HTMLSpanElement> | null>(null);

  useEffect(() => {
    // Simple counter animation
    const animateCounters = () => {
      const counters = document.querySelectorAll('.dizme_tm_counter');

      counters.forEach((counter) => {
        const el = counter as HTMLSpanElement;
        if (el.classList.contains('counted')) return;

        const target = parseInt(el.getAttribute('data-to') || '0', 10);
        const speed = parseInt(el.getAttribute('data-speed') || '2000', 10);
        const countTo = target;
        let count = 0;
        const increment = countTo / (speed / 16);

        const updateCount = () => {
          count += increment;
          if (count < countTo) {
            el.textContent = Math.ceil(count).toString();
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = countTo.toString();
            el.classList.add('counted');
          }
        };

        updateCount();
      });
    };

    // Use Intersection Observer to trigger when counter comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const counterSection = document.querySelector('.dizme_tm_about');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src="/frontend/img/about/2.jpg" alt="" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <span className="dizme_tm_counter" data-from="0" data-to="5" data-speed="2000">0</span>+
                    </h3>
                    <span className="name">Years of<br />Experience</span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3 className="yellowText">
                      <span className="dizme_tm_counter" data-from="0" data-to="50" data-speed="2000">0</span>+
                    </h3>
                    <span className="name">Total<br />Projects</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>I'm a Software Enginer</span>
                <h3>Innovating Through Code, Passionately</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>Hello there! I'm a software enginer, and I'm very passionate and dedicated to my work. With 5 years experience as a professional software enginer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the process, from discussion and collaboration.</p>
              </div>
              <div className="dizme_tm_button wow fadeInUp" data-wow-duration="1s">
                <a className="anchor" href="#contact"><span>Hire Me</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s"><img src="/frontend/img/brushes/about/1.png" alt="" /></div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s"><img src="/frontend/img/brushes/about/2.png" alt="" /></div>
      </div>
    </div>
  );
};

export default About;
