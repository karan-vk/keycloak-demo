import "./App.css";
import { useKeycloak } from "@react-keycloak/web";
import Authorized from "./components/AuthorizedElement";
import React, { useState } from "react";

const HomePage = () => {
	const { keycloak, initialized } = useKeycloak();
	const [debug, setDebug] = useState(false);

	return (
		<div>
			<h1>KeyCloak Demo</h1>
			{/* {keycloak.login({})} */}
			<strong>Anyone can access this page</strong>
			{!!keycloak.authenticated && (
				<button type="button" onClick={() => keycloak.logout()}>
					Client Logout
				</button>
			)}
			<div className="card">
				<h2>`offline_access` user role can access below button</h2>
				<small>button goes here</small>
				<Authorized roles={["offline_access"]}>
					<button>Create Relam</button>
				</Authorized>

				<hr />

				<h2>`ClientAdmin` user role can access below button</h2>
				<small>button gose here</small>
				<Authorized roles={["admin"]}>
					<button>Client Admin Acction Button</button>
				</Authorized>
			</div>
			<button onClick={() => setDebug(!debug)}>Debug</button>
			{debug ? (
				initialized ? (
					keycloak.authenticated && (
						<pre className="json">{JSON.stringify(keycloak, undefined, 2)}</pre>
					)
				) : (
					<h2>keycloak initializing ....!!!!</h2>
				)
			) : (
				"nodebug"
			)}
			{/* {initialized ? (
				keycloak.authenticated && (
					<pre className="json">{JSON.stringify(keycloak, undefined, 2)}</pre>
				)
			) : (
				<h2>keycloak initializing ....!!!!</h2>
			)} */}
		</div>
	);
};
export default HomePage;
