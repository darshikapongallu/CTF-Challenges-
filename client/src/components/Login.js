import React from 'react';
import { Link } from "react-router-dom";
function Login({ group, password, onChange, getData }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form
        onSubmit={getData}
        method="post"
        className="border border-muted p-5 rounded shadow"
        style={{ width: "500px" }}
      >
        <div className="form-group mb-2">
          <label htmlFor="name">Group Name</label>

          <input
            type="text"
            className="form-control"
            id="name"
            value={group}
            name="group"
            style={{ width: "100%" }}
            onChange={onChange}
          />
        </div>

        <div className="form-group ">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            name="password"
            style={{ width: "100%" }}
            onChange={onChange}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary text-center mt-4"
            disabled={!group || !password}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
