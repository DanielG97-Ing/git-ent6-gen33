import { Link } from "react-router-dom"
import './styles/HeaderShared.css'

const HeaderShared = () => {
  return (
    <header className="header">
        <h1 className="header__title"><Link to='/'><span className="header__span-title ">Hotel</span>App</Link></h1>
        <nav>
            <ul className="header__list">
                <li className="header__li-item"><Link to='/reservations'>Reservations</Link></li>
                <li className="header__li-item"><Link to='/register'>Register</Link></li>
                <li className="header__li-item"><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    </header>
  )
}
export default HeaderShared