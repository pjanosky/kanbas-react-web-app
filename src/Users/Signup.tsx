import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import { isAxiosError } from "axios";

export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err) {
      if (isAxiosError(err)) {
        setError(err.response?.data.message || "Error");
      }
    }
  };

  return (
    <div style={{ maxWidth: "500px" }}>
      <h1>Signup</h1>
      {error && <div className="alert alert-danger mb-3">{error}</div>}
      <div className="mb-3">
        <label className="w-100">
          Username
          <input
            className="form-control"
            autoComplete="new-username"
            value={user.username}
            onChange={(e) =>
              setUser({
                ...user,
                username: e.target.value,
              })
            }
          />
        </label>
      </div>
      <div className="mb-3">
        <label className="w-100">
          Password
          <input
            className="form-control"
            type="password"
            autoComplete="new-password"
            value={user.password}
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
          />
        </label>
      </div>
      <button className="btn btn-primary w-100 mb-3" onClick={signup}>
        Signup
      </button>
      <div className="d-flex justify-content-center">Or</div>
      <div className="mt-3">
        <button
          className="btn btn-success w-100"
          onClick={() => navigate("/Kanbas/Account/Signin")}
        >
          Sign In Instead
        </button>
      </div>
    </div>
  );
}
