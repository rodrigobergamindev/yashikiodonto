import {Container, Description, DescHeader, ContainerBody, Desc, TextContainer, Bar,
    ContainerProfissionais, CardProfissional, ContainerCards} from '../styles/styles.tratamentos'
    import {GlobalStyle} from  '../global'
    import {Navbar} from '../components/Navbar/index'
    import {Footer} from '../components/Footer/Footer'
    
    export default function Implantodontia(){
    
        return (
            
            <Container>
                <Navbar/>
                <GlobalStyle/>
    
                <Description>
                    <DescHeader>    
                        <h1>IMPLANTODONTIA</h1>
                        <h6>Implantodontia é a especialidade da odontologia dedicada a restabelecer a função de mastigação e estética perdidas, devido à ausência de um ou mais dentes</h6>
                    </DescHeader>
                </Description>
    
    
                <ContainerBody>
                <Desc>
                    <h1>CONHEÇA O TRATAMENTO</h1>
                    <TextContainer>
                        <p>A implantodontia é o nome da especialidade odontológica que visa personalizar um conjunto de técnicas empregadas para 
                            implantar ou reimplantar dentes utilizando o implante ósseo integrado. 
                            Esse dispositivo é posicionado cirurgicamente no osso da mandíbula ou maxila onde serão, após alguns meses ou até horas, 
                            local para receber a prótese fixa sobre esse dispositivo de titânio. É válido falar que essa prótese é feita sobre o próprio 
                            suporte e, quando indicada, é ideal para repor dentes perdidos.</p>

                            <h4>COMO FUNCIONAM OS IMPLANTES DENTÁRIOS ?</h4>
    
                            <p>O processo consiste em instalar uma pequena peça feita com titânio no osso, particularmente, 
                                onde havia um dente antigamente. Depois que o implante já foi realizado, é importante esperar a integração ao osso acontecer.
                                 Nesse tempo, é normal utilizar uma coroa provisória para evitar a perda do espaço e já dimensionar como será o dente de cerâmica 
                                 sobre o implante.</p>

                            <p>Passado o período determinado, os dentes artificiais de material mais resistente são colocados ou parafusados sobre o implante. 
                                Eles podem ser encaixados individualmente ou agrupados em dois tipos de próteses principais. São elas:</p>
                            
                            <p><strong>a overdenture:</strong> bastante similar às próteses removíveis naturais, porém mais estável, essa prótese é feita com resina, 
                                necessita apenas de 2 a 6 implantes e pode ser removida pelo próprio paciente.</p>
                            
                            <p><strong>a protocolo:</strong> feita de porcelana ou de resina, que é fixada com 4 a 8 implantes e que é parafusada, 
                                podendo ser retirada somente pelo dentista.</p>

                            <h4>EM QUAIS CASOS O PROCEDIMENTO É INDICADO ?</h4>

                            <p>O procedimento pode ser realizado por pessoas que buscam recuperar os dentes perdidos, e, 
                                desde que haja as condições para a correta indicação, estão correlacionados a um sorriso mais bonito e saudável. 
                                Além disso, quando indicado, pode ser um tratamento ideal para substituir pontes, dentaduras e roaches 
                                (prótese parcial removível).</p>

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
                <img src="/img/socialMedia/whatsappfloat.png" className="iconFloat"/>
            </Container>
    
        )
    
    
    }