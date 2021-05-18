import styled from 'styled-components';
import {CardPost} from './styles'


interface PostProps {
    post: {
        id: number;
        permalink: string;
        media_url: string;
    }
    
}


export function Post(props: PostProps) {
    return (
        <CardPost>
            <a href={props.post.permalink} target="_blank">
            <img src={props.post.media_url} alt="">  
            </img>
            </a>
        </CardPost>
    )
}
