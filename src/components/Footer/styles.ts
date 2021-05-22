import styled from 'styled-components';




export const StyledFooter = styled.footer`


    background-image: url('/img/footer.png');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  
    
    display:flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;    
    height: 25rem;

    .containerFooter {
      
        display:flex;
        align-items: center;
        justify-content: space-around;
        
       
        width: 100%;
        
        .titleFooter {
            padding: 3rem;

            .logo {

display: flex;
align-items: center;
justify-content:center;


.headerlogo {

 
  display: flex;
  flex-direction: column;
  align-self: center;
  flex:4;
  padding-left: 0.5rem;
  align-items:flex-start;
  flex-wrap: nowrap;
  h4 {
    color: var(--secondary);
    font-size: 0.9rem;
    letter-spacing:2px;
    
  }

  h6 {
      font-weight: 600;
      font-size: 0.6rem;
      color: var(--primary);
      border-radius: 3px;
      padding: 0.2rem;
      background: var(--secondary);
  }
}

img {
  object-fit: contain;
  height: 2.5rem;

}
cursor: pointer;
transition: 0.5s ease-in-out;
&:hover {
  transition: 0.5s ease-in-out;
  
}

}
            
        }
    
        .containerItems {
            padding: 1rem;
            
           
            
            display:flex;
            flex-flow: row nowrap;
            align-items: flex-start;
            justify-content: space-around;
            
            flex: 1;

            .columnFooter {
                display:flex;
                flex-flow: column nowrap;
                align-items: flex-start;
                justify-content: flex-start;
                
                p {
                    
                    line-height: 1.5em;
                    letter-spacing: 1px;
                    max-width: 20rem;
                    font-size: 0.9rem;
                }

                h3{
                    
                    font-size: 1.5em;
                    color: var(--primary);
                    
                }

                ul {
                    list-style: none;
                    display:flex;
                    flex-flow: column nowrap;
                    justify-content: space-between;
                    
                    li{
                        line-height: 2em;
                    letter-spacing: 1px;
                    max-width: 20rem;
                    font-size: 0.9rem;
                    }
                  

                }
            }
        }

    }

    
`