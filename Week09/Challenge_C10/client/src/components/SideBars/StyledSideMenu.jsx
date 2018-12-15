import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  '@font-face': {
    ...theme.font,
  },
  mySideMenu: {
    height: '100%',
    width: '0',
    position: 'fixed',
    zIndex: '4',
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
      fontSize: '13px',
      color: theme.colorPrimary,
      listStyleType: 'none',
      marginBottom: '14px',
      marginLeft: '15px',
      ...theme.li,
    },
  },
  myBtnClose: {
    padding: '0px 10px 0px 30px',
    fontFamily: '"PlutoSansCondBold", sans-serif',
    fontSize: '22px',
    color: '#ffffff',
    display: 'block',
    transition: '0.3s',
    cursor: 'pointer',

    '&:hover': {
      color: theme.colorPrimary,
    },
  },
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
  BtnClose,
};
