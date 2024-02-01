import { useForm } from "react-hook-form";
import './styles/HomePage.css'


const FilterPrice = ({ setFromTo }) => {
    
    const {handleSubmit, register, reset} = useForm()

    const submit = data => {
        const obj = {
            from: +data.from,
            to: +data.to === 0 ? Infinity : +data.to
        }
        setFromTo(obj)
    }

  return (
    <div className="filterP__container">
      <h3 className="filterP__title">Price</h3>
      <form className="filterP__form" onSubmit={handleSubmit(submit)}>
        <label className="filterP__label">
          <span className="filterP__span">From</span>
          <input {...register('from')} type="number" />
        </label>
        <label className="filterP__label">
          <span className="filterP__span">To</span>
          <input {...register('to')} type="number" />
        </label>
        <button className="filterP__btn">Search</button>
      </form>
    </div>
  );
};
export default FilterPrice;
