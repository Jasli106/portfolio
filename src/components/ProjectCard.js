import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from 'react-player/youtube';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProjectPopup } from "./ProjectPopup";
import { mediaMapping } from '../mediaDescriptors';


export const ProjectCard = ({ activeTab, title, description, url, detail, videos, imgDir }) => {
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

  const isVideo = (filename) => {
    const videoExtensions = ['.mp4', '.mov'];
    return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext));
  };

  const mediaArray = mediaMapping[imgDir] || [];

  useEffect(() => {
    // This will trigger a resize event, forcing the carousel to update
    window.dispatchEvent(new Event('resize'));
  }, [activeTab]);

  const YoutubeSlide = ({ url, isSelected }) => (
    <ReactPlayer width="100%" height="400px" url={url} playing={isSelected} />
  );

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
              {mediaArray.map((url, index) => {
                if (isVideo(url)) {
                  return (
                    <div className="item" key={url} >
                      <video controls>
                        <source src={process.env.PUBLIC_URL + url} type={`video/${url.split('.').pop()}`} />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  );
                } else {
                  return (
                    <div className="item" key={url}>
                      <img alt="content" src={process.env.PUBLIC_URL + url} />
                    </div>
                  );
                }
            })}
            {videos && videos.map(v => (
                <div className="item">
                  <YoutubeSlide
                    url={v.videoUrl}
                    playing={false}
                    key={v._id ? v._id : v.id}
                  />
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
