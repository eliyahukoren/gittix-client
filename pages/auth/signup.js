import axios from 'axios';
import { useState } from 'react';

export default () => {
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [errors, setErrors ] = useState([]);
  const SIGNUP_URL = "/api/users/signup";

  const onSubmit = async (event) => {
    event.preventDefault();
    setErrors([]);

    try{
      const response = await axios.post(SIGNUP_URL, { email, password });
    }catch(e){
      setErrors(e.response.data.errors);
    }
  }

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <form onSubmit={onSubmit}>
        <h2 className="mb-5 text-center">Sign Up</h2>

        <div className="form-group mb-2">
          <label htmlFor="signUpEmail">Email Address</label>
          <input
            type="email"
            id="signUpEmail"
            placeholder="Enter email"
            area-described="emailHelp"
            className="form-control"
            values={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="signUpPassword">Password</label>

          <input
            type="password"
            autoComplete="new-password"
            id="signUpPassword"
            className="form-control"
            placeholder="Password"
            values={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {errors.length > 0 && <div className="alert alert-danger mt-4">
          <h4>Ooops...</h4>
          <ul>
            {errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>}

        <button className="btn btn-primary mt-4">Sign Up</button>
      </form>
    </div>
  );
}
