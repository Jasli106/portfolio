import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img//header-img.png";

export const Banner = () => {
  // const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState('');
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1);
  // const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  // const period = 2000;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => { clearInterval(ticker) };
  // }, [text])

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  //   setText(updatedText);

  //   if (isDeleting) {
  //     setDelta(prevDelta => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex(prevIndex => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === '') {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(500);
  //   } else {
  //     setIndex(prevIndex => prevIndex + 1);
  //   }
  // }

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">Welcome to my Portfolio</span> */}
                <h1>{`Hi! I'm Jasmine Li`} 
                {/* <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span> */}
                </h1>
                <p>I am a senior at the University of Michigan, studying Computer Science with a minor in History of Art.</p>
                <p>I am currently:
                <br />Developing the Timber game engine, an accessible, web-based game engine aiming to teach RTS, RPG and TD principles/development, as part of a research team led by Austin Yarger (University of Michigan).
                <br />Contributing to research on situational awareness in human-robot interaction by maintaining an Unreal Engine simulation, and assisting with testing and data collection.</p>
                {/* <button className="currently-working-on" href="#project">Find out what I'm working on</button> */}
                <Nav.Link href="#project" className={'currently-working-on'} onClick={() => onUpdateActiveLink('projects')}>Find out what I'm working on</Nav.Link>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
