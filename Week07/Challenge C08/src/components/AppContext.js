import React from 'react';

const AppContext = React.createContext();

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
}
