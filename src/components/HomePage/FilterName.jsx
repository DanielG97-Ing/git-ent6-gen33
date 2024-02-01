import { useRef } from "react"
import  './styles/HomePage.css'

const FilterName = ({ setNameInput }) => {
  
  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setNameInput(inputSearch.current.value.trim().toLowerCase())
    inputSearch.current.value = ''
  }

  return (
    <form className="filterN__form" onClick={handleSubmit}>
      <input className="filterN__input" ref={inputSearch} type="text" />
      <button className="filterN__search">Search</button>
    </form>
  )
}
export default FilterName