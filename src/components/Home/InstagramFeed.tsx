import {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Post } from './Post';
import { PostVideo } from './PostVideo';


const StyledFeed = styled.div`

    display: flex;
    flex-flow: row wrap;
    width: 100%;
    align-items: center;
    justify-content: center;



`


interface Posts {
    id: number;
    permalink: string;
    media_url: string;
    media_type: string;
}

const tokenAcess = 'IGQVJXa1ZA2dEZAuUDBDMmpHZAWFrVUtrQTNUQndiOTRLVWlmelpqZAnJ5OERlY3I3Mnd6YTBOc2txX25nX1RVbjlwcHVZAZA3c4VnI0UGp2dmtrR2FidEtFdGdBTEx5UENoeTRMMlEtam1leHc1VkNQeWRSWgZDZD'



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
                           if(post.media_type === "IMAGE") {
                            return (
                                <Post key={post.id} post={post}/>
                               )
                           }else {
                               return (
                                    <PostVideo key={post.id} post={post}/>
                               )
                               
                           }
                           
                       }
                   }) 
                }
      </StyledFeed>
  )
}
