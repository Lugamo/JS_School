const theme = {
  font: [
    {
      fontFamily: '"PlutoSansMedium"',
      src: 'url("/fonts/PlutoSansMedium.otf")',
    },
    {
      fontFamily: '"PlutoSansCondLight"',
      src: 'url("/fonts/PlutoSansCondLight.otf")',
    },
    {
      fontFamily: '"PlutoSansCondMedium"',
      src: 'url("/fonts/PlutoSansCondMedium.otf")',
    },
    {
      fontFamily: '"PlutoSansCondRegular"',
      src: 'url("/fonts/PlutoSansCondRegular.otf")',
    },
    {
      fontFamily: '"PlutoSansCondBold"',
      src: 'url("/fonts/PlutoSansCondBold.otf")',
    },
    {
      fontFamily: '"PlutoSansRegular"',
      src: 'url("/fonts/PlutoSansRegular.otf")',
    },
  ],
  colorPrimary: '#6ec1e4',
  mainBackground: '#f5f6f8',
  headerBackground: '#fcf8f3',
  logoBackground: '#ffffff',
  colorText: '#00000',
  sideBarBackground: '#231f20',
  liColor: '#fcf8f3ab',
  liHoverColor: '#ffffff',
  colorBackgroundTab: '#797b7c2c',
  sideBarTitle: {
    height: '17px',
    color: '#fcf8f3',
    fontFamily: '"PlutoSansCondBold", sans-serif',
    fontSize: '12px',
    marginLeft: '34px',
    marginTop: '27px',
  },
  bar: {
    background: '#231f20',
    color: '#6ec1e4',

    '@media screen and (max-width: 869px)': {
      display: 'none',
    },
  },
  li: {
    width: '120px',
    height: '19px',
    fontFamily: '"PlutoSansCondLight", sans-serif',
    letterSpacing: '0px',

    '&:hover': {
      cursor: 'pointer',
      color: '#ffffff !important',
    },
    '& a': {
      fontFamily: '"PlutoSansCondLight", sans-serif',
      '&:any-link': {
        textDecoration: 'none',
        color: '#6ec1e4',
      },
      '&:hover': {
        color: '#ffffff !important',
      },
    },
  },
  title: {
    height: '32px',
    color: '#00000',
    fontFamily: '"PlutoSansMedium", sans-serif',
    fontSize: '19px',
  },
};

export default theme;
