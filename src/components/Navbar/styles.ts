import styled from 'styled-components';



export const Nav = styled.nav`

    z-index: 9999; 
    position: fixed; 
    left: 0; 
    top: 0;

    padding: 1rem;
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    background: var(--primary);
    

.logo {
  flex:1;
  height: 10rem;
  border: 2px solid var(--primary);
  background: var(--secondary);
  display: flex;
  align-items: center;
  justify-content:center;

  h1 {
      color: var(--primary);
  }
}

`

export const SocialMediaList = styled.ul`
        display:flex;
        list-style: none;
        padding: 0.5rem;
        justify-content: flex-end;
        position: relative;
        top: 5px;
        flex: 1;

        li {
          padding: 0.5rem;
          

          img {
            width: 30px;
            height: 30px;
            transform: scale(1.0);
            transition: all 0.3s ease;
            cursor: pointer;
    
            &:hover  {
              transform: scale(1.5);
              transition: all 0.3s ease;
            }
          }
        }

`
