import {useState, useEffect} from 'react'
import { Post } from '../components/Home/Post';
import { PostVideo } from '../components/Home/PostVideo';
import { StyledFeed } from '../styles/styles.harmonizacao'


interface Posts {
    id: number;
    permalink: string;
    media_url: string;
    media_type: string;
}

const tokenAcess = 'IGQVJYMXpTaVV6Q0FzZADdSdGJYeVc5bFM5TmtaVDg0VGhjTV9reVo5T1pjU1Y4cVpUaFh5VlJmM1hDTE5CSWdYYi1xQzYwYUJZAN0J1MzE0d1RFd3hrSF8tc2FJd3FYd1dOWHNNN3MwMnJJVXVnNGpULQZDZD'



export  function FeedHarmonizacao() {
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
                           if(post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM") {
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
