import React from 'react';
import injectSheet from 'react-jss'

const styles = theme => ({
  '@font-face': [
    {
      fontFamily: '"PlutoSansMedium"',
      src: 'url("/fonts/PlutoSansMedium.otf")'
    },
    {
      fontFamily: '"PlutoSansCondLight"',
      src: 'url("/fonts/PlutoSansCondLight.otf")'
    }
  ],
  myLogin: {
    margin: '100px auto',
    width: '300px',
    padding: '30px 25px',
    background: '#ffffff',
    border: '1px solid #c4c4c4'
  },
  myLoginTitle: {
    margin: '-30px -25px 25px',
    padding: '15px 25px',
    lineHeight: '30px',
    fontSize: '19px',
    fontWeight: '300',
    color: '#000000',
    textAlign: 'center',
    background: '#fcf8f3',
    fontFamily: '"PlutoSansMedium", sans-serif',
  },
  myLoginInput: {
    width: '285px',
    height: '50px',
    marginBottom: '25px',
    paddingLeft: '10px',
    fontSize: '15px',
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    '&:focus': {
      borderColor: '#6e8095',
      outline: 'none',
    }
  },
  myLoginButton: {
    width: '100%',
    height: '50px',
    padding: '0',
    fontSize: '20px',
    color: '#fff',
    textAlign: 'center',
    background: theme.colorPrimary,
    border: '0',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: '0',
    fontFamily: '"PlutoSansMedium", sans-serif',
  },
  myLoginLost: {
    textAlign: 'center',
    marginBottom: '0px',
    color: '#9e9e9e',
    fontFamily: '"PlutoSansCondLight", sans-serif',
    fontSize: '14px',
    '& a': {
      color: '#6ec1e4',
      fontFamily: '"PlutoSansCondLight", sans-serif',
      textDecoration: 'none',
      fontSize: '15px',
    }
  },
  myCredentials: {
    marginTop: '30px',
    marginBottom: '10px',
    textAlign: 'center',
    color: 'rgb(250, 81, 81)',
    fontFamily: '"PlutoSansCondLight", sans-serif',
    fontSize: '14px'
  }
});

const Login = ({ classes, children, ...rest }) => (
  <form className={classes.myLogin} {...rest}>
    {children}
  </form>
);

const LoginTitle = ({ classes, children, ...rest }) => (
  <h1 className={classes.myLoginTitle} {...rest}>{children}</h1>
);

const LoginInput = ({ classes, ...rest }) => (
    <input
    type="text"
    className={classes.myLoginInput}
    {...rest}
  />
);

const LoginButton = ({ classes, children, ...rest }) => (
  <button 
    type="button" 
    className={classes.myLoginButton}
    {...rest}
  >
    {children}
  </button>
);

const LoginLost = ({ classes, children, ...rest }) => (
  <p className={classes.myLoginLost} {...rest}>
    {children}
  </p>
);

const LoginLostLink = ({ classes, children, ...rest }) => (
  <a className={classes.myLoginLost} {...rest}>
    {children}
  </a>
);

const LoginCredentials = ({ classes, children, ...rest }) => (
  <div className={classes.myCredentials} {...rest}>
    <p>{children}</p>
  </div>
);


const Form = injectSheet(styles)(Login);
const Title = injectSheet(styles)(LoginTitle);
const Input = injectSheet(styles)(LoginInput);
const Button = injectSheet(styles)(LoginButton);
const Message = injectSheet(styles)(LoginLost);
const MessageLink = injectSheet(styles)(LoginLostLink);
const Error = injectSheet(styles)(LoginCredentials);

export {
  Form,
  Title,
  Input,
  Button,
  Message,
  MessageLink,
  Error,
}
