import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import sweetcorebrews from "../assets/img/project-imgs/sweetcorebrews.png";
import curseofthecorsair from "../assets/img/project-imgs/curseofthecorsair/curseofthecorsair.png";
import ragnaroktd from "../assets/img/project-imgs/ragnaroktd.png";
import kitsunestail from "../assets/img/project-imgs/kitsunestail.png";
import scoopsup from "../assets/img/project-imgs/scoopsup.png";
import flourish from "../assets/img/project-imgs/flourish.png";
import fieldsoffamine from "../assets/img/project-imgs/fieldsoffamine.png";
import cnote from "../assets/img/project-imgs/cnote.png";
import asher from "../assets/img/project-imgs/asher.png";
import footer from "../assets/img/footer-bg.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsGameDev = [
    {
      title: "Sweetcore Brews",
      description: "Programming",
      imgUrl: sweetcorebrews,
      url: "https://nochistudios.com/sweetcore-brews",
      detail:
      (<div>
        <p>Sweetcore Brews is an original romance visual novel about a young witch who runs a magical tea shop. 
          I have been working on this game with Nochi Studios as a gameplay programming intern, starting Summer 2023. Some of my contributions include:</p>
        <ul>
          <li>Fully developed two versions of Mad Libs minigame (both a PC and mobile version)</li>
          <li>Owned development of AR experience; players buy and scan physical merch to experience their favorite characters in augmented reality</li>
          <li>Visual effects: Shaders, particle effects, popups, transitions, and other UI effects</li>
          <li>Backend: Integrating Unity app, Squarespace website, Firebase database and Google sheets to track customer account data</li>
        </ul>
      </div>),
      imgDir: "curseofthecorsair/",
    },
    {
      title: "C-Note",
      description: "Programming",
      imgUrl: cnote,
      url: "https://piyawatm.wixsite.com/c-note",
      detail: (<div>
        <p>C-Note is an educational application that uses augmented reality (AR) technology to help introduce students to sound design.
          C-Note was created for EECS 498: Extended Reality and Society, as part of a team of 5 students over the course of 4 weeks.
          C-Note is designed with children in mind, and features a set of physical puzzle pieces that are used in conjunction with the AR app to create an immersive and interactive learning experience.
          With C-Note, students can explore the intricate process of sound design by manipulating a variety of virtual sound objects, such as selecting the sound waveform, and chaining effects like distortion, reverb, and chorus together.
          For this project, my contributions include:
        </p>
        <ul>
          <li>UI/UX design</li>
          <li>App features: AR image tracking, songbook, AR UI, app UI</li>
          <li>Art integration: 3D animations</li>
          <li>Some work on the in-app synthesizer using FMOD</li>
        </ul>
      </div>),
      imgDir: "curseofthecorsair/",
    },
    {
      title: "Curse of the Corsair",
      description: "Programming",
      imgUrl: curseofthecorsair,
      url: "https://store.steampowered.com/app/2365570/Curse_of_the_Corsair/",
      detail:
      (<div>
        <p>Curse of the Corsair is a pirate-themed case study of the action adventure RPG Hyper Light Drifter. 
          I worked on this game with WolverineSoft Studio during the Winter 2023 semester. Some of my contributions include:</p>
        <ul>
          <li>Player systems: Regenerating shield, stamina, interactions, attack movement, flinch frames</li>
          <li>Weapons: Blubberbuss</li>
          <li>Art integration: Player abilities, player attack animations, level tiling</li>
          <li>Automatic player attack and animation syncing system</li>
          <li>Bug fixes</li>
        </ul>
      </div>),
      imgDir: "curseofthecorsair/",
    },
    {
      title: "Ragnarok TD",
      description: "Programming",
      imgUrl: ragnaroktd,
      url: "https://store.steampowered.com/app/2205380/Ragnark_TD/",
      detail: (<div>
        <p>Ragnarok TD is a case study of the classic tower defense game Bloons TD 6. I contributed to implementing multiplayer co-op into this game with WolverineSoft Studio in Fall 2022. 
          I primarily worked on syncing the game state across clients in a recurring loop, and implementing the multiplayer gameplay, including: </p>
        <ul>
          <li>Syncing player resources</li>
          <li>Syncing enemy states</li>
          <li>Developing in-game player-interaction, such as requesting money</li>
          <li>Developing multiplayer gameplay UI</li>
          <li>Dividing territory in multiplayer</li>
          <li>Bug fixes</li>
        </ul>
      </div>),
      imgDir: "curseofthecorsair/",
    },
    {
      title: "A Kitsune's Tail",
      description: "Design, Programming, Art",
      imgUrl: kitsunestail,
      url: "https://jasli106.itch.io/a-kitsunes-tail",
      detail: (<div>
        <p>A Kitsune’s Tail is a 2D puzzle platformer. 
          I designed and developed this game on a team of 4 over the course of 6 weeks for EECS 494: Game Development. 
          I was primarily in charge of creating and implementing the visuals. Some of my contributions include:
        </p>
        <ul>
          <li>Drawing sprites</li>
          <li>Creating frame-by-frame and skeletal animations</li>
          <li>Particle effects</li>
          <li>Lighting design</li>
          <li>Creating shaders</li>
          <li>Game features: signs and collectibles, player movement, some platforms</li>
          <li>Level design</li>
        </ul>
      </div>),
      imgDir: "curseofthecorsair/",
    }
  ];
  const projectsWeb = [
    {
      title: "Asher's Website",
      description: "Programming",
      imgUrl: asher,
      url: "https://kayjohn1512.github.io",
      detail: (<div>
        <p>Asher's website is an online photo gallery for my roommate's dog, Asher. We found him during a road trip at a gas station in New Mexico, and subsequently, my roommate adopted him. We wanted to have a place to consolidate and record his antics, and so they could be easily shared.
          For this project, my contributions include:
        </p>
        <ul>
          <li>Frontend development: Photo gallery with popups and toggle-able captions</li>
          <li>Developed image tag filter system</li>
          <li>Set up google sheets system to manage photos and image tags</li>
        </ul>
      </div>),
      imgDir: "curseofthecorsair/",
    }
  ];

  const projectsAcademic = [];

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
                      <Nav.Link eventKey="first">Game/XR</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Academic</Nav.Link>
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
                        {
                          projectsWeb.map((project, index) => {
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
                      {
                        projectsAcademic.map((project, index) => {
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={footer}></img> */}
    </section>
  )
}
