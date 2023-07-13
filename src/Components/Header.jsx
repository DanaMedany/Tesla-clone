import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const cars = useSelector((state) => state.car.cars);

	return (
		<Container>
			<a>
				<img src="/images/logo.svg" alt="" />
			</a>
			<MiddleSection>
				{cars &&
					cars.map((car, index) => (
						<a key={index} href="">
							{car}
						</a>
					))}
			</MiddleSection>
			<RightSection>
				<a href="">Shop</a>
				<a href="">Tesla Account</a>
				<CustomMenu onClick={() => setIsOpen(true)} />
			</RightSection>
			<MenuItems show={isOpen}>
				<ul>
					<CloseMenu>
						<CustomClose onClick={() => setIsOpen(false)} />
					</CloseMenu>
					{cars &&
						cars.map((car, index) => (
							<li key={index}>
								<a href="">{car}</a>
							</li>
						))}

					<li>
						<a href="">Used Inventory</a>
					</li>
					<li>
						<a href="">Trade-in</a>
					</li>
					<li>
						<a href="">Cybertruck</a>
					</li>
					<li>
						<a href="">Roadaster</a>
					</li>
					<li>
						<a href="">Semi</a>
					</li>
					<li>
						<a href="">Test Drive</a>
					</li>
				</ul>
			</MenuItems>
		</Container>
	);
}

export default Header;

const Container = styled.div`
	min-height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	padding: 0 20px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
`;
const MiddleSection = styled.div`
	flex: 1;

	a {
		padding: 0 10px;
		color: black;
		text-transform: uppercase;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const RightSection = styled.div`
	display: flex;
	align-items: center;

	a {
		padding: 0 5px;
		color: black;
		text-transform: uppercase;
		font-weight: 600;
	}
`;

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;

const MenuItems = styled.div`
	position: fixed;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 10;
	width: 200px;
	background-color: white;
	transform: ${(props) => (props.show ? "translatex(0)" : "translatex(100%)")};
	transition: transform 0.5s ease-out;

	li {
		padding: 25px 10px 10px;
		width: 300px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		text-align: start;

		a {
			color: black;
			font-weight: 600;
		}
	}
`;

const CloseMenu = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const CustomClose = styled(CloseIcon)`
	cursor: pointer;
`;
