import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"
import '../shared/styles/ReservationPage.css'

const FormReviews = ({ reserveSelected, setReserveSelected }) => {

    const { handleSubmit, register, reset } = useForm()

    const [ ,,createReview ] = useCrud()

    console.log(reserveSelected)

    const submit = data => {
        const obj = {
            ...data,
            hotelId: reserveSelected?.hotelId,
            rating: +data.rating
        }
        createReview('/reviews', obj)
        reset({
            rating: '5',
            comment: '',
        })
        setReserveSelected()
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <h3 className="formReview__title">Form Reviews</h3>
            <label>
                <span>Rating</span>
                <select {...register('rating')}>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="1">⭐</option>
                </select>
            </label>
            <label>
                <span>Comments</span>
                <textarea {...register('comment')}/>
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}
export default FormReviews