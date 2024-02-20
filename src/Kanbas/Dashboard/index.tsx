import React from "react";
import { Link } from "react-router-dom";
import { Course } from "../Database";
import "./index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  deleteCourse: (cousreId: string) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h5>Course</h5>
      <div className="mb-4">
        <div className="row">
          <div className="form-group col-12 col-md-3 mb-2">
            <label htmlFor="course-name">Name</label>
            <input
              value={course.name}
              className="form-control text-input-override"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
              id="course-name"
            />
          </div>

          <div className="form-group col-12 col-md-3 mb-2">
            <label htmlFor="course-number">Number</label>
            <input
              value={course.number}
              className="form-control text-input-override"
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
              id="course-number"
            />
          </div>
          <div className="form-group col-12 col-md-3 mb-2">
            <label htmlFor="course-start-date">Start date</label>
            <input
              value={course.startDate}
              className="form-control text-input-override"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
              id="course-start-date"
            />
          </div>
          <div className="form-group col-12 col-md-3 mb-2">
            <label htmlFor="course-end-date">End date</label>
            <input
              value={course.endDate}
              className="form-control text-input-override"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
              id="course-end-date"
            />
          </div>
        </div>
        <div className="d-flex gap-2">
          <button
            className="btn btn-primary btn-primary-override"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className="btn btn-primary btn-primary-override"
            onClick={updateCourse}
          >
            Update
          </button>
        </div>
      </div>
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="wd-dashboard">
        <div className="d-flex flex-wrap" style={{ gap: "32px" }}>
          {courses.map((course) => (
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Home`}>
              <div className="card">
                <img
                  src={`/images/${course.image}`}
                  className="card-img-top"
                  alt="course logo"
                />
                <div className="card-body">
                  <span className="card-title">
                    {`${course.number} ${course.name}`}
                  </span>
                  <p className="card-text">{course.name}</p>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                    className="btn btn-secondary btn-secondary-override me-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                    className="btn btn-secondary btn-secondary-override me-2"
                  >
                    Edit
                  </button>
                  <button className="btn btn-primary btn-primary-override float-end">
                    Go
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
