import Keycloak from 'keycloak-js'

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'

const keycloakConfig = {
    url: 'http://localhost:8080/auth',
    realm: 'master',
    clientId: 're'
}

const keycloak = new Keycloak({
    ...keycloakConfig,
});

export default keycloak