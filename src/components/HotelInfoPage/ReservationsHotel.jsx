import { useForm } from "react-hook-form";
import useCrud from '../../hooks/useCrud'
import './styles/ReservHot.css'

const ReservationsHotel = ({ hotelId }) => {

    const { handleSubmit, register, reset } = useForm()

    const [ ,,createReservation ] = useCrud()

    const submit = data => {
        const obj = {
            ...data,
            hotelId
        }
        createReservation('/bookings', obj)
    }

  return (
    <div>
      <h3 className="reservHotel__title">Reservations</h3>
      <form className="reservHotel__form" onSubmit={handleSubmit(submit)}>
        <label className="filterP__label">
          <span className="filterP__span">Check-in</span>
          <input  {...register('checkIn')} type="date" />
        </label>
        <label className="filterP__label">
          <span className="filterP__span">Check-out</span>
          <input {...register('checkOut')} type="date" />
        </label>
        <button className="filterP__btn btn2">Submit</button>
      </form>
    </div>
  );
};
export default ReservationsHotel;
