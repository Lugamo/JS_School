// Actions.js
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Creators

const doLogin = ({ username, password }) => {
	return dispatch => {
		dispatch({ type: LOGIN_REQUEST });

		fetch('apihost').then((response) => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: {
					user: response.user,
					token: response.token,
				}
			});
		}).catch((error) => {
			dispatch({
				type: LOGIN_FAILURE,
				payload: {},
				error: error.toString(),
			});
		});
	};
};


// Reducer
const INITIAL_STATE = {
	user: null,
	token: null,
	isLoggingIn: false,
	error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				isLoggingIn: true,
				error: null
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggingIn: false,
				user: action.payload.user,
				token: action.payload.token,
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isLoggingIn: false,
				error: action.error,
			};
		default:
			return state;
	}
};

// actions -> dispatch -> store -> reducers -> updated connected UI

// LoginForm

class LoginForm extends Component {
	state = { username: '', password: '' };

	componentDidMount = () => {
		if (this.props.token !== null) {
			// Redirect to home.
		}
	}

	componentWillReceiveProps = (nextProps) => {
		if (this.props.token !== nextProps.token) {
			// Redirect to home.
		}
	}

	onSubmit = (e) => {
		const { username, password } = this.state;
		this.props.doLogin({ username, password });
	}

	render() {
		const { isLoggingIn } = this.props;

		return (
			<Form onSubmit={this.onSubmit}>
				.....
				<button disabled={isLoggingIn}>Login</button>
				{isLoggingIn && <Spinner />}
			</Form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggingIn: state.user.isLoggingIn,
		token: state.user.token,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		doLogin: (payload) => dispatch(doLogin(payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
