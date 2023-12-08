import React from "react";
import { Logo, Title, SubTitle, Container, ContainerSubmit } from "./styles";

import logo from "../../assets/images/logo.svg";
import { Button } from "@nextui-org/react";
import { GoogleIcon } from "../GoogleIcon";

export const SignIn: React.FC = () => {
	return (
		<Container className="bg-neutral-100 rounded-md px-6 py-7 border border-zync-400">
			<Logo src={logo} alt="Consultório odontologico" />
			<Title>Acesse a plataforma</Title>
			<SubTitle>
				Continue para agendar suas consultas no melhor horário possível.
			</SubTitle>
			<ContainerSubmit>
				<Button
					type="submit"
					color="primary"
					variant="flat"
					className="w-full"
					endContent={<GoogleIcon />}
				>
					Continuar com
				</Button>
			</ContainerSubmit>
		</Container>
	);
};
