import React from "react";
import Styled from "styled-components";

function SideNav() {
  return (
    <>
      <StyleWrapper>
        <span>SideNav</span>
      </StyleWrapper>
    </>
  );
}

export default SideNav;

//styles
const StyleWrapper = Styled.div`
  background-color: darkgrey;
  color: white;
`;
