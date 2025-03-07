import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import background from "../assets/img/footer-bg.png"

export const Skills = () => {
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

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>Languages: C++, C#, Python, Swift</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter2} alt="Image" /> */}
                                <h5>Game/XR Development: Unity, Unity AR Foundation, Unreal Engine 4 and 5, Godot, Game Engine Architecture</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter3} alt="Image" /> */}
                                <h5>Web Development: Javascript, HTML/CSS, PHP, React, SQL, REST APIs</h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>Version Control (Git)</h5>
                            </div>
                            {/* <div className="item">
                                {/* <img src={meter1} alt="Image" /> }
                                <h5>Technical Art: 2D Animation/Rigging, Unity Shader Graph, Unity Animator</h5>
                            </div> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image" src={background} alt="Image" /> */}
    </section>
  )
}
