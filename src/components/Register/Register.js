import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import './style.css';

function Register() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };


  return (
    <>
    <div className='bold-line'></div>
<div className='container'>

{Object.keys(formErrors).length === 0 && isSubmit ? (
                  navigate("/")
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

  <form className='window' onSubmit={handleSubmit}>
    <div className='overlay'></div>
    <div className='content'>
      <div className='welcome'>Hello There!</div>
      <div className='subtitle'>We're almost done. Before using our services you need to create an account.</div>
      <div className='input-fields'>
        <input  type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange} 
              className='input-line full-width' />
               <p>{formErrors.username}</p>
        <input  type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange} 
              className='input-line full-width' />
               <p>{formErrors.email}</p>
        <input type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange} 
              className='input-line full-width' />
               <p>{formErrors.password}</p>

      </div>
      <div className='spacing'>or continue with <span className='highlight'>Facebook</span></div>
      <div><button className='ghost-round full-width'>Create Account</button></div>
    </div>
  </form>
</div>
</>
  )
}

export default Register

