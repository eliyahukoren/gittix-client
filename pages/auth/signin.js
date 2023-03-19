import Router from "next/router";
import { useState } from "react";
import useRequest from "../../hooks/useRequest";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SIGNIN_URL = "/api/users/signin";
  const SIGNIN_METHOD = "post";

  const { doRequest, errors } = useRequest({
    url: SIGNIN_URL,
    method: SIGNIN_METHOD,
    body: {
      email,
      password,
    },

    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <form onSubmit={onSubmit}>
        <h2 className="mb-5 text-center">Sign In</h2>

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

        {errors}

        <button className="btn btn-primary mt-4">Sign In</button>
      </form>
    </div>
  );
};
