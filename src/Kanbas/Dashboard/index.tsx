import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css";

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="wd-dashboard">
        <div className="d-flex flex-wrap" style={{ gap: "32px" }}>
          {courses.map((course) => (
            <div key={course._id}>
              <div className="card">
                <img
                  src={`/images/${course.image}`}
                  className="card-img-top"
                  alt="course logo"
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ color: course.color }}
                  >
                    {`${course.number} ${course.name}`}
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
