
import {Navbar} from '../components/Navbar/index'
import Head from 'next/head'
import {GlobalStyle} from  '../global'

export default function App() {
  return (
    <>
      <Head>
            <title>Início</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
      <Navbar/>
      <GlobalStyle/>
    </>
  )
}
