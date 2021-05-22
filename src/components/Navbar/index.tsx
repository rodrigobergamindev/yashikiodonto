import React from 'react'
import Burger from './Burger'
import {Nav, SocialMediaList} from './styles'


export const Navbar = () => {
  return (
    
    <Nav>
      
      <a href="/"><div className="logo">
      
      <img src="/img/logo.png"/>
      <div className="headerlogo">

     
      <h4>YASHIKI</h4>
      <h6>ODONTOLOGIA ESPECIALIZADA</h6>
      </div>
      </div>
      </a>
      <Burger/>

      <SocialMediaList>
      <li>follow</li>
      <li><a href="https://www.instagram.com/dr_edermassashi/?hl=pt-br" target="_blank"><img src="/img/socialMedia/instagram.png"/></a></li>
      <li><a href="https://www.facebook.com/lojinhadamayumi/" target="_blank"><img src="/img/socialMedia/facebook.png"/></a></li>
      <li><a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20pe%C3%A7as%20da%20loja" target="_blank"><img src="/img/socialMedia/whatsapp.png"/></a></li>
      </SocialMediaList>
    </Nav>
  )
}

