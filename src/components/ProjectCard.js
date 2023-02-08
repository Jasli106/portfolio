import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    document.head.insertAdjacentHTML("beforeend", "<style> a:link {color: white;} a:visited {color: white;}a:active {color: white;}</style>"),
    <Col size={12} sm={6} md={4}>
      <a href={url}>
      <div className="proj-imgbx">  
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
