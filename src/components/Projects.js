import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import kitsunestail from "../assets/img/project-imgs/kitsunestail.png";
import ragnaroktd from "../assets/img/project-imgs/ragnaroktd.png";
import flourish from "../assets/img/project-imgs/flourish.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
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
      url: "https://jasli106.itch.io/a-kitsunes-tail",
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
                          projects.map((project, index) => {
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
