import styled from 'styled-components';


interface PostProps {
    post: {
        id: number;
        permalink: string;
        media_url: string;
    }
    
}


const Card = styled.div`
    max-width: 250px;
    max-height: 250px;
    margin: 0.5rem;
    
    img {
        width: 250px;
        height: 250px;
    }



    a{
        display:flex;
        align-items:center;
        justify-content: center;

        &:hover {
            filter: blur(2px);
            transition: 0.1s ease;
 
        }

    }

`

export function Post(props: PostProps) {
    return (
        <Card>
            <a href={props.post.permalink}>
            <img src={props.post.media_url} alt="">
                
            </img>
            
            </a>
        </Card>
    )
}
