import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProjectPopup } from "./ProjectPopup";

export const ProjectCard = ({ title, description, imgUrl, url, detail, imgDir }) => {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const getImages = (/** @type {String} */ dir, /** @type {number} */ n) => {
    const images = [];
    for (let i = 1; i <= n; i++) {
        images.push(`${dir}${i}.jpeg`,);
    }
    return images;
  };

  return (
    <Container className="proj-item">
    {/* document.head.insertAdjacentHTML("beforeend", "<style> a:link {color: white;} a:visited {color: white;}a:active {color: white;}</style>"),
    <Col size={12} sm={6} md={4}> */}
      {/* <a href={url}> */}
      {/* <button onClick={(e) => setVisibility(!visibility)}> */}
      {/* <div className="proj-imgbx">   */}
      
        <Row>
          <Col xs={6}>
            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme proj-slider" >
              <div className="item" >
                <img src={imgUrl} />
              </div>
              {getImages(imgDir, 5).map((url, index) => (
                <div className="item" key={index} >
                  <img alt="Image" src={require("../assets/img/project-imgs/" + url)} key={index}/>
                </div>
              ))}
            </Carousel>
          </Col>
          <Col xs={6}>
            <Row className="proj-text">
              <h2>{title}</h2>
              <h4>{description}</h4>
              <span>{detail}</span>
            </Row>
            <Row className="proj-learn-more">
              <a href={url}><button>Learn More</button></a>
            </Row>
          </Col>
        </Row>

        {/* <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div> */}
      {/* <ProjectPopup
        onClose={popupCloseHandler}
        show={visibility}
        title={title}
      >
        <div className="popup-detail">{detail}</div>
        { <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme popup-slider" >
          {getImages(imgDir, 5).map((url, index) => (
            <div className="item" key={index} >
              <img alt="Image" src={require("../assets/img/project-imgs/" + imgDir + url)} key={index}/>
            </div>
          ))}
        </Carousel>}
        <a href={url}><button>Learn More</button></a>
      </ProjectPopup> */}
      {/* </button> */}
      {/* </a> */}
    {/* </Col> */}
    </Container>
  )
}
