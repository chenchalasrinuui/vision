import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {Menu} from '../components/Menu'
export default function App({ Component, pageProps }: AppProps) {
  return <div>
  <Header />
  <Menu />
  <Component {...pageProps} />
  <Footer />
</div>
}
