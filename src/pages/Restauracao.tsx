import {Container, Description, DescHeader, ContainerBody, Desc, TextContainer, Bar,
    ContainerProfissionais, CardProfissional, ContainerCards} from '../styles/styles.tratamentos'
    import {GlobalStyle} from  '../global'
    import {Navbar} from '../components/Navbar/index'
    import {Footer} from '../components/Footer/Footer'
    
    export default function Limpeza(){
    
        return (
            
            <Container>
                <Navbar/>
                <GlobalStyle/>
    
                <Description>
                    <DescHeader>    
                        <h1>RESTAURAÇÃO</h1>
                        <h6>A restauração é uma forma de fazer com que o dente afetado pela cárie volte à sua forma e sua função normal.</h6>
                    </DescHeader>
                </Description>
    
    
                <ContainerBody>
                <Desc>
                    <h1>CONHEÇA O TRATAMENTO</h1>
                    <TextContainer>

                            <p>A restauração é uma forma de fazer com que o dente afetado pela cárie volte à sua forma e sua função normal. Quando o dentista faz uma restauração, ele primeiro remove a parte do dente que esta deteriorada, limpa a área atingida e então preenche a cavidade limpa com um material de restauração.</p>
                            
                            <p>Ao fechar os espaços onde as bactérias podem se infiltrar, a restauração também ajuda a prevenir uma deterioração posterior. Os materiais utilizados para as restaurações podem ser porcelana, uma resina composta (restauração da cor do dente) e amálgama (uma liga de mercúrio, prata, cobre, estanho e algumas vezes zinco).</p>
                            
                            <p>Não existe um único tipo ideal para todas as pessoas. O que é melhor para cada um será determinado pela extensão do preparo, a possível alergia a certos materiais, o local da boca que precisa ser restaurado e o custo. </p>
                    </TextContainer>
    
                    <Bar/>
    
                    <ContainerProfissionais>
                       
                            <h1>PROFISSIONAIS</h1>
                    
                        <ContainerCards>
    
                        
                        <CardProfissional>
                        <img className="avatar" src="/img/avatar/eder.jpg"/>
                        <div className="descAvatar">

                        
                        <h4>DR. EDER MASSASHI YASHIKI</h4>
                        <h6>CRO.SP - 69976</h6>
                        <button type="button"><img src="/img/socialMedia/callwhite.png"/>LIGUE E AGENDE</button>

                        </div>
                        </CardProfissional>
    
                        <CardProfissional>
                        <img className="avatar" src="/img/avatar/beatriz.jpg"/>
                        <div className="descAvatar">

                        
                            <h4>BEATRIZ MAYUMI YASHIKI</h4>
                            <h6>CRO.SP - 124820</h6>
                            <button type="button"><img src="/img/socialMedia/callwhite.png"/>LIGUE E AGENDE</button>

                        </div>
                        </CardProfissional>
                        </ContainerCards>
                    </ContainerProfissionais>
                </Desc>
                </ContainerBody>
                <Footer/>
            </Container>
    
        )
    
    
    }