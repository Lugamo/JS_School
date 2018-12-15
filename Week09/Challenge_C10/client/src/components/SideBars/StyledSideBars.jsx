import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  '@font-face': [
    ...theme.font,
  ],
  myRightBar: {
    gridArea: 'rightSide',
    ...theme.bar,

    '& li': {
      height: '16px',
      color: '#fcf8f3ab',
      fontSize: '12px',
      listStylePosition: 'inside',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      paddingRight: '30px',
      marginBottom: '30px',
      ...theme.li,
    },
  },
  myLeftBar: {
    gridArea: 'leftSide',
    ...theme.bar,

    '& li': {
      fontSize: '13px',
      listStyleType: 'none',
      marginBottom: '14px',
      marginLeft: '15px',
      ...theme.li,
    },
  },
  mySideTitle: props => ({
    width: props.width,
    ...theme.sideBarTitle,
  }),
});

const theRightBar = ({ classes, children, ...rest }) => (
  <aside className={classes.myRightBar} {...rest}>
    {children}
  </aside>
);

const theSideTitle = ({ classes, children, ...rest }) => (
  <div type="text" className={classes.mySideTitle} {...rest}>{children}</div>
);

const theLefttBar = ({ classes, children, ...rest }) => (
  <aside className={classes.myLeftBar} {...rest}>
    {children}
  </aside>
);

const RightBar = injectSheet(styles)(theRightBar);
const SideTitle = injectSheet(styles)(theSideTitle);
const LeftBar = injectSheet(styles)(theLefttBar);

export {
  RightBar,
  SideTitle,
  LeftBar,
};
