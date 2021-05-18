
import {SliderItems} from './SliderItems'
import {useState} from 'react'
import {ContainerSlider} from './styles'





export function Slider() {
    const [index, setIndex] = useState(0)
    const [item, setItem] = useState(SliderItems[0])


    function changeNext() {

        console.log(index + " -> Index Next")

        if(index >= SliderItems.length -1){
            setIndex(0)
            setItem(SliderItems[index])
            
        }else{
            setIndex(index + 1)
            setItem(SliderItems[index])
        
        }

        
    }

    function changePrev() {

        console.log(index + " -> Index Prev")
        if(index <= 0 ) {
            setIndex(SliderItems.length - 1)
            setItem(SliderItems[index])
            
        }else {
            setIndex(index - 1)
            setItem(SliderItems[index])
        }

        
        
    }



    return (
        
        <ContainerSlider  style={{backgroundImage: `url(${item.url})`}}>
            <div className="prev"  onClick={changePrev} ></div>
            <div className="next"  onClick={changeNext} ></div>
        </ContainerSlider>
    )
}