import React from 'react';

const AppContext = React.createContext();

// Receives a component a wrapped with the data of the provider
// This context if for manage the data of App component
function withAppContext(WrappedComponent) {
  return class extends React.PureComponent {
    render() {
      return (
        <AppContext.Consumer>
          {value => (
            <WrappedComponent {...this.props} {...value} />
          )}
        </AppContext.Consumer>
      );
    }
  };
}
export default AppContext;
export {
  withAppContext,
};
