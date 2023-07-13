import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";

function Section({ title, description, leftbtn, rightbtn, backgroundimage }) {
	return (
		<Container bgImage={backgroundimage}>
			<Fade bottom>
				<TextContent>
					<h1>{title}</h1>
					<p>{description}</p>
				</TextContent>
			</Fade>
			<Buttons>
				<Fade bottom>
					<ButtonGroup>
						<LeftButton>{leftbtn}</LeftButton>
						{rightbtn && <RightButton>{rightbtn}</RightButton>}
					</ButtonGroup>
				</Fade>
				<DownArrow src="/images/down-arrow.svg" />
			</Buttons>
		</Container>
	);
}

export default Section;

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-image: ${(props) => `url('/images/${props.bgImage}')`};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`

const TextContent = styled.div`
	padding-top: 18vh;
`

const Buttons = styled.div``;

const ButtonGroup = styled.div`
	display: flex;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const LeftButton = styled.div`
	width: 256px;
	height: 40px;
	background-color: rgba(23, 26, 32, 0.8);
	text-transform: uppercase;
	color: white;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px;
	border-radius: 10px;
	opacity: 0.85;
	font-size: 12px;
`

const RightButton = styled(LeftButton)`
	background-color: white;
	color: black;
	opacity: 0.58;
`

const DownArrow = styled.img`
	height: 30px;
	animation: Downarrow infinite 1.3s;
`
