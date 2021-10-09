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
		<div className="p-2">
			<button onClick={logOut} className="btn btn-primary">
				Log out
			</button>
		</div>
	);
}

export default Logout;
