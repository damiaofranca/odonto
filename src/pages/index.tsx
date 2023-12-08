import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PUBLICS_PAGES } from "./public";

export const Pages: FC = () => {
	const router = createBrowserRouter([
		// {
		// 	path: "/",
		// 	children: ROUTES_PAGES,
		// 	element: <ProtectedPage element={Layout} validatePage={true} />,
		// },
		{
			path: "/login",
			element: <PUBLICS_PAGES.LoginPage />,
		},
	]);

	return <RouterProvider router={router} />;
};
