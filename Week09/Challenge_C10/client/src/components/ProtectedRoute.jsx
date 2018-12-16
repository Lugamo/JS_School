import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// When loggedIn is false go to the component, else go to login
// prevLocation is to send the url that user try to access
const ProtectedRoute = ({
  component: Comp,
  loggedIn,
  path,
  location,
  ...rest
}) => (
  <Route
    path={path}
    {...rest}
    render={props => (loggedIn ? (
      <Comp {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            prevLocation: { location },
          },
        }}
      />
    ))}
  />
);

export default ProtectedRoute;
