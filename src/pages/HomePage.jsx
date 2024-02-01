import { useEffect, useRef, useState } from "react"
import { getHotelsThunk } from "../store/states/hotels.state"
import { useDispatch, useSelector } from "react-redux"
import ListHotels from "../components/HomePage/ListHotels"
import FilterName from "../components/HomePage/FilterName"
import FilterPrice from "../components/HomePage/FilterPrice"
import FilterCities from "../components/HomePage/FilterCities"
import '../components/HomePage/styles/HomePage.css'


const HomePage = () => {

    const [nameInput, setNameInput] = useState('')
    const [fromTo, setFromTo] = useState({
      from: 0,
      to: Infinity
    })
    
    const hotels = useSelector(states => states.hotels)
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        const url = 'https://hotels-api.academlo.tech/hotels'
        dispatch(getHotelsThunk(url))    
    },[])

    const hotelsFiltered = hotels?.results.filter(hotelInfo => {
      //Filter name
      const filterName = hotelInfo.name.toLowerCase().includes(nameInput)

      //Filter price
      const priceHotel = +hotelInfo.price
      const filterPrice = fromTo.from <= priceHotel && fromTo.to >= priceHotel

      //Filter cities


      return filterName && filterPrice
    })

    // console.log(fromTo)

  return (
    <div className="homePage__front">
      <div className="homePage__filters">
        <h2 className="homePage__filters-title">Filters</h2>
        <FilterPrice setFromTo={setFromTo}/>
        <FilterCities />
      </div>
        <FilterName setNameInput={setNameInput} />
        <ListHotels hotels={hotelsFiltered}/>
    </div>
  )
}
export default HomePage