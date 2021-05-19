
import {SliderItems} from '../SliderItems'
import {useState} from 'react'
import {ContainerSlider} from '../styles'





export function Slider() {
    const [index, setIndex] = useState(0)
   

    function changeNext() {

        if(index >= SliderItems.length - 1){
            setIndex(0)
            
            
            
        }else{
            setIndex(index + 1)
     
           
        }

        
        
    }

    function changePrev() {

        
        if(index <= 0 ) {
            setIndex(SliderItems.length - 1)
           
            
        }else {
            setIndex(index - 1)
        
           
        }

       
        
    }



    return (
        
        <ContainerSlider>
          <img src="/img/icons/back.png" className="prev"  onClick={changePrev} />
            <img src="/img/icons/next.png" className="next"  onClick={changeNext} />
            <div className="containerImage">
              
                
                    <div className="containerDesc">
                    <h1>{SliderItems[index].title}</h1>

                    <div className="descriptionProced">
                      <h2>{SliderItems[index].subtitle}</h2>
                      <p>{SliderItems[index].description}</p>
                      <button type="button"><img src="/img/socialMedia/whatsappcolor.png"/>AGENDE SUA CONSULTA</button>
                    </div>
                    </div>
                    
                    <img src={SliderItems[index].url}/>

                  
              
          
            </div>
        </ContainerSlider>
    )
}