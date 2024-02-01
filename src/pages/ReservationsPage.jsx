import { useEffect, useState } from "react"
import useCrud from "../hooks/useCrud"
import ReserveCard from "../components/ReservationsPage/ReserveCard"
import FormReviews from "../components/ReservationsPage/FormReviews"
import '../components/shared/styles/ReservationPage.css'

const ReservationsPage = () => {

  const [reserveSelected, setReserveSelected] = useState()

  const [ reservations, getReservations, , deleteReservations ] = useCrud()

  useEffect(() => {
    getReservations('/bookings')
  }, [])

  // console.log(reservations)

  return (
    <div className="reservatinPage">
      <h2 className="reservation__title">Reservations</h2>
      <FormReviews 
        reserveSelected={reserveSelected}
        setReserveSelected={setReserveSelected}
      />
      <div className="reserveCard__container">
        {
          reservations?.map( reserve => (
            <ReserveCard
              key={reserve.id}
              reserve={reserve}
              deleteReservations={deleteReservations}
              setReserveSelected={setReserveSelected}
            />
          ))
        }
      </div>
    </div>
  )
}
export default ReservationsPage