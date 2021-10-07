import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

function Logout() {
	const { getLoggedIn } = useContext(AuthContext);
	const history = useHistory();
	const logOut = async () => {
		await axios.get("http://localhost:3000/auth/logout");
		await getLoggedIn();
		history.push("/login");
	};

	return (
		<button onClick={logOut} className="btn-secondary">
			Log out
		</button>
	);
}

export default Logout;
