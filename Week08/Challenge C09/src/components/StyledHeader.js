import React from 'react';
import injectSheet from 'react-jss'

const styles = theme => ({
  '@font-face': [
    {
      fontFamily: '"PlutoSansMedium"',
      src: 'url("/fonts/PlutoSansMedium.otf")'
    },
    {
      fontFamily: '"PlutoSansCondRegular"',
      src: 'url("/fonts/PlutoSansCondRegular.otf")'
    },
    {
      fontFamily: '"PlutoSansRegular"',
      src: 'url("/fonts/PlutoSansRegular.otf")'
    }
  ],
  myHeader: {
    gridArea: 'theader',
    display: 'grid',
    background: theme.headerBackground,
    borderBottom: '1px solid #6ec1e4',

    '@media screen and (min-width: 1095px)': { 
      gridTemplateColumns: '0px 200px 2fr 2fr 200px',
      gridTemplateAreas: '"navBar logo text-tittle search-input user"',
    },
    '@media screen and (max-width: 1094px) and (min-width:870px)': {
      gridTemplateColumns: '0px 200px auto 2fr 0px',
      gridTemplateAreas: '"navBar logo text-tittle search-input user"',
    },
    '@media screen and (max-width: 869px)': {
      gridTemplateCColumns: '65px 0px auto 0px 0px',
      gridTemplateAreas: '"navBar logo text-tittle search-input user"'
    },
  },
  myNavBar: {
    gridArea: 'navBar',
    fontSize: '40px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    '@media screen and (min-width: 870px)': { 
      display: 'none',
    },
    '& i': {
      margin: '12px 15px 0px 15px'
    }
  },
  myLogo: {
    gridArea: 'logo',
    '@media screen and (max-width: 869px)': { 
      display: 'none',
    },
    background: theme.logoBackground,
    '& img': {
      maxWidth: '140px',
      marginTop: '13px',
      marginLeft: '35px'
    } 
  },
  myTextTittle: {
    gridArea: 'text-tittle',
    width: '103.45px',
    height: '32px',
    color: theme.colorText,
    fontFamily: '"PlutoSansMedium"',
    fontSize: '19px',
    marginTop: '21px',
    marginLeft: '18px',
  },
  myUser: {
    gridArea: 'user',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '220px',
    minWidth: '50px',
    borderLeft: '1px solid gray',
    '@media screen and (max-width: 869px)': { 
      display: 'none',
    },
    '& i': {
      marginRight: '16px',
    }
  },
  myUserName: {
    color: theme.colorText,
    fontFamily: '"PlutoSansCondRegular"',
    fontSize: '14px',
    marginRight: '10px',
    marginLeft: '10px'
  },
  myProfilePhoto: {
    marginRight: '10px',
    height: '36px',
    width: '36px',
    borderRadius: '50%',
  },
  mySearch: {
    gridArea: 'search-input',
    '@media screen and (max-width: 869px)': {
      display: 'none',
    },
    '& form': {
      position: 'relative',
      bottom: '3px',
      justifyItems: 'center',
      marginTop: '21px',

      '& input': {
        position: 'relative',
        left: '43%',
        border: `1px solid ${theme.colorPrimary}`,
        fontFamily: '"PlutoSansRegular"',
        color: '#000000',
        fontSize: '11px',
        lineHeight: '19px',
        textAlign: 'left',
        backgroundImage: 'url("../../assets/images/search-black.png")',
        backgroundSize: '17px',
        backgroundPosition: '10px 6px',
        backgroundRepeat: 'no-repeat',
        width: '41%',
        height: '1.3em',
        padding: '7px 15px 6px 34px',
        borderRadius: '20px',
        textShadow: '0 2px 3px rgba(0, 0, 0, 0.1)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15) inset',
        transition: 'all 0.7s ease 0s',

        '&::placeholder': {
          color: '#000000',
        }
      }
    }
  }
});

const theHeader = ({ classes, children, ...rest }) => (
  <header className={classes.myHeader} {...rest}>
    {children}
  </header>
);

const theNavBar = ({ classes, children, ...rest }) => (
  <nav className={classes.myNavBar} {...rest}>
    {children}
  </nav>
);

const theLogo = ({ classes, children, ...rest }) => (
  <div className={classes.myLogo}>
    <img {...rest} alt='Jobsity-logo'/>
  </div>
);

const theTitle = ({ classes, children, ...rest }) => (
  <div className={classes.myTextTittle} {...rest}>
    {children}
  </div>
);

const theUser = ({ classes, children, ...rest }) => (
  <div className={classes.myUser}>
    {children}
    <i className="fas fa-caret-down" />
    <img className={classes.myProfilePhoto} {...rest} alt='user-account-ph' />
  </div>
);

const theUserName = ({ classes, children, ...rest }) => (
  <div className={classes.myUserName} {...rest}>{children}</div>
);

const theSearch = ({ classes, ...rest }) => (
  <div className={classes.mySearch}>
    <form method="get" action="/search">
      <input {...rest} />
    </form>
  </div>
);

const Header = injectSheet(styles)(theHeader);
const NavBar = injectSheet(styles)(theNavBar);
const Logo = injectSheet(styles)(theLogo);
const Title = injectSheet(styles)(theTitle);
const User = injectSheet(styles)(theUser);
const UserName = injectSheet(styles)(theUserName);
const Search = injectSheet(styles)(theSearch);

export {
  Header,
  NavBar,
  Logo,
  Title,
  User,
  UserName,
  Search
}