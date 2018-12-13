import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import * as userActions from '../../redux/user/userActions';
import * as Style from './StyledLogin';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLog = this.handleLog.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;
    // if the user is alredy logged in, go to default page
    if (this.props.user.token !== null) {
      history.push('/books/all?page=1');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { history, location } = this.props;
    const { state } = location;
    if (this.props.user.token !== nextProps.user.token) {
      // if the user come from a specific url
      if (state) {
        const { pathname, search } = state.prevLocation.location;
        const nextPage = `${pathname}${search}`;
        history.push(nextPage);
      } else {
        // if the user come from login, go to a default page
        history.push('/books/all?page=1');
      }
    }
  }

  // when the user types on the email input
  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  // when the user types on the password input
  handlePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  // onClick the LogIn Button
  handleLog() {
    const { doLogin } = this.props;
    const { email, password } = this.state;
    doLogin({ email, password });
  }

  render() {
    const { error, isLoggingIn } = this.props.user;
    return (
      <Style.Form>
        <Style.Title>Bookshelf</Style.Title>
        <Style.Input
          placeholder="Email"
          type="email"
          onChange={this.handleEmail}
        />
        <Style.Input
          placeholder="Password"
          type="password"
          onChange={this.handlePassword}
        />
        <Style.Button disabled={isLoggingIn} onClick={() => this.handleLog()}>Log In</Style.Button>
        <Style.Message>
            Not an user?
          {' '}
          <NavLink to="/login">Register now</NavLink>
        </Style.Message>
        {error
            && (
              <Style.Error>
                The email or password is incorrect, please enter valid credentials
              </Style.Error>
            )
          }
      </Style.Form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any),
  doLogin: PropTypes.func,
};

// Get the specific data from the store
const mapStateToProps = state => ({
  user: state.user,
});

// get the actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}

// connect the container with data and actions
export default connect(mapStateToProps, mapDispatchToProps)(Login);
