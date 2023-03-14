export default () => {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <form>
        <h2 className="mb-5 text-center">Sign Up</h2>

        <div className="form-group mb-2">
          <label htmlFor="signUpEmail">Email Address</label>
          <input
            type="email"
            id="signUpEmail"
            placeholder="Enter email"
            area-described="emailHelp"
            className="form-control"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="signUpPassword">Password</label>

          <input
            type="password"
            id="signUpPassword"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <button type="button" className="btn btn-primary mt-4">
          Sign Up
        </button>
      </form>
    </div>
  );
}
