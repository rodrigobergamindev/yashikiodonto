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