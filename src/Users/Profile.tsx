import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useState, useEffect, useCallback } from "react";
import { isAxiosError } from "axios";
export default function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const fetchProfile = useCallback(async () => {
    try {
      const account = await client.profile();
      account.firstName = account.firstName || "";
      account.lastName = account.lastName || "";
      account.dob = account.dob || "";
      account.email = account.email || "";
      account.role = account.role || "USER";
      setProfile(account);
    } catch (error) {
      if (isAxiosError(error) && error.response?.status === 401) {
        navigate("/Kanbas/Account/Signin");
      }
    }
  }, [navigate]);
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  const save = async () => {
    await client.updateUser(profile);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  return (
    <div style={{ maxWidth: "500px" }}>
      <h1>Profile</h1>
      <div className="mb-3">
        <Link
          to="/Kanbas/Account/Admin/Users"
          className="btn btn-warning w-100"
        >
          Users
        </Link>
      </div>
      {profile && (
        <div>
          <div className="mb-3 d-flex gap-3">
            <label className="w-100">
              Username
              <input
                className="form-control"
                value={profile.username}
                onChange={(e) =>
                  setProfile({ ...profile, username: e.target.value })
                }
              />
            </label>
            <label className="w-100">
              Password
              <input
                className="form-control"
                value={profile.password}
                onChange={(e) =>
                  setProfile({ ...profile, password: e.target.value })
                }
              />
            </label>
          </div>
          <div className="mb-3 d-flex gap-3">
            <label className="w-100">
              First Name
              <input
                className="form-control"
                value={profile.firstName}
                onChange={(e) =>
                  setProfile({ ...profile, firstName: e.target.value })
                }
              />
            </label>
            <label className="w-100">
              Last Name
              <input
                className="form-control"
                value={profile.lastName}
                onChange={(e) =>
                  setProfile({ ...profile, lastName: e.target.value })
                }
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="w-100">
              Email
              <input
                className="form-control"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />
            </label>
          </div>
          <div className="mb-3 d-flex gap-3">
            <label className="w-100">
              Birth Date
              <input
                className="form-control"
                value={profile.dob}
                type="date"
                onChange={(e) =>
                  setProfile({ ...profile, dob: e.target.value })
                }
              />
            </label>
            <label className="w-100">
              Role
              <select
                className="form-select"
                onChange={(e) =>
                  setProfile({ ...profile, role: e.target.value })
                }
                value={profile.role}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </label>
          </div>
          <div className="mb-2">
            <button className="btn btn-primary w-100" onClick={save}>
              Save
            </button>
          </div>
          <button className="btn btn-danger w-100" onClick={signout}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
