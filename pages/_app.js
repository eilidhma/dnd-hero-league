import '../styles/globals.css';
import Gradient from '../comps/Gradient';
import Logo from '../comps/Logo';
import Dice from '../comps/Dice';
import BookNow from '../comps/BookNow';
import AppProvider from '../utils/provider';
import App from 'next/app';
import Hamb from '../comps/Hamb';
import ContactMe from '../comps/ContactMe';

function MyApp({ Component, pageProps }) {
  return <AppProvider>
  <Gradient/>
  <Logo />
  <Dice />
  <ContactMe />
  <BookNow />
  <Hamb />
  <Component {...pageProps} />

  </AppProvider>
}

export default MyApp
