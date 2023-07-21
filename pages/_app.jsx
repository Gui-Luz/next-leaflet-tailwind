import { GlobalStyle } from '../src/theme/GlobalStyle';
import '../styles/globals.css';
import '../styles/leaflet.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
    <GlobalStyle />
    return <Component {...pageProps} />;
}

export default MyApp;