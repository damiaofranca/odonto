import { FC } from "react";
import { Container, Image } from "./styles";
import Background from "../../../assets/images/background-2.svg";
import { SignIn } from "../../../components";

interface ILoginPage {}

export const LoginPage: FC<ILoginPage> = () => {
	return (
		<Container>
			<Image src={Background} />
			<SignIn />
		</Container>
	);
};
