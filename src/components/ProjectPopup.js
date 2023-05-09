import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ProjectPopup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={"overlay"}
    >
      <div className="popup">
        <h2>{props.title}</h2>
        <span className="close" onClick={closeHandler}>
        </span>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

ProjectPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
export default ProjectPopup;
