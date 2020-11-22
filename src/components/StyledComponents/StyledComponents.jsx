import React from "react";
import styled, { css } from "styled-components";

const StyledComponents = () => {
   return (
   <Wrapper>
      <Title>Title - styled.h1</Title>
      <Button>Button - regular</Button>
      <Button primary>Button - primary</Button>
      <Button secondary>Button - secondary</Button>
   </Wrapper>
   )
};

export default StyledComponents;

// * CSS * //

const Wrapper = styled.section`
   padding: 4em;
   background: papayawhip;
`;
const Title = styled.h1`
   font-size: 1.5em;
   text-align: center;
   color: palevioletred;
`;
const Button = styled.button`
   margin: 1em;
   padding: 0.25em 1em;
   border: 2px solid palevioletred;
   border-radius: 3px;
   background: ${props => props.primary ? "palevioletred" : props.secondary ? "lightgrey" : "white"};
   color: ${props => props.primary ? "white" : "palevioletred"};
`;
// Custom Component
const Link = (props) => {
   return (
      <a href=""></a>
   )
}