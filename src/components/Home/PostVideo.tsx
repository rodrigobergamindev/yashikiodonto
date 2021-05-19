import {Card} from './styles'



interface PostProps {
    post: {
        id: number;
        permalink: string;
        media_url: string;
    }
    
}


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
