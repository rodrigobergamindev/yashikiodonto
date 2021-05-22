import styled from 'styled-components';
import { InstagramFeed } from './InstagramFeed';
import {Slider} from './Slideshow/Slider';
import {CardPatients} from './CardPatients'

import {Container, DisplaySocialMedia, ContainerPatients } from './styles'
import {Cards} from './Cards'
import {Card} from './Card'

import Typical from "react-typical";

import { CardPatient } from './CardPatient';



export function Home() {
    const frase = 'abordagem que associa saúde e estética.'
    const frase2 = ' abordagem que associa saúde e estética.'

    return (
        <Container>
            <div className="firstContent">
                <h1>Yashiki Odontologia</h1>
                <Typical
                    steps={[frase, 5000, frase2, 5000]}
                    loop={Infinity}
                    wrapper="h2"
                    />
            </div>

            <div className="secondContent">
                <div className="title">
                    <h1>Saúde bucal com quem realmente entende</h1>
                    <h6>Atuamos a mais de 20 anos  no segmento de Odontologia, nosso objetivo
                    é proporcionar aos nossos clientes a excêlencia dos nossos serviços</h6>
                </div>

                <div className="cardContainer">
                    {Cards.map((card,index) => {
                        return (
                            <Card key={index} title={card.title} url={card.url} description={card.description}/>
                        )
                    })}
                </div>
            </div>

            <Slider/>

            <DisplaySocialMedia>

                    <div className="title">
                        <a href="https://www.instagram.com/dr_edermassashi/?hl=pt-br" target="_blank"><img src="/img/socialMedia/instagramcolor.png"/></a>
                        <a href="https://www.instagram.com/dr_edermassashi/?hl=pt-br" target="_blank"><p>@dr_edermassashi</p></a>
                        <h1>ENCONTRE-NOS NO INSTAGRAM</h1>
                    </div>

                    <InstagramFeed/>

            </DisplaySocialMedia>

                    

            <ContainerPatients>

            <div className="title">
                    <h1><strong>Pacientes</strong> satisfeitos</h1>
                    <h6>sorrisos e saúde <strong>transformados</strong></h6>
                </div>


                <div className="cardContainer">
                    {CardPatients.map((card,index) => {
                        return (
                            <CardPatient key={index} title={card.title} description={card.description} url={card.url}/>
                        )
                    })}
                </div>

                <a href="https://api.whatsapp.com/send?phone=551125613326&text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20consulta" target="_blank"><button type="button"><img src="/img/socialMedia/whatsappcolor.png"/>AGENDE SUA CONSULTA</button></a>

            </ContainerPatients>
        </Container>
    )
}

