
import {Navbar} from '../components/Navbar/index'
import Head from 'next/head'
import {GlobalStyle} from  '../global'
import { Home } from '../components/Home/Home'
import {Footer} from '../components/Footer/Footer'



export default function App() {
  return (
    <>
      <Head>
            <title>Início</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
      <Navbar/>
      <GlobalStyle/>
      <Home/>
      <Footer/>
      <img src="/img/socialMedia/whatsappfloat.png" className="iconFloat"/>
    </>
  )
}
