import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  '@font-face': [
    ...theme.font,
  ],
  myPageNotFound: {
    textAlign: 'center',
    color: '#979797',
    maxWidth: '560px',
    marginLeft: '25%',
    '& h1': {
      fontSize: '80px',
      fontFamily: '"PlutoSansMedium", sans-serif',
    },
    '& p': {
      fontSize: '20px',
      fontFamily: '"PlutoSansCondBold", sans-serif',
    },
    '& a': {
      '&:any-link': {
        textDecoration: 'none',
        color: theme.colorPrimary,
        fontSize: '20px',
        fontFamily: '"PlutoSansCondBold", sans-serif',
      },
      '&:hover': {
        color: theme.colorPrimary,
      },
    },
  },
});

const theNotFound = ({ classes, children, ...rest }) => (
  <div className={classes.myPageNotFound} {...rest}>
    {children}
  </div>
);

const NotFound = injectSheet(styles)(theNotFound);

export {
  NotFound,
}
