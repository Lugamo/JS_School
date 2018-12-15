import theme from '../Theme';
import button from './button';

const tabs = {
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
        },
      },
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
        },
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
          fontFamily: '"PlutoSansCondLight", sans-serif',
        },
      },
      '& .picker': {
        maxWidth: '242px',
        margin: '10px auto',

        '& p': {
          fontFamily: '"PlutoSansCondLight", sans-serif',
          color: '#000000',
        },

        '& button': {
          ...button,
        },
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
          },
        },
      },
    },
  },
};

export default tabs;
