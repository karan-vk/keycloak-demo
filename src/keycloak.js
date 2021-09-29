import Keycloak from 'keycloak-js'

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'

const keycloakConfig = {
    url: 'http://localhost:8080/auth',
    realm: 'master',
    clientId: 're'
}

const keycloak = new Keycloak({
    clientId: "re",
    url: "http://localhost:8080/auth",
    "realm": "master",
    "auth-server-url": "http://localhost:8080/auth/",
    "ssl-required": "none",
    "resource": "re",
    "credentials": {
        "secret": "430bb46c-9cb1-474b-93bd-edd24bc39c1b"
    },
    "confidential-port": 0
});
export default keycloak