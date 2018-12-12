import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  '@global': {
    body: {
      background: theme.mainBackground,
      margin: '0',
    },
  },
  myWrapper: {
    display: 'grid',
    overflow: 'hidden',

    '@media screen and (min-width: 1095px)': {
      gridTemplateColumns: '200px auto 200px',
      gridTemplateRows: '66px auto',
      gridTemplateAreas: '"theader theader theader""leftSide main rightSide"',
    },
    '@media screen and (max-width: 1094px) and (min-width:870px)': {
      gridTemplateColumns: '200px auto',
      gridTemplateRows: '66px 310px auto',
      gridTemplateAreas: '"theader theader""leftSide main""rightSide main"',
    },
    '@media screen and (max-width: 869px)': {
      gridTemplateRows: '66px 0px auto auto',
      gridTemplateAreas: '"theader""leftSide""main""rightSide"',
    },
  },
});

const theWrapper = ({ classes, children, ...rest }) => (
  <div className={classes.myWrapper} {...rest}>
    {children}
  </div>
);

const Wrapper = injectSheet(styles)(theWrapper);

export {
  Wrapper,
}
