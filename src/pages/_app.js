import { createWrapper } from 'next-redux-wrapper';
import initStore from '../store';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import '../assets/styles/global.scss';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#e91e63',
        },
        secondary: {
            main: '#f50057',
        },
    }
});

function MyApp({ Component, pageProps }) {

    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}


export const wrapper = createWrapper(initStore, { debug: true });

export default wrapper.withRedux(MyApp);