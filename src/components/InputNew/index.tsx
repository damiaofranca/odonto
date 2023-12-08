/* eslint-disable no-mixed-spaces-and-tabs */
import { Input as InputNext, InputProps } from "@nextui-org/react";
import React from "react";
import { EyeSlashFilledIcon, EyeFilledIcon } from "..";

export const InputNew: React.FC<InputProps> = ({ ...props }) => {
	const [showPassword, setShowPassword] = React.useState<boolean>(true);

	const toggleVisibility = () => setShowPassword(!showPassword);

	return (
		<InputNext
			{...props}
			{...(props.type === "password"
				? {
						endContent: (
							<button
								type="button"
								onClick={toggleVisibility}
								className="focus:outline-none"
							>
								{showPassword ? <EyeFilledIcon /> : <EyeSlashFilledIcon />}
							</button>
						),
				  }
				: {})}
			variant="flat"
			type={props.type === "password" && showPassword ? "password" : "text"}
		/>
	);
};
