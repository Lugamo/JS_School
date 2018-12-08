import React from 'react';

const IndexContext = React.createContext();

// Receives a component a wrapped with the data of the provider
// This context if for manage the data of Index Component (user data)
function withIndexContext(WrappedComponent) {
  return class extends React.PureComponent {
    render() {
      return (
        <IndexContext.Consumer>
          {value => (
            <WrappedComponent {...this.props} {...value} />
          )}
        </IndexContext.Consumer>
      );
    }
  };
}
export default IndexContext;
export {
  withIndexContext,
};
