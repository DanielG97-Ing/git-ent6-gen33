import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import '../components/shared/styles/LoginPage.css'

const LoginPage = () => {

  const { handleSubmit, reset, register } =  useForm()

  const {loginUser} = useAuth()

  const submit = data => {
    loginUser(data)
    reset({
      email:'',
      password:''
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user') //utilizar usenavigate para volver a la pestaña principal
  }

  if(localStorage.getItem('token')){
    const {firstName, lastName, email} = JSON.parse(localStorage.getItem('user'))
    return(
      <div> 
        <h2>
        Welcome {firstName + ' ' + lastName}
        </h2>
      <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }

  return (
    <div className="loginPage__container">
      <h2 className="loginPage__title">USER</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label className="loginPage__label">
          <span className="loginPage__span">Email</span>
          <input {...register('email')} type="email" />
        </label>
        <label className="loginPage__label">
          <span className="loginPage__span">Password</span>
          <input {...register('password')} type="password" />
        </label>
        <button className="loginPage__btn">Submit</button>
      </form>
    </div>
  );
};
export default LoginPage;
