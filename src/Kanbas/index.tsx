import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import "./Navigation/index.css";
import Courses from "./Courses";
import { useState } from "react";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import "./index.css";
import KanbasNavigation from "./Navigation";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "new-course.jpg",
  });
  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString(),
      image: "new-course.jpg",
    };
    setCourses([...courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard" replace={true} />} />
        <Route
          path="Account"
          element={
            <KanbasNavigation>
              <h1>Account</h1>
            </KanbasNavigation>
          }
        />
        <Route
          path="Dashboard"
          element={
            <KanbasNavigation>
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            </KanbasNavigation>
          }
        />
        <Route
          path="Courses/:courseId/*"
          element={<Courses courses={courses} />}
        />

        <Route
          path="Courses/*"
          element={
            <KanbasNavigation>
              <h1>Courses</h1>{" "}
            </KanbasNavigation>
          }
        />
        <Route
          path="Calendar"
          element={
            <KanbasNavigation>
              <h1>Calendar</h1>
            </KanbasNavigation>
          }
        />
        <Route
          path="Inbox"
          element={
            <KanbasNavigation>
              <h1>Inbox</h1>
            </KanbasNavigation>
          }
        />
        <Route
          path="History"
          element={
            <KanbasNavigation>
              <h1>History</h1>
            </KanbasNavigation>
          }
        />
        <Route
          path="Studio"
          element={
            <KanbasNavigation>
              <h1>Studio</h1>
            </KanbasNavigation>
          }
        />
        <Route
          path="Commons"
          element={
            <KanbasNavigation>
              <h1>Commons</h1>
            </KanbasNavigation>
          }
        />
        <Route
          path="Help"
          element={
            <KanbasNavigation>
              <h1>Help</h1>
            </KanbasNavigation>
          }
        />
      </Routes>
    </Provider>
  );
}
export default Kanbas;
