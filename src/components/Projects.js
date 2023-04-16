import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import kitsunestail from "../assets/img/project-imgs/kitsunestail.png";
import ragnaroktd from "../assets/img/project-imgs/ragnaroktd.png";
import flourish from "../assets/img/project-imgs/flourish.png";
import fieldsoffamine from "../assets/img/project-imgs/fieldsoffamine.png";
import cnote from "../assets/img/project-imgs/cnote.png";
import footer from "../assets/img/footer-bg.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsGameDev = [
    {
      title: "Ragnarok TD",
      description: "Programming",
      imgUrl: ragnaroktd,
      url: "https://store.steampowered.com/app/2205380/Ragnark_TD/",
    },
    {
      title: "A Kitsune's Tail",
      description: "Design, Programming, Art",
      imgUrl: kitsunestail,
      url: "https://jasli106.itch.io/a-kitsunes-tail",
    },
    {
      title: "Flour-ish",
      description: "Design, Programming",
      imgUrl: flourish,
      url: "https://lyanac.itch.io/flour-ish",
    }, 
    {
      title: "Fields of Famine",
      description: "Design, Video Editing",
      imgUrl: fieldsoffamine,
      url: "https://globalgamejam.org/2023/games/fields-famine-2",
    }
  ];

  const projectsXR = [
    {
      title: "",
      description: "",
      imgUrl: "",
      url: "",
    },
    {
      title: "C-Note",
      description: "Programming",
      imgUrl: cnote,
      url: "https://piyawatm.wixsite.com/c-note",
    },
    {
      title: "",
      description: "",
      imgUrl: "",
      url: "",
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Game Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">XR</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsGameDev.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                      <center>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/bxZ8_xueg04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </center>
                      </Row>
                      <Row>
                      <center>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/-92N4-kIhsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </center>
                      </Row>
                      <Row>
                        {
                          projectsXR.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        <p>Coming Soon!</p>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={footer}></img>
    </section>
  )
}
