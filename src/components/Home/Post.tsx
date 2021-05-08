import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';


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
    display:flex;
    justify-content: center;
    
    img {
        width: 250px;
        height: 250px;

        &:hover {
            filter: brightness(65%);
            transition: 0.1s ease;
        }
    }



    a{
        display:flex;
        align-items:center;
        justify-content: center;

    }

`

export function Post(props: PostProps) {
    return (
        <Card>
            <a href={props.post.permalink} target="_blank">
            <img src={props.post.media_url} alt="">  
            </img>
            </a>
        </Card>
    )
}
