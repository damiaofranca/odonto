import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	min-height: 100vh;
	position: relative;
	align-items: center;
	justify-content: center;
`;

export const Image = styled.img`
	top: 0;
	left: 0;
	z-index: 0;
	width: 100dvw;
	height: 100dvh;
	object-fit: cover;
	position: absolute;
	background-position: center;
	background-repeat: no-repeat;
`;
