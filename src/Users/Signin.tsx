import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/Kanbas/Account/Profile");
    } catch {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={{ maxWidth: "500px" }}>
      <h1>Sign In</h1>
      <div className="mb-3">
        <label className="w-100">
          Username
          <input
            className="form-control"
            value={credentials.username}
            autoComplete="username"
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
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
            value={credentials.password}
            autoComplete="password"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </label>
      </div>
      {error && (
        <div className="mb-3">
          <div className="alert alert-danger">{error}</div>
        </div>
      )}
      <div className="mb-3">
        <button className="btn btn-primary w-100" onClick={signin}>
          Sign In
        </button>
      </div>
      <div className="d-flex justify-content-center">Or</div>
      <div className="mt-3">
        <button
          className="btn btn-success w-100"
          onClick={() => navigate("/Kanbas/Account/Signup")}
        >
          Sign Up Instead
        </button>
      </div>
    </div>
  );
}
