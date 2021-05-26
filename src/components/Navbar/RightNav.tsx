import {MenuItems} from './MenuItems'

import {useState} from 'react';
import styled from 'styled-components';

import {Ul} from './styles'


const RightNav = ({ open }) => {

  const [visible, setVisible] = useState(false);
  const [visibleContato, setVisibleContato] = useState(false);
  const [visibleHof, setVisibleHof] = useState(false);

  return (
    <Ul open={open} visible={visible} visibleContato={visibleContato} visibleHof={visibleHof}>
       {MenuItems.map((item, index) => {

                      if(item.title === "TRATAMENTOS"){
                        return (
                        
                          <li className="submenu" key={index}>
      
                            <a href={item.url}>
                              {item.title}
                              </a>
                              <img className="arrow" src="/img/icons/arrow.png" onClick={() =>{
                              setVisible(!visible)
                          }}/>
                    
                             
                                <ul className="menuInferior" onMouseLeave={() => {
                            setVisible(false)
                          }}>
                                <li><a href="/Implantodontia">IMPLANTODONTIA</a></li>
                                <li><a href="/Periodontia">PERIODONTIA</a></li>
                                <li><a href="/Extração">EXTRAÇÃO</a></li>
                                <li><a href="/Limpeza">LIMPEZA</a></li>
                                <li><a href="/Clareamento">CLAREAMENTO</a></li>
                                <li><a href="/Protese">PRÓTESE</a></li>
                                <li><a href="/Canal">CANAL</a></li>
                                <li><a href="/Restauracao">RESTAURAÇÃO</a></li>
                              </ul>
                             
                              
                              </li>

                              
                           
                              
                        )
                    }

                    if(item.title === "CONTATO"){
                      return (
                      
                        <li className="submenuContato" key={index}>
    
                          <a href={item.url}>
                            {item.title}
                            </a>
                            <img className="arrowContato" src="/img/icons/arrow.png" onClick={() =>{
                            setVisibleContato(!visibleContato)
                        }}/>
                  
                           
                              <ul className="menuInferiorContato" onMouseLeave={() => {
                            setVisibleContato(false)
                          }}>
                              <li><a href="https://api.whatsapp.com/send?phone=551125613326&text=Ol%C3%A1%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">AGENDE SUA CONSULTA</a></li>
                              <li><a href="/Contato">LOCALIZAÇÃO</a></li>
                            </ul>
                           
                            
                            </li>

                            
                         
                            
                      )
                  }

                  
                  if(item.title === "HARMONIZAÇÃO OROFACIAL"){
                    return (
                    
                      <li className="submenuHof" key={index}>
  
                        <a href={item.url}>
                          {item.title}
                          </a>
                          <img className="arrowHof" src="/img/icons/arrow.png" onClick={() =>{
                          setVisibleHof(!visibleHof)
                      }}/>
                
                         
                            <ul className="menuInferiorHof" onMouseLeave={() => {
                        setVisibleHof(false)
                      }}>
                            <li><a href="/Botox">BOTOX</a></li>
                            <li><a href="/PreenchimentoFacial">PREENCHIMENTOS FACIAIS</a></li>
                            <li><a href="/PreenchimentoLabial">PREENCHIMENTO LABIAL</a></li>
                            <li><a href="/Fios">FIOS DE PDO</a></li>
                            <li><a href="/Microagulhamento">MICROAGULHAMENTO</a></li>
                            <li><a href="/LipoPapada">LIPO ENZIMÁTICA DE PAPADA</a></li>
                            <li><a href="/Rinomodelacao">RINOMODELAÇÃO</a></li>
                            <li><a href="/Skinbooster">SKINBOOSTER</a></li>
                            <li><a href="/Bichectomia">BICHECTOMIA</a></li>
                          </ul>
                         
                          
                          </li>

                          
                       
                          
                    )
                }

                    return (
                        <li key={index}>
                          <a href={item.url}>
                            {item.title}
                            </a>
                            </li>
                    )

                    
                })}
    </Ul>
  )
}

export default RightNav
