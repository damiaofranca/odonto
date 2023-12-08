import styled from "styled-components";

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	display: flex;
	max-width: 460px;
	align-items: center;
	flex-direction: column;

	@media screen and (max-width: 960px) and (min-width: 0px) {
		max-width: 470px;
	}
`;

export const Logo = styled.img`
	height: 54px;
	user-select: none;
	width: fit-content;
	margin-bottom: 15px;
	pointer-events: none;
`;

export const Title = styled.h1`
	width: 100%;
	color: #1e293b;
	font-size: 36px;
	font-weight: 700;
	line-height: 55px;
	text-align: center;
	font-style: normal;

	@media screen and (max-width: 768px) and (min-width: 481px) {
		max-width: 440px;
	}
`;

export const SubTitle = styled.p`
	width: 100%;
	color: #475569;
	font-size: 16px;
	font-weight: 400;
	margin-top: 17px;
	line-height: 24px;
	text-align: center;
	font-style: normal;
	margin-bottom: 40px;
`;

export const ContainerSubmit = styled.div`
	width: 100%;
`;
