import { useState } from 'react'
import './styles/SliderImgs.css'

const SliderImg = ({ hotel }) => {

    const imgLength = hotel?.images.length

    const [imgSelected, setImgSelected] = useState(0)

    const objStyle = {
        transform: `translateX(calc(-${imgSelected}/${imgLength} * 100%))`,
        width: `calc(${imgLength} * 100%)`
    }

    const handlePrev = () => {
        if(imgSelected -1 >= 0){
            setImgSelected(imgSelected-1)
        }
    }

    const handleNext = () => {
        if(imgSelected + 1 <= imgLength - 1) {
            setImgSelected(cv => cv + 1)
        }
    }

    // console.log(imgLength)

  return (
    <div className="slider">
        <button onClick={handlePrev} className="slider__btn">&lt;</button>
        <div className="slider__exterior">
            <div style={objStyle} className="slider__interior">
                {
                    hotel?.images.map(imgInfo => (
                        <div key={imgInfo.id} className="slider__img-container">
                            <img className='slider__img' src={imgInfo.url} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
        <button onClick={handleNext} className="slider__btn">&gt;</button>
    </div>
  )
}
export default SliderImg