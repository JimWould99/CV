import "./index.css";
import Segment from "./general";

const CV_body = () => {
  return (
    <div className="cv_body">
      <div className="cv_header">
        <h1>CV Editor</h1>
      </div>
      <Segment
        title="General info"
        one="Name"
        two="Email"
        three="Phone Number"
      ></Segment>
      <Segment
        title="Education"
        one="School name"
        two="Title of study"
        three="Date of study"
      ></Segment>
      <Segment
        title="Practical experience"
        one="Company"
        two="Position title"
        three="Responsibilities"
      ></Segment>
    </div>
  );
};

export default CV_body;
