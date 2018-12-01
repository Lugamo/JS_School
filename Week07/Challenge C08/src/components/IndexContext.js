import React from 'react';

const IndexContext = React.createContext();

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
