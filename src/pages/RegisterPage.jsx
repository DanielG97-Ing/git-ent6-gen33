import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {

  const { handleSubmit, reset, register} = useForm()

  const { createNewUser } = useAuth()

  const submit = data => {
    createNewUser(data)
    reset({
      firstName:'',
      lastName:'',
      password:'',
      gender:'other',
      email:''
    })
  }

  return (
    <div className="loginPage__container">
      <h2 className="loginPage__title">Register</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label className="loginPage__label">
          <span>First Name</span>
          <input {...register('firstName')} type="text" />
        </label>
        <label className="loginPage__label">
          <span>Last Name</span>
          <input {...register('lastName')} type="text" />
        </label>
        <label className="loginPage__label">
          <span>Email</span>
          <input {...register('email')} type="email" placeholder="user@mail.com" />
        </label>
        <label className="loginPage__label">
          <span>Password</span>
          <input {...register('password')} type="password" />
        </label>
        <label className="loginPage__label">
          <span>Gender</span>
          <select {...register('gender')}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <button className="loginPage__btn">Submit</button>
      </form>
    </div>
  );
};
export default RegisterPage;
