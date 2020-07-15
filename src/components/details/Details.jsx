import React, { useState } from "react";
import "./details.css";

function Details(props) {
  const { data } = props;
  const [details, setDetails] = useState(false);
  return (
    <div className="details">
      <button className="btn" onClick={() => setDetails(!details)}>
        Details
      </button>
      {details && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.explanation}</p>
          <p>{data.date}</p>
          <p>{data.copyright}</p>
          <a href={data.hdurl}>Nasa Photo Link</a>
        </div>
      )}
    </div>
  );
}

export default Details;
