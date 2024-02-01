import getDaysFromDates from "../../services/getDaysFromDates"
import "../HomePage/styles/HotelCard.css"

const ReserveCard = ({ reserve, deleteReservations, setReserveSelected }) => {

    const date1 = reserve.checkIn
    const date2 = reserve.checkOut

    const reservertionDate = getDaysFromDates(date1,date2)

    console.log(reserve)

    const handleDelete = () => {
        deleteReservations('/bookings', reserve.id)
    }

    const handleReviews = () => {
      setReserveSelected(reserve)
    }

  return (
    <div className="card">
       <header className="card__header">
        <img className="card__img" src={reserve.hotel.images[0].url} alt="" />
       </header>
       <section className="card__body">
        <h3 className="card__name">{reserve.hotel.name}</h3>
        <div>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
        <div onClick={handleReviews} className="reserve__rate">Rate and comment this visit</div>
        <div><span>Reservations days: </span><span>{reservertionDate}</span></div>
        <div><span>Subtotal price: </span><span>{reservertionDate*Number(reserve.hotel.price)}</span></div>
       </section>
       <button className="card__btn" onClick={handleDelete}>Delete</button>
    </div>
  )
}
export default ReserveCard