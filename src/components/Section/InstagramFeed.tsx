import {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Post } from './Post';



const StyledFeed = styled.div`

    display: flex;
    flex-flow: row wrap;
    max-width: 1200px;
    align-items: center;
    justify-content: center;



`


interface Posts {
    id: number;
    permalink: string;
    media_url: string;
}

const tokenAcess = 'IGQVJYNFdoU3ZAUNFpuZAG0wcmsyWTdGbWtPdm9FWTNDZAGZAETlVCbzhPZAGVrRGR3dkg4OXBaaVh0V3ZAtVTlHMEtUY3UwSHhSajJCR1RaMEt1US1zNWxsZAmZAiM2hkWFl4R29tbnY2UTFDRHBZAd0FuWTRITwZDZD'



export  function InstagramFeed() {
    const [feed, setFeed] = useState<Posts[]>([]);

    useEffect(() => {
        fetch(`https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token=${tokenAcess}`)
        .then(response => response.json())
        .then(data => setFeed(data.data))
    }, [])

  return (
      <StyledFeed>
                {
                   feed.map((post, index) => {
                       if(index <=7) {
                           return (
                            <Post key={post.id} post={post}/>
                           )
                       }
                   }) 
                }
      </StyledFeed>
  )
}
