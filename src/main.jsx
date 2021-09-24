import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";

ReactDOM.render(
	<React.StrictMode>
		<ReactKeycloakProvider authClient={keycloak}>
			<App />
		</ReactKeycloakProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
