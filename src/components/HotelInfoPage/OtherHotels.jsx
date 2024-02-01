import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import HotelCard from "../HomePage/HotelCard"
import './styles/OtherHotel.css'

const OtherHotels = ({ cityId, hotelId }) => {

    const url = `https://hotels-api.academlo.tech/hotels?cityId=${cityId}`
    const [ hotels, getHotels ] = useFetch(url)

    useEffect(() => {
        // if(cityId){
        //     getHotels()
        // }
        cityId && getHotels()
    }, [cityId])

    console.log(hotels)

  return (
    <div>
        <h2 className="otherHotel__title">Other hotels in <span className="otherHotel__span">{hotels?.results[0].city.name}</span></h2>
        <div className="otherHotel__container">
            {
                hotels?.results.filter(hotelInfo => hotelInfo.id !== hotelId).map(hotelInfo => (
                    <HotelCard 
                        key={hotelInfo.id}
                        hotel={hotelInfo}
                    />
                ))
            }
        </div>
    </div>

  )
}
export default OtherHotels