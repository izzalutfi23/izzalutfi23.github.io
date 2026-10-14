const Service = () => {
  const services = [
    {
      icon: 'anchor.svg',
      brush: '1.png',
      title: 'Software Design',
      description: 'Create a plan and architecture for the software system based on the gathered requirements'
    },
    {
      icon: 'physics.svg',
      brush: '2.png',
      title: 'Requirement Gathering',
      description: 'Understand client software requirements by collaborating to gather detailed requirements and specifications for a project'
    },
    {
      icon: 'contact.svg',
      brush: '3.png',
      title: 'Coding and Development',
      description: 'Write code to implement the software according to the design and specifications'
    },
    {
      icon: 'web.svg',
      brush: '4.png',
      title: 'Project Management',
      description: 'Manage development timelines, coordinate tasks with the team, and ensure that projects stay on track'
    }
  ];

  return (
    <div className="dizme_tm_section" id="service">
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Services</span>
            <h3>What I Do for Clients</h3>
            <p>With the experience and skills that I have, I can help solve your business problems and change to the digital era</p>
          </div>
          <div className="service_list">
            <ul>
              {services.map((service, index) => (
                <li
                  key={index}
                  className={`wow fadeIn${index % 2 === 0 ? 'Left' : 'Right'}`}
                  data-wow-duration="1s"
                  data-wow-delay={index % 2 === 1 ? '0.2s' : '0s'}
                >
                  <div className="list_inner tilt-effect">
                    <span className="icon">
                      <img className="svg" src={`/frontend/img/svg/service/${service.icon}`} alt="" />
                      <img className="back" src={`/frontend/img/brushes/service/dark/${service.brush}`} alt="" />
                    </span>
                    <div className="title">
                      <h3>{service.title}</h3>
                    </div>
                    <div className="text">
                      <p>{service.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s"><img src="/frontend/img/brushes/service/5.png" alt="" /></div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s"><img src="/frontend/img/brushes/service/6.png" alt="" /></div>
      </div>
    </div>
  );
};

export default Service;
