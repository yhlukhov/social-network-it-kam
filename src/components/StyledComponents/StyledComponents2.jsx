import React from "react";
import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`

const StyledComponents2 = () => {
   return (
      <Wrapper>
         <Button>Button</Button>
         <Button as="a" href="/ref" target="_blank">Button as anchor</Button>
         <ButtonDark>Button dark</ButtonDark>
			<RotateBox>
				<p>I'm rotating!</p>
			</RotateBox>
      </Wrapper>
   );
};

export default StyledComponents2;

//* CSS *//

const Wrapper = styled.section`
   padding: 0.25em;
	background: lightgoldenrodyellow;
	color: darkolivegreen;
`;
const Button = styled.button`
   padding: 0.25em;
   margin: 1em;
   border: 2px solid darkolivegreen;
   border-radius: 3px;
   color: darkolivegreen;
   background: lightcoral;
`;
const ButtonDark = styled(Button)`
	background: darkolivegreen;
	color: lightcoral;
`;
const RotateBox = styled.section`
	width: 80px;
	height: 80px;
	margin: 20px;
	text-align: center;
	border: 1px solid lightseagreen;
	animation: ${rotate} 30s linear infinite;
`