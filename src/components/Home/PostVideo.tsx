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
    display:flex;
    justify-content: center;



    a{
        display:flex;
        align-items:center;
        justify-content: center;

    }

`

export function PostVideo(props: PostProps) {
    return (
        <Card>
            <a href={props.post.permalink} target="_blank">
            <video controls
                src={props.post.media_url}
                width="250" height="250">


                </video>
            </a>
        </Card>
    )
}
