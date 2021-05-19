import {Container, Description, DescHeader, ContainerBody, Desc, TextContainer, Bar,
    ContainerProfissionais, CardProfissional, ContainerCards} from '../styles/styles.tratamentos'
    import {GlobalStyle} from  '../global'
    import {Navbar} from '../components/Navbar/index'
    import {Footer} from '../components/Footer/Footer'
    
    export default function Extracao(){
    
        return (
            
            <Container>
                <Navbar/>
                <GlobalStyle/>
    
                <Description>
                    <DescHeader>    
                        <h1>EXTRAÇÃO</h1>
                        <h6>O procedimento de extração de dentes se trata da remoção de um ou mais dentes.</h6>
                    </DescHeader>
                </Description>
    
    
                <ContainerBody>
                <Desc>
                    <h1>CONHEÇA O TRATAMENTO</h1>
                    <TextContainer>
                        <p>O procedimento de extração de dentes se trata da remoção de um ou mais dentes. Existem três tipos de extração de dente:</p>

                            <p>Uma <strong>extração simples</strong> é realizada em um dente que esteja visível na boca. 
                                Cirurgiões dentistas normalmente realizam esse tipo de extração. Em uma extração simples, 
                                o dentista luxa o dente com um instrumento chamado fórceps. Em seguida, ele usa um instrumento 
                                chamado forceps para remover o dente.</p>
    
                            <p>Uma <strong>extração cirúrgica</strong> é um procedimento mais complexo. Ela é usada caso um dente esteja quebrado na 
                                linha da gengiva ou se ainda não nasceu. Esse tipo de extração é realizado por um cirurgião-dentista. 
                                No entanto, elas também podem ser feitas por dentistas gerais. O médico faz uma pequena 
                                incisão (corte) na sua gengiva. Algumas vezes é necessário remover um pedaço de osso ao redor 
                                do dente ou cortar o dente no meio para removê-lo.</p>

                            <p>A <strong>extração do siso</strong> para muitos é uma sensação de alívio, principalmente se o dente já estava incomodando e causando dor. 
                                Popularmente conhecido como dente do juízo, são os últimos molares a romperem na cavidade oral na faixa dos 17 a 25 anos, 
                                em média. Entretanto, 
                                muitas vezes, esses dentes nascem com alguma anomalia que dificulta seu nascimento ou que pode até impactar na saúde dos demais dentes.</p>
                            

                            <h4>EM QUAIS CASOS O PROCEDIMENTO É INDICADO ?</h4>

                            <p>Se um dente está fraturado ou foi danificado devido à cárie, seu dentista tentará corrigi-lo com uma restauração, 
                                uma coroa ou outro tratamento. No entanto, em situações mais extremas, o dano pode ser muito grave para o dente ser reparado. 
                                Nesse caso, ele precisará ser extraído. Um dente muito mole que perdeu sua estrutura de suporte também poderá ter a extração indicada.</p>

                            <p>No entanto, é muito importante mencionar que o paciente deve ter gengivas saudáveis e, preferencialmente, 
                                ter ossos adequados para sustentar o suporte. Caso a pessoa sofra com problemas ósseos, como a deficiência na 
                                quantidade de ossos para o processo, é possível consultar um dentista, realizar um enxerto e criar uma base para a anexação das 
                                estruturas, contudo, o procedimento pode variar de paciente para paciente.</p>
                            
            
                    </TextContainer>
    
                    <Bar/>
    
                    <ContainerProfissionais>
                       
                            <h1>PROFISSIONAIS</h1>
                    
                        <ContainerCards>
    
                        
                        <CardProfissional>
                            <img src="/img/avatar/eder.jpg"/>
                            <div className="descAvatar">
    
                            
                            <h4>EDER MASSASHI YASHIKI</h4>
                            <h6>CRO.SP - 67976</h6>
    
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