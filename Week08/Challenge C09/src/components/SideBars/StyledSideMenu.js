import React from 'react';
import injectSheet from 'react-jss'

const styles = theme => ({
  '@font-face': {
    fontFamily: '"PlutoSansCondBold"',
    src: 'url("/fonts/PlutoSansCondBold.otf")'
  },
  mySideMenu: {
    height: '100%',
    width: '0',
    position: 'fixed',
    zIndex: '2',
    top: '0',
    left: '0',
    backgroundColor: '#231f20',
    opacity: '0.99',
    overflowX: 'hidden',
    paddingTop: '30px',
    transition: '0.5s',
    '& i': {
      marginRight: '10px',
    },
    '& li': {
      width: '120px',
      height: '19px',
      color: theme.colorPrimary,
      fontFamily: '"PlutoSansCondLight", sans-serif',
      fontSize: '13px',
      letterSpacing: '0px',
      listStyleType: 'none',
      marginBottom: '14px',
      marginLeft: '15px',

      '&:hover': {
        cursor: 'pointer',
        color: '#ffffff !important',
      },
      '& a': {
        fontFamily: '"PlutoSansCondLight", sans-serif',
        '&:any-link': {
          textDecoration: 'none',
          color: theme.colorPrimary,
        },
        '&:hover':{
          color: '#ffffff !important',
        },
      }
    }
  },
  myBtnClose: {
    padding: '0px 10px 0px 30px',
    fontFamily: '"PlutoSansCondBold", sans-serif',
    fontSize: '22px',
    color: '#ffffff',
    display: 'block',
    transition: '0.3s',
    cursor: 'pointer',

    '&hover': {
      color: theme.colorPrimary,
    }
  }
});

const theSideMenu = ({ classes, children, ...rest }) => (
  <div className={classes.mySideMenu} {...rest}>
    {children}
  </div>
);

const theBtnClose = ({ classes, children, ...rest }) => (
  <div className={classes.myBtnClose} {...rest}>
    <i className="fas fa-chevron-left" />
    {children}
  </div>
); 

const SideMenu = injectSheet(styles)(theSideMenu);
const BtnClose = injectSheet(styles)(theBtnClose);

export {
  SideMenu,
  BtnClose
}
