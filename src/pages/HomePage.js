import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import AuthorizedElement from '../components/AuthorizedElement';

const HomePage = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div>
      <h1>Home Page</h1>

      <strong>Anyone can access this page</strong>
      <h2>RealmAdmin User Role can access bellow button</h2>
      <small>button gose here</small>
      <AuthorizedElement roles={['RealmAdmin']}><button>Realm Admin Acction Button</button></AuthorizedElement>

      <hr />

      <h2>ClientAdmin User Role can access bellow button</h2>
      <small>button gose here</small>
      <AuthorizedElement roles={['ClientAdmin']}><button>Client Admin Acction Button</button></AuthorizedElement>

      <hr />

      {initialized ?
        keycloak.authenticated && <pre >{JSON.stringify(keycloak, undefined, 2)}</pre>
        : <h2>keycloak initializing ....!!!!</h2>
      }
    </div>
  )
}
export default HomePage