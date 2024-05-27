import { useState } from "react";

const Segment = ({ title, one, two, three }) => {
  const [editMode, setEditMode] = useState(true);

  const [info, changeInfo] = useState({
    first: "",
    second: "",
    third: "",
  });

  const makeEdit = (e) => {
    changeInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  if (!editMode) {
    return (
      <div className="display_section">
        <h2>{title}</h2>
        <div className="display_info">
          <h4>
            {one}: {info.first}
          </h4>
          <h4>
            {two}: {info.second}
          </h4>
          <h4>
            {three}: {info.third}
          </h4>
        </div>
        <button onClick={() => setEditMode((prev) => !prev)}>
          Edit {title}
        </button>
      </div>
    );
  }

  return (
    <div id="segment">
      <h2>{title}</h2>
      <form action="#">
        <label htmlFor={one}>{one}: </label>
        <input name="first" id={one} value={info.first} onChange={makeEdit} />
        <label htmlFor={two}>{two}: </label>
        <input name="second" id={two} value={info.second} onChange={makeEdit} />
        <label htmlFor={three}>{three}: </label>
        <input name="third" id={three} value={info.third} onChange={makeEdit} />
        <button onClick={() => setEditMode((prev) => !prev)}>
          Finish {title}
        </button>
      </form>
    </div>
  );
};

export default Segment;
