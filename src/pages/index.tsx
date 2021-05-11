
import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar'
import { Section } from '../components/Home/Section'
import Footer from '../components/Footer/Footer';


const Body = styled.div`
      display: flex;
      flex-flow: column nowrap; 
  
`



export default function Home() {
  return (
    <Body>
      <Navbar/>
      <Section/>
      <Footer/>
      </Body>
  )
}
