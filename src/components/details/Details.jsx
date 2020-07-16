import React, { useState } from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
  ${(props) => (props.type === "primary" ? `background: #2196f3;` : null)}
  .details {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  .btn {
    width: 6rem;
    height: 3rem;
    border-radius: 0.6rem;
    background-color: tomato;
  }
  p {
    width: 50vw;
  }
`;

function Details(props) {
  const { data } = props;
  const [details, setDetails] = useState(false);

  // Display a loading message while the data is fetching

  if (!data) return <h3>Loading...</h3>;

  return (
    <StyledDetails type="primary">
      <div className="details">
        <button
          type="primary"
          className="btn"
          onClick={() => setDetails(!details)}
        >
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
    </StyledDetails>
  );
}

export default Details;
