import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import footer from "../assets/img/footer-bg.png";
import TrackVisibility from 'react-on-screen';

export const Gallery = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const getImages = (/** @type {String} */ dir, /** @type {number} */ n) => {
    const images = [];
    for (let i = 1; i <= n; i++) {
        images.push(`${dir}/${i}.jpeg`,);
    }
    return images;
  };

  const images = [
    getImages("cat", 3),
  ];

  return (
    <section className="gallery" id="gallery">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Gallery</h2>
                <Row>
                  <h3>Cats</h3>
                  <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme gallery-slider" >
                    {images[0].map((url, index) => (
                      <div className="item" key={index} >
                        <img alt="Image" src={require("../assets/img/gallery/" + url)} key={index}/>
                      </div>
                    ))}
                  </Carousel>
                </Row>   
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={footer}></img>
    </section>
  )
}
