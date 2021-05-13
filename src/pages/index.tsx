
import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar'
import { Section } from '../components/Home/Section'
import Footer from '../components/Footer/Footer';


const Body = styled.div`
      display: flex;
      flex-flow: column nowrap; 
      align-self: center;
      justify-self: center;
      
      @media (max-width: 931px) {
        flex-flow: column wrap;
        
      }
`



export default function Home() {
  return (
    <Body>
      <Navbar/>
      <Section/>
      </Body>
  )
}
