const Hero = () => {
  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        <div className="background" data-img-url="/frontend/img/slider/2.jpg"></div>
        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
                <h3 className="orangeText">Hello, I'm</h3>
              </div>
              <div className="name">
                <h3>M. Izza Lutfi</h3>
              </div>
              <div className="job">
                <p>A <span className="greenText">Professional</span> Software Engineer</p>
              </div>
              <div className="text">
                <p>I'm professional software engineer based in Central Java, and I'm very passionate and dedicated to my work.</p>
              </div>
              <div className="button">
                <div className="dizme_tm_button">
                  <a className="anchor" href="#about"><span>About Me</span></a>
                </div>
                <div className="social">
                  <ul>
                    <li><a href="#"><i className="icon-facebook-1"></i></a></li>
                    <li><a href="#"><i className="icon-linkedin-1"></i></a></li>
                    <li><a href="#"><i className="icon-github-1"></i></a></li>
                    <li><a href="#"><i className="icon-instagram-1"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="image">
                <img src="/frontend/img/slider/avatar2.png" alt="" />
                <span className="skills illustrator anim_moveBottom">
                  <img className="svg" src="/frontend/img/svg/skills/php.svg" alt="" />
                </span>
                <span className="skills photoshop anim_moveBottom">
                  <img className="svg" src="/frontend/img/svg/skills/js.svg" alt="" />
                </span>
                <span className="skills figma anim_moveBottom">
                  <img className="svg" src="/frontend/img/svg/skills/mysql.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="dizme_tm_down">
          <a className="anchor" href="#about">
            <svg width="26px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 1.5 }}>
              <path id="wheel" d="M123.359,79.775l0,72.843" style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }} />
              <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{ fill: 'none', stroke: '#fff', strokeWidth: '20px' }} />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
