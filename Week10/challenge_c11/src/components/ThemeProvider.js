import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles'; 
import App from './App';

class ThemeProvider extends Component {
  render() {
    const { Theme } = this.props.theme;
    return (
      <MuiThemeProvider theme={Theme}>
        <App />
      </MuiThemeProvider>
    );
  }
}

// Get the specific data from the store
const mapStateToProps = state => ({
  theme: state.theme,
});

// connect the container with data and actions
export default connect(mapStateToProps)(ThemeProvider);
