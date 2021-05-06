import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar'
import { Section } from '../components/Section/Section'


const Body = styled.div`
      display: flex;
      flex-flow: column nowrap; 
`



export default function Home() {
  return (
    <Body>
      <Navbar/>
      <Section/>
      </Body>
  )
}
