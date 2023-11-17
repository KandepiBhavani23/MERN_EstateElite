import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Header, Footer, Home, SignIn, SignUp, About, Profile } from "./index";

const App = () => {
	const AppRouter = () => {
		return (
			<>
				<Header />
				<Outlet />
				<Footer />
			</>
		);
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <AppRouter />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "sign-in",
					element: <SignIn />,
				},
				{
					path: "sign-up",
					element: <SignUp />,
				},
				{
					path: "about",
					element: <About />,
				},
				{
					path: "profile",
					element: <Profile />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
