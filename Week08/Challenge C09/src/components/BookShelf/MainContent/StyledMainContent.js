import React from 'react';
import injectSheet from 'react-jss'

const styles = theme => ({
  '@font-face': [
    {
      fontFamily: '"PlutoSansMedium"',
      src: 'url("/fonts/PlutoSansMedium.otf")'
    },
    {
      fontFamily: '"PlutoSansCondMedium"',
      src: 'url("/fonts/PlutoSansCondMedium.otf")'
    },
    {
      fontFamily: '"PlutoSansCondRegular"',
      src: 'url("/fonts/PlutoSansCondRegular.otf")'
    },
    {
      fontFamily: '"PlutoSansCondBold"',
      src: 'url("/fonts/PlutoSansCondBold.otf")'
    },
    {
      fontFamily: '"PlutoSansCondLight"',
      src: 'url("/fonts/PlutoSansCondLight.otf")'
    }
  ],
  myMainContent: {
    gridArea: 'main',
    background: theme.mainBackground,
    color: theme.colorPrimary,
    paddingLeft: '50px',
    paddingRight: '50px',

    '& .notFound': {
      textAlign: 'center',
      marginTop: '10%',
      fontFamily: '"PlutoSansMedium", sans-serif',
      fontSize: '50px',
    },
    '& .loading': {
      marginTop: '10%',
      alignContent: 'center',
    },
  },
  myDetailBook: {
    '& .detailTitle': {
      marginTop: '20px',
      marginBottom: '20px',
      color: '#000000',
      fontFamily: '"PlutoSansMedium", sans-serif',
      fontSize: '25px',
    },
    '& .detailImageSummary': {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
  
      '& .imageBox': {
        '& .detailCover': {
          width: '187px',
          height: '264px',
          borderRadius: '2%',
        }
      },
      '& .summaryBox': {
        '& p': {
          marginLeft: '10px',
          maxHeight: '205px',
          maxWidth: '550px',
          display: '-webkit-box',
          WebkitLineClamp: '10',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          fontFamily: '"PlutoSansCondLight", sans-serif',
          color: '#000000',
        },
        '& .stars': {
          color: theme.colorPrimary,
        }
      }
    },
    '& .react-tabs': {
      WebkitTapHighlightColor: 'transparent',
      marginTop: '30px',
    
      '&__tab-list': {
        margin: '0',
        padding: '0',
        display: 'flex',
        justifyContent: 'space-between',
      },
    
      '&__tab': {
        display: 'inline-block',
        bottom: '-1px',
        fontFamily: '"PlutoSansMedium", sans-serif',
        position: 'relative',
        listStyle: 'none',
        cursor: 'pointer',
        padding: '6px 12px 5px',
        borderRadius: '5px 5px 0 0',
        marginRight: '1px',
        width: '40%',
        textAlign: 'center',
    
        '&--selected': {
          background: theme.colorBackgroundTab,
          color: '#000000',
          borderRadius: '5px 5px 0 0',
          zIndex: '3',
        },
    
        '&--disabled': {
          color: '#808080',
          cursor: 'default',
        },
    
        '&:focus': {
          boxShadow: '0 0 5px hsl(208, 99%, 50%)',
          borderColor: 'hsl(208, 99%, 50%)',
          outline: 'none',
    
          '&:after': {
            content: '""',
            position: 'absolute',
            height: '5px;',
            left: '-4px',
            right: '-4px',
            bottom: '-5px',
            background: theme.colorBackgroundTab,
          }
        }
      },
    
      '&__tab-panel': {
        padding: '10px',
        marginBottom: '20px',
        display: 'none',
        zIndex: '2',
        position: 'relative',
        borderRadius: '0px 0px 5px 5px',
        minHeight: '200px',
    
        '&--selected': {
          display: 'block',
          background: theme.colorBackgroundTab,
        },
  
        '& .BAD': {
          maxWidth: '242px',
          minHeight: '180px',
          margin: '10px auto',
          backgroundColor: '#FFD2D2',
    
          '& p': {
            color: '#D8000C',
            fontSize: '20px',
            paddingTop: '25%',
            textAlign: 'center',
            fontFamily: '"PlutoSansCondLight", sans-serif',
          }
        },
    
        '& .OK': {
          maxWidth: '242px',
          minHeight: '180px',
          margin: '10px auto',
          backgroundColor: '#DFF2BF',
    
          '& p': {
            color: '#4F8A10',
            fontSize: '20px',
            paddingTop: '25%',
            textAlign: 'center',
            fontFamily: '"PlutoSansCondLight", sans-serif'
          }
        },
        '& .picker': {
          maxWidth: '242px',
          margin: '10px auto',
    
          '& p': {
            fontFamily: '"PlutoSansCondLight", sans-serif',
            color: '#000000'
          },
  
          '& button': {
            width: '100%',
            height: '50px',
            padding: '0',
            marginTop: '5px',
            fontSize: '20px',
            color: '#ffffff',
            textAlign: 'center',
            background: theme.colorPrimary,
            border: '0',
            borderRadius: '5px',
            cursor: 'pointer', 
            outline: '0',
          }
        },
        '& ul': {
          listStyleType: 'none',
          fontFamily: '"PlutoSansCondLight", sans-serif',
          fontSize: '15px',
          color: '#000000',
          '& li': {
            marginBottom: '10px',
            '& .field': {
              marginRight: '5px',
              fontFamily: '"PlutoSansCondBold", sans-serif',
            }
          }
        }
      }
    }
  },
  myMainBottom: {
    textAlign: 'center',
    alignContent: 'center',
    margin: '10px 2px 40px 2px',
    fontFamily: '"PlutoSansCondMedium", sans-serif',
  },
  myPagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& a': {
      color: '#383838',
      float: 'left',
      padding: '8px 16px',
      textDecoration: 'none',

      '&:hover:not(.active)': {
        backgroundColor: '#ddd',
        borderRadius: '5px',
      }
    },
    '& a.active': {
      backgroundColor: theme.colorPrimary,
      color: '#ffffff',
      borderRadius: '5px',
    },
    '& .inline': {
      display: 'flex',
    }
  },
  myMainTop: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: '23px 15px 15px 15px',
  },
  myMainTopTitle: {
    width: '170px',
    height: '27px',
    color: theme.sideBarBackground,
    fontFamily: '"PlutoSansCondLight", sans-serif',
    fontSize: '18px'
  },
  myMainTopOrder: {
    width: '160.63px',
    height: '19px',
    color: '#979797',
    fontFamily: '"PlutoSansCondRegular", sans-serif',
    fontSize: '13px',

    '@media screen and (max-width: 869px)': { 
      margin: '10px auto',
    }
  },
  myMainTopDisplay: {
    paddingTop: '5px',
    width: '170px',
    color: theme.colorPrimary,

    '@media screen and (max-width: 869px)': { 
      display: 'none',
    },
    
    '& i': {
      float: 'right',
      margin: '0 0 10px 10px',
    }
  },
  myMainBooks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',

    '& .Book': {
      marginLeft: '8px',
      marginRight: '8px',

      '& .image-container': {
        position: 'relative',
        width: '144px',
        height: '203px',
        marginBottom: '1px',
        maxWidth: '400px',

        '& .btn-read': {
          position: 'absolute',
          top: '49%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          MsTransform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          color: theme.colorPrimary,
          fontSize: '16px',
          padding: '12px',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '2em',
          textAlign: 'center',
          opacity: '0',
          zIndex: '1'
        },

        '& .cover': {
          width: '144px',
          height: '203px',
          borderRadius: '2%',
        },

        '& .lend-mark': {
          position: 'absolute',
          top: '18%',
          left: '90%',
          transform: 'translate(-50%, -50%)',
          MsTransform: 'translate(-50%, -50%)',
          zIndex: '1',
          width: '40px',
          height: '25px',
        },

        '& .lend-mark-back': {
          position: 'absolute',
          top: '23.5%',
          left: '101.5%',
          transform: 'translate(-50%, -50%)',
          MsTransform: 'translate(-50%, -50%)',
          zIndex: '1',
          width: '4.77px',
          height: '8px',
        }
      },

      '& .image-container:hover::after': {
        opacity: '1',
        borderRadius: '2%',
      },

      '& .image-container::after': {
        content: '" "',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgba(35,31,32,0.77)',
        opacity: '0',
      },
      
      '& .image-container:hover .btn-read': {
        opacity: '1',
      },

      '& .book-name': {
        width: '144px',
        color: '#383838',
        fontFamily: '"PlutoSansCondMedium", sans-serif',
        fontSize: '12px',
        marginTop: '11px',
        marginBottom: '0',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },

      '& .author-name': {
        width: '144px',
        height: '17px',
        color: '#9e9e9e',
        fontFamily: '"PlutoSansCondLight", sans-serif',
        fontSize: '10px',
        marginTop: '3px',
        marginBottom: '0',
      },
      '& .stars': {
        marginTop: '1px',
        fontSize: '10px',
        marginBottom: '39px',
      }

    },
    '& .tooltip': {
      position: 'relative',
      display: 'inline',
      fontFamily: '"PlutoSansCondLight", sans-serif',
      fontSize: '12px',
    },

    '& .tooltiptext': {
      '& h1': {
        fontFamily: '"PlutoSansCondBold", sans-serif',
        textTransform: 'uppercase',
        color: theme.colorPrimary,
        fontSize: '13px',
      },
      '& .year': {
        position: 'absolute',
        right: '20px',
        top: '30px',
        color: '#aeaeae',
      },
      '& .author': {
        color: '#aeaeae',
      },
      '& h2': {
        fontFamily: '"PlutoSansCondBold", sans-serif',
        fontSize: '12px',
        marginTop: '18px',
        textTransform: 'uppercase',
        color: '#ffffff',
      },
      '& p': {
        marginTop: '2px',
        marginBottom: '2px',
        color: '#ffffff',
      },
      '& .summary': {  
        height: '77px',
        display: '-webkit-box',
        WebkitLineClamp: '5',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }
    },
    '& .tooltip .tooltiptext': {
      visibility: 'hidden',
      width: '250px',
      backgroundColor: 'rgba(35,31,32,0.8)',
      borderRadius: '5px',
      padding: '21px 31px',
      position: 'absolute',
      zIndex: '3',
      top: '-5px',
      left: '105%',
      opacity: '0',
      transition: 'opacity 0.3s',
    },
    
    '& .tooltip .tooltiptext::after': {
      content: '" "',
      position: 'absolute',
      top: '30%',
      right: '100%',
      marginTop: '-5px',
      borderWidth: '5px',
      borderStyle: 'solid',
      borderColor: 'transparent rgba(35,31,32,0.8) transparent transparent',
    },

    '& .tooltip:hover': {
      '& .image-container::after': {
        opacity: '1',
        borderRadius: '2%',
      },
      '& .image-container .btn-read': {
        opacity: '1',
      }
    },
  
    '& .tooltip:hover .tooltiptext': {
        visibility: 'visible',
        opacity: '1',
    }
  },
  
});

const theMainContent = ({ classes, children, ...rest }) => (
  <main className={classes.myMainContent} {...rest}>
    {children}
  </main>
);

const theMainContentTop = ({ classes, children, ...rest }) => (
  <div className={classes.myMainTop} {...rest}>
    {children}
  </div>
);

const theMainTopTitle = ({ classes, children, ...rest }) => (
  <div className={classes.myMainTopTitle} {...rest}>
    {children}
  </div>
);

const theMainTopOrder = ({ classes, children, ...rest }) => (
  <div className={classes.myMainTopOrder} {...rest}>
    {children}
  </div>
);

const theMainTopDisplay = ({ classes, children, ...rest }) => (
  <div className={classes.myMainTopDisplay} {...rest}>
    {children}
  </div>
);

const theMainBooks = ({ classes, children, ...rest }) => (
  <div className={classes.myMainBooks} {...rest}>
    {children}
  </div>
);

const theMainBottom = ({ classes, children, ...rest }) => (
  <div className={classes.myMainBottom} {...rest}>
    {children}
  </div>
);

const thePagination = ({ classes, children, ...rest }) => (
  <div className={classes.myPagination} {...rest}>
    {children}
  </div>
);

const theDetailBook = ({ classes, children, ...rest }) => (
  <div className={classes.myDetailBook} {...rest}>
    {children}
  </div>
);

const MainContent = injectSheet(styles)(theMainContent);
const MainContentTop = injectSheet(styles)(theMainContentTop);
const MainTopOrder = injectSheet(styles)(theMainTopOrder);
const MainTopTitle = injectSheet(styles)(theMainTopTitle);
const MainTopDisplay = injectSheet(styles)(theMainTopDisplay);
const MainBooks = injectSheet(styles)(theMainBooks);
const MainBottom = injectSheet(styles)(theMainBottom);
const Pagination = injectSheet(styles)(thePagination);
const DetailBook = injectSheet(styles)(theDetailBook);


export {
  MainContent,
  MainContentTop,
  MainTopOrder,
  MainTopTitle,
  MainTopDisplay,
  MainBooks,
  MainBottom,
  Pagination,
  DetailBook
}