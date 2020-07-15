import React from "react";

function Image(props) {
  const { data } = props;
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.hdurl} alt="" />
    </div>
  );
}

export default Image;
