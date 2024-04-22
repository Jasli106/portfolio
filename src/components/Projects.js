import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';
import { useState } from 'react';

export const Projects = () => {

  const projectsGameDev = [
    {
      title: "Calder Engine",
      description: "Game Engine Architecture",
      url: "https://github.com/Jasli106/CalderEngine",
      detail:
      (<div>
        <p>Calder Engine is a 2D game engine that I built from the ground up for EECS 498: Game Engine Architecture. 
          The engine supports Lua scripting, physics, 2D rendering, and more. 
          Additionally, I added support for 2D skeletal animation as a custom feature:</p>
        <ul>
          <li>Written in C++</li>
          <li>Multiplatform: Supports Windows, OSX, and Linux</li>
          <li>Integrates <a href="https://www.lua.org/home.html">Lua</a> and <a href="https://github.com/vinniefalco/LuaBridge">LuaBridge</a> for Lua scripting</li>
          <li>Integrates <a href="https://github.com/erincatto/box2d">Box2D</a> physics engine</li>
          <li>Integrates <a href="https://www.libsdl.org">SDL</a> library for rendering, audio, and input handling</li>
          <li>Integrates <a href="https://github.com/lucidspriter/SpriterPlusPlus/tree/master">SpriterPlusPlus</a> framework (with SDL) to support 2D skeletal animation through Spriter .scon files</li>
        </ul>
      </div>),
      videos: [ {_id: '1', videoUrl: 'https://youtu.be/ZyDkWcwoUBA'},
        {_id: '2', videoUrl: 'https://www.youtube.com/watch?v=VJ-C0asGSjE&t=2s'}], 
      imgDir: "calder",
    },
    {
      title: "Sweetcore Brews",
      description: "Game Programmer Intern",
      url: "https://nochistudios.com/sweetcore-brews",
      detail:
      (<div>
        <p>Sweetcore Brews is an original romance visual novel about a young witch who runs a magical tea shop. 
          I worked on this game with Nochi Studios as a gameplay programming intern over 6 months. Some of my contributions include:</p>
        <ul>
          <li>Fully developed AR experience from ground up; players buy and scan physical merch to experience their favorite characters in augmented reality</li>
          <li>Developed two versions of Mad Libs minigame (PC and mobile)</li>
          <li>Integrated Unity app, Squarespace website, Firebase database and Google sheets to track customer account data</li>
          <li>Visual effects: Shaders, particle effects, popups, transitions, and other UI effects</li>
        </ul>
      </div>),
      imgDir: "sweetcorebrews",
    },
    {
      title: "Sifting Thyme",
      description: "Game Programmer Intern",
      url: "https://nochistudios.com/sweetcore-brews",
      detail:
      (<div>
        <p>Sifting Thyme is a slice-of-life romance visual novel set in a culinary boarding school. 
          I worked on porting the original RenPy version of this game to Unity with Nochi Studios. Some of my contributions include:</p>
        <ul>
          <li>Architectured the in-game text messaging system</li>
          <li>Implemented in-game social media feeds, toast notifications</li>
          <li>Redesigned facetime transition screens</li>
        </ul>
      </div>),
      imgDir: "siftingthyme",
    },
    {
      title: "C-Note",
      description: "Programming",
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
          <li>In-app synthesizer (using FMOD)</li>
        </ul>
      </div>),
      imgDir: "cnote",
    },
    {
      title: "Curse of the Corsair",
      description: "Programming",
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
      imgDir: "curseofthecorsair",
    },
    {
      title: "Ragnarok TD",
      description: "Programming",
      url: "https://store.steampowered.com/app/2205380/Ragnark_TD/",
      detail: (<div>
        <p>Ragnarok TD is a case study of the classic tower defense game Bloons TD 6. I contributed to implementing multiplayer co-op into this game with WolverineSoft Studio in Fall 2022. 
          I primarily worked on syncing the game state across clients in a recurring loop, and implementing the multiplayer gameplay, including: </p>
        <ul>
          <li>Syncing player resources and enemy states</li>
          <li>Developing multiplayer interactions, such as sending and requesting currency</li>
          <li>Developing multiplayer territory system</li>
          <li>Implementing multiplayer gameplay UI</li>
          <li>Bug fixes</li>
        </ul>
      </div>),
      imgDir: "ragnaroktd",
    },
    {
      title: "A Kitsune's Tail",
      description: "Design, Programming, Art",
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
          <li>Programming game features: signs and collectibles, player movement, platforms</li>
          <li>Level design</li>
        </ul>
      </div>),
      imgDir: "kitsunestail",
    }
  ];
  const projectsWeb = [
    {
      title: "Asher's Website",
      description: "Programming",
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
      imgDir: "asher",
    },
    {
      title: "Menustone",
      description: "Web Developer Intern",
      url: "https://www.menustone.com",
      detail: (<div>
        <p>Menustone is an restaurant management service and online ordering platform that primarily serves Asian restaurants. As a web developer intern, I developed several web pages for the company's website.
          My contributions include:
        </p>
        <ul>
          <li>Designing and developing informational webpages for customer-facing website</li>
          <li>Building support ticket submission system using the PHPmailer library to provide a point of contact for customers</li>
        </ul>
      </div>),
      imgDir: "menustone",
    }
  ];

  const projectsAcademic = [
    {
      title: "Timber Game Engine",
      description: "Research Team Member",
      url: "https://arborinteractive.com/squirrel_rts/lua_experiment.html?default_mod=021c18c5-d54b-4338-a441-4f07ff496333",
      detail: (<div>
        <p>The Timber Game Engine is an accessible web-based game engine for RPG, RTS, and tower defense games. The goal of Timber is to serve as a more specialized, professional alternative to MIT Scratch, supporting 3D and introducing more advanced game engine features in a beginner friendly fashion.
          I worked on this project for two semesters as part of a 10-person team led by Austin Yarger (UMich faculty).
          For this project, my contributions include:
        </p>
        <ul>
          <li>Edit mode input handling and scaling tool</li>
          <li>Building the dialogue system using the open-source Yarn Spinner dialogue library</li>
          <li>Porting existing Yarn Spinner implementation to Godot 3.5</li>
          <li>Dynamic UI system for runtime-generated menus</li>
        </ul>
        <p>Find the Github <a href="https://github.com/ayarger/timber">here</a></p>
      </div>),
      imgDir: "timber",
    },
    // },
    {
      title: "SASI Project",
      description: "Research Assistant",
      url: "https://mavric.si.umich.edu/home",
      detail: (<div>
        <p>The SASI project aims to investigate the impact of various methods of training review including a virtual spectator interface for improving human-robot interaction.
          As a research assistant, I developed and maintained the Unreal Engine 4 simulation used for this project, including:
        </p>
        <ul>
          <li>Debugging and developing features relating to simulation events (takeover, object flagging, and pauses), data logging, replay system and spectator interface (Blueprints)</li>
          <li>Creating and modifying maps with UE4 landscaping tool</li>
        </ul>
      </div>),
      imgDir: "sasi",
    }
  ];

  const [activeKey, setActiveKey] = useState('first');

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first" onSelect={handleSelect}>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Game/XR</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Research</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsGameDev.map((project, index) => {
                            return (
                              <ProjectCard
                                activeTab={activeKey}
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
                                activeTab={activeKey}
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
                              activeTab={activeKey}
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
