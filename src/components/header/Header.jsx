import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  .h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    height: 15vh;
    background-color: blue;
    color: greenyellow;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <header>
        <h1 className="h1">Nasa Photo Of The Day</h1>
      </header>
    </StyledHeader>
  );
}

export default Header;
