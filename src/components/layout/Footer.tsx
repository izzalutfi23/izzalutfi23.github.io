// Social links data
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/izzalutfi23",
    icon: "icon-github-1",
    gradient: "linear-gradient(135deg, #333 0%, #000 100%)",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-izza-lutfi-1a048b1ba",
    icon: "icon-linkedin-1",
    gradient: "linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/izzalutfi045",
    icon: "icon-instagram-1",
    gradient:
      "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
  },
];

const Footer = () => {
  const whatsappNumber = "6285210539260";
  const whatsappMessage = encodeURIComponent(
    "Halo! Saya menemukan portfolio Anda dan tertarik untuk bekerja sama.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Current time in Indonesia (WIB = UTC+7)
  const now = new Date();
  const wibTime = new Date(now.getTime() + 7 * 60 * 60 * 1000);
  const currentHour = wibTime.getUTCHours();
  const isOnline = currentHour >= 8 && currentHour < 22;

  return (
    <>
      <div className="dizme_tm_section" id="contact">
        <div className="dizme_tm_contact">
          <div className="container">
            {/* Elegant Header */}
            <div className="contact_header">
              <div className="header_accent">
                <span className="accent_line"></span>
                <span className="accent_dot"></span>
                <span className="accent_line"></span>
              </div>
              <span className="header_tag">Get in Touch</span>
              <h2>
                Let's Create Something
                <br />
                <span>Extraordinary</span>
              </h2>
              <p>Have an idea? Let's transform it into reality together.</p>
            </div>

            {/* Availability Banner */}
            {/* <div className="availability_banner">
              <div className="banner_inner">
                <div className="banner_left">
                  <div
                    className={`status_dot ${isOnline ? "online" : "offline"}`}
                  >
                    <span className="pulse_ring"></span>
                  </div>
                  <div className="banner_text">
                    <h4>
                      {isOnline ? "Currently Available" : "Currently Offline"}
                    </h4>
                    <p>
                      {isOnline
                        ? "Ready to take new projects"
                        : "Will respond soon"}
                    </p>
                  </div>
                </div>
                <div className="banner_right">
                  <span className="time_label">WIB</span>
                  <span className="time_value">
                    {wibTime.toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                      timeZone: "Asia/Jakarta",
                    })}
                  </span>
                </div>
              </div>
            </div> */}

            {/* Main Contact Cards */}
            <div className="contact_grid">
              {/* WhatsApp - Featured */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact_card featured whatsapp"
              >
                <div className="card_bg_pattern"></div>
                <div className="card_gradient_border"></div>
                <div className="card_content">
                  <div className="card_icon">
                    <i className="icon-chat"></i>
                    <div className="icon_glow"></div>
                  </div>
                  <div className="card_label">Recommended</div>
                  <h3>WhatsApp</h3>
                  <span className="card_value">+62 852 1053 9260</span>
                  <p>Get instant response, usually within minutes</p>
                  <div className="card_action">
                    <span>Start Chat</span>
                    <i className="icon-right-open"></i>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:izzalutfi045@gmail.com"
                className="contact_card email"
              >
                <div className="card_bg_pattern"></div>
                <div className="card_gradient_border"></div>
                <div className="card_content">
                  <div className="card_icon">
                    <i className="icon-mail-1"></i>
                  </div>
                  <div className="card_label">Professional</div>
                  <h3>Email</h3>
                  <span className="card_value">izzalutfi045@gmail.com</span>
                  <p>For formal inquiries and detailed discussions</p>
                  <div className="card_action">
                    <span>Send Email</span>
                    <i className="icon-right-open"></i>
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="contact_card location">
                <div className="card_bg_pattern"></div>
                <div className="card_gradient_border"></div>
                <div className="card_content">
                  <div className="card_icon">
                    <i className="icon-location"></i>
                  </div>
                  <div className="card_label">Base Location</div>
                  <h3>Location</h3>
                  <span className="card_value">Grobogan, Jawa Tengah</span>
                  <p>Open for remote collaboration worldwide</p>
                  <div className="card_action">
                    <span>View Map</span>
                    <i className="icon-right-open"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Elegant Divider */}
            <div className="elegant_divider">
              <span className="divider_line"></span>
              <div className="divider_center">
                <i className="icon-star"></i>
              </div>
              <span className="divider_line"></span>
            </div>

            {/* Social Links */}
            <div className="social_section">
              <h4>Follow My Journey</h4>
              <div className="social_links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_link"
                    style={{ background: social.gradient }}
                  >
                    <i className={social.icon}></i>
                    <span className="social_tooltip">{social.name}</span>
                  </a>
                ))}
              </div>
              {/* <p className="social_note">See my latest projects and updates</p> */}
            </div>

            {/* Map Section */}
            <div className="map_container">
              {/* <div className="map_header">
                <i className="icon-location"></i>
                <h4>Find Me in Grobogan</h4>
              </div> */}
              <div className="map_frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506749.9288059784!2d110.56454259076399!3d-7.127867693899684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70babb25fc5b4b%3A0x3027a76e352baf0!2sKabupaten%20Grobogan%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1791943779110!5m2!1sid!2sid"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <div className="map_vignette"></div>
              </div>
            </div>
          </div>

          {/* Background Elements */}
          <div className="bg_elements">
            <div className="bg_glow glow_1"></div>
            <div className="bg_glow glow_2"></div>
            <div className="bg_grid_pattern"></div>
          </div>

          <div className="brush_1">
            <img src="/frontend/img/brushes/contact/1.png" alt="" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="dizme_tm_section">
        <div className="dizme_tm_copyright">
          <div className="container">
            <div className="inner">
              <div className="left">
                <p>
                  Crafted with{" "}
                  <span className="heart">
                    <i className="icon-heart"></i>
                  </span>{" "}
                  by{" "}
                  <a href="https://izzalutfi.com" target="_blank">
                    Muhammad Izza Lutfi
                  </a>
                </p>
              </div>
              <div className="right">
                <ul>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="float_wa"
      >
        <i className="icon-chat"></i>
        <span className="float_tooltip">Chat via WhatsApp</span>
        <span className="float_ring"></span>
      </a>

      <style>{`
        /* ===== HEADER ===== */
        .contact_header {
          text-align: center;
          margin-bottom: 50px;
          position: relative;
        }

        .header_accent {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 25px;
        }

        .header_accent .accent_line {
          width: 50px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff6b35);
          border-radius: 2px;
        }

        .header_accent .accent_line:last-child {
          background: linear-gradient(90deg, #ff6b35, transparent);
        }

        .header_accent .accent_dot {
          width: 8px;
          height: 8px;
          background: #ff6b35;
          border-radius: 50%;
        }

        .header_tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #ff6b35;
          margin-bottom: 18px;
          position: relative;
        }

        .header_tag::before,
        .header_tag::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 30px;
          height: 1px;
          background: rgba(255, 107, 53, 0.4);
        }

        .header_tag::before { right: 100%; margin-right: 15px; }
        .header_tag::after { left: 100%; margin-left: 15px; }

        .contact_header h2 {
          font-size: 54px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          color: #fff;
          letter-spacing: -1px;
        }

        .contact_header h2 span {
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact_header p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.5);
          max-width: 380px;
          margin: 0 auto;
          font-weight: 300;
        }

        /* ===== AVAILABILITY BANNER ===== */
        .availability_banner {
          max-width: 550px;
          margin: 0 auto 60px;
          padding: 18px 28px;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(247, 147, 30, 0.03));
          border: 1px solid rgba(255, 107, 53, 0.15);
          border-radius: 60px;
          backdrop-filter: blur(10px);
        }

        .banner_inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .banner_left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .status_dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          position: relative;
        }

        .status_dot.online { background: #4ade80; }
        .status_dot.offline { background: #64748b; }

        .pulse_ring {
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 2px solid currentColor;
          opacity: 0;
          animation: statusPulse 2s infinite;
        }

        .status_dot.online .pulse_ring { color: #4ade80; }
        .status_dot.offline .pulse_ring { display: none; }

        @keyframes statusPulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }

        .banner_text h4 {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }

        .banner_text p {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.45);
          margin: 2px 0 0 0;
        }

        .banner_right {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }

        .time_label {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .time_value {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          font-variant-numeric: tabular-nums;
          font-feature-settings: 'tnum';
        }

        /* ===== CONTACT GRID ===== */
        .contact_grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 70px;
        }

        .contact_card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .contact_card:hover {
          transform: translateY(-10px) scale(1.02);
        }

        .card_bg_pattern {
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.01) 2px,
              rgba(255, 255, 255, 0.01) 4px
            );
          z-index: 0;
        }

        .card_gradient_border {
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          transition: all 0.4s ease;
        }

        .contact_card:hover .card_gradient_border {
          background: linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.08));
        }

        .contact_card .card_content {
          position: relative;
          z-index: 2;
          padding: 36px 30px;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(30px);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .contact_card.featured .card_content {
          background: linear-gradient(145deg, rgba(37, 211, 102, 0.12), rgba(18, 140, 126, 0.05));
          border: 1px solid rgba(37, 211, 102, 0.15);
        }

        .contact_card.email .card_content {
          background: linear-gradient(145deg, rgba(255, 107, 53, 0.1), rgba(247, 147, 30, 0.03));
        }

        .contact_card.location .card_content {
          background: linear-gradient(145deg, rgba(124, 58, 237, 0.1), rgba(168, 85, 247, 0.03));
        }

        .card_icon {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          position: relative;
        }

        .card_icon i {
          font-size: 26px;
          color: #fff;
          position: relative;
          z-index: 1;
        }

        .whatsapp .card_icon { background: linear-gradient(135deg, #25d366, #128c7e); }
        .email .card_icon { background: linear-gradient(135deg, #ff6b35, #f7931e); }
        .location .card_icon { background: linear-gradient(135deg, #7c3aed, #a855f7); }

        .icon_glow {
          position: absolute;
          inset: -10px;
          border-radius: 28px;
          background: inherit;
          filter: blur(20px);
          opacity: 0.4;
          z-index: 0;
        }

        .card_label {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          color: rgba(255, 255, 255, 0.35);
          margin-bottom: 10px;
        }

        .card_content h3 {
          font-size: 26px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px 0;
        }

        .card_value {
          display: block;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 14px;
          font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
          letter-spacing: 0.5px;
        }

        .card_content > p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.4);
          margin: 0;
          line-height: 1.6;
          flex-grow: 1;
        }

        .card_action {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
        }

        .card_action i {
          font-size: 16px;
          transition: transform 0.3s ease;
        }

        .contact_card:hover .card_action {
          color: #fff;
        }

        .contact_card:hover .card_action i {
          transform: translateX(6px);
        }

        /* ===== DIVIDER ===== */
        .elegant_divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 60px;
        }

        .elegant_divider .divider_line {
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.25), transparent);
        }

        .elegant_divider .divider_center {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.12), rgba(247, 147, 30, 0.05));
          border: 1px solid rgba(255, 107, 53, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .elegant_divider .divider_center i {
          font-size: 16px;
          color: #ff6b35;
        }

        /* ===== SOCIAL ===== */
        .social_section {
          text-align: center;
          margin-bottom: 70px;
        }

        .social_section h4 {
          font-size: 15px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 25px;
          letter-spacing: 1px;
        }

        .social_links {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .social_link {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .social_link i {
          font-size: 22px;
          color: #fff;
        }

        .social_tooltip {
          position: absolute;
          bottom: 72px;
          left: 50%;
          transform: translateX(-50%) translateY(5px);
          background: #fff;
          color: #1a1a2e;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
        }

        .social_tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #fff;
        }

        .social_link:hover {
          transform: translateY(-8px) scale(1.1);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
        }

        .social_link:hover .social_tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .social_note {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.35);
          margin: 18px 0 0 0;
        }

        /* ===== MAP ===== */
        .map_container {
          margin-bottom: 40px;
        }

        .map_header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 25px;
        }

        .map_header i {
          font-size: 18px;
          color: #ff6b35;
        }

        .map_header h4 {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }

        .map_frame {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .map_vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(ellipse at top, rgba(10, 10, 20, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(10, 10, 20, 0.1) 0%, transparent 50%);
        }

        /* ===== BG ELEMENTS ===== */
        .bg_elements {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .bg_glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
        }

        .glow_1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.06) 0%, transparent 70%);
          top: -150px;
          right: -100px;
        }

        .glow_2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%);
          bottom: -100px;
          left: -100px;
        }

        .bg_grid_pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 70px 70px;
        }

        /* ===== FLOATING WA ===== */
        .float_wa {
          position: fixed;
          bottom: 35px;
          right: 35px;
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #25d366, #128c7e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 26px;
          box-shadow:
            0 8px 30px rgba(37, 211, 102, 0.45),
            0 0 0 0 rgba(37, 211, 102, 0.4);
          z-index: 1000;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .float_wa:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 40px rgba(37, 211, 102, 0.6);
        }

        .float_tooltip {
          position: absolute;
          right: 80px;
          background: #fff;
          color: #1a1a2e;
          padding: 10px 18px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transform: translateX(10px);
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }

        .float_tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 12px;
          height: 12px;
          background: #fff;
        }

        .float_wa:hover .float_tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }

        .float_ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid #25d366;
          animation: floatPulse 2s infinite;
        }

        @keyframes floatPulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        /* ===== COPYRIGHT ===== */
        .dizme_tm_copyright .inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .dizme_tm_copyright p {
          color: rgba(255, 255, 255, 0.45);
          margin: 0;
          font-size: 14px;
        }

        .dizme_tm_copyright a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s;
        }

        .dizme_tm_copyright a:hover { color: #ff6b35; }

        .heart {
          color: #ff6b35;
          animation: heartbeat 1.5s infinite;
          display: inline-block;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .dizme_tm_copyright ul {
          display: flex;
          gap: 24px;
        }

        .dizme_tm_copyright ul li a {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
        }

        .dizme_tm_copyright ul li a:hover { color: #fff; }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
          .contact_grid { grid-template-columns: repeat(2, 1fr); }
          .contact_header h2 { font-size: 42px; }
        }

        @media (max-width: 768px) {
          .contact_grid { grid-template-columns: 1fr; }
          .contact_header h2 { font-size: 32px; letter-spacing: -0.5px; }
          .contact_header p { font-size: 16px; }

          .availability_banner {
            border-radius: 18px;
            padding: 16px 22px;
          }

          .banner_inner {
            flex-direction: column;
            gap: 14px;
            text-align: center;
          }
          .banner_left { flex-direction: column; gap: 8px; }
          .banner_right { margin-top: 5px; }

          .float_wa {
            bottom: 25px;
            right: 25px;
            width: 56px;
            height: 56px;
            font-size: 24px;
          }

          .float_tooltip { display: none; }

          .dizme_tm_copyright .inner {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .elegant_divider .divider_line { width: 50px; }

          .contact_card .card_content { padding: 30px 24px; }
          .card_content h3 { font-size: 22px; }
        }
      `}</style>
    </>
  );
};

export default Footer;
