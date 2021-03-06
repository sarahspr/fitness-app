import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props) {
	const [loggedIn, setLoggedIn] = useState(undefined);

	const getLoggedIn = async () => {
		const loggedInRes = await axios.get("http://localhost:3000/auth/logged-in");
		setLoggedIn(loggedInRes.data);
	};

	useEffect(() => {
		getLoggedIn();
	});

	return (
		<AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
			{props.children}
		</AuthContext.Provider>
	);
}

export default AuthContext;
export { AuthContextProvider };
