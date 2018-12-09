import React from 'react';
import injectSheet from 'react-jss'

const styles = theme => ({
  '@font-face': [
    {
      fontFamily: '"PlutoSansCondLight"',
      src: 'url("/fonts/PlutoSansCondLight.otf")'
    },
    {
      fontFamily: '"PlutoSansCondBold"',
      src: 'url("/fonts/PlutoSansCondBold.otf")'
    }
  ],
  myRightBar: {
    gridArea: 'rightSide',
    background: theme.sideBarBackground,
    color: theme.colorPrimary,
    
    '@media screen and (max-width: 869px)':   {
      width: '100vw',
    },
    '& li': {
      height: '16px',
      color: '#fcf8f3ab',
      fontFamily: '"PlutoSansCondLight", sans-serif',
      fontSize: '12px',
      listStylePosition: 'inside',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      paddingRight: '30px',
      marginBottom: '30px',
  
      '&:hover': {
        cursor: 'pointer',
        color: '#ffffff !important'
      }
    },
  },
  myRightBarTitle: {
    width: '115.67px',
    height: '17px',
    color: theme.headerBackground,
    fontFamily: '"PlutoSansCondBold", sans-serif',
    fontSize: '12px',
    marginLeft: '34px',
    marginTop: '27px',
  },
  myLeftBar: {
    gridArea: 'leftSide',
    background: theme.sideBarBackground,
    color: theme.colorPrimary,
    '@media screen and (max-width: 869px)': {
      display: 'none',
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
  myLeftBarTitle: {
    width: '78.76px',
    height: '17px',
    color: '#ffffff',
    fontFamily: '"PlutoSansCondBold", sans-serif',
    fontSize: '13px',
    marginLeft: '34px',
    marginTop: '27px',
  }
});

const theRightBar = ({ classes, children, ...rest }) => (
  <aside className={classes.myRightBar} {...rest}>
    {children}
  </aside>
);

const theRightBarTitle = ({ classes, children, ...rest }) => (
  <div type="text" className={classes.myRightBarTitle} {...rest}>{children}</div>
);

const theLefttBar = ({ classes, children, ...rest }) => (
  <aside className={classes.myLeftBar} {...rest}>
    {children}
  </aside>
); 

const theLeftBarTitle = ({ classes, children, ...rest }) => (
  <div type="text" className={classes.myLeftBarTitle} {...rest}>{children}</div>
);

const RightBar = injectSheet(styles)(theRightBar);
const RightBarTitle = injectSheet(styles)(theRightBarTitle);
const LeftBar = injectSheet(styles)(theLefttBar);
const LeftBarTitle = injectSheet(styles)(theLeftBarTitle);

export {
  RightBar,
  RightBarTitle,
  LeftBar,
  LeftBarTitle
}
