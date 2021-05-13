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

    transition: all 0.3s ease;

        &:hover {
            transform: scale(1.1);
            transition: all 0.3s ease;
            box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        }

        @media (max-width: 931px) {
                
            &:hover {
                transform: none;
                box-shadow: none;
            }


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
