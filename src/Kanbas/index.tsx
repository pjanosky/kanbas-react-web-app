import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import "./Navigation/index.css";
import Courses from "./Courses";
import { useCallback, useEffect, useState } from "react";
import { Course } from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import "./index.css";
import KanbasNavigation from "./Navigation";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([] as Course[]);
  const API_BASE = process.env.REACT_APP_API_BASE;
  const COURSES_API = `${API_BASE}/api/courses`;
  const findAllCourses = useCallback(async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  }, [COURSES_API]);
  useEffect(() => {
    findAllCourses();
  }, [findAllCourses]);
  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "new-course.jpg",
  });
  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, course);
    setCourses([...courses, response.data]);
  };
  const deleteCourse = async (courseId: string) => {
    await axios.delete(`${COURSES_API}/${courseId}`);
    setCourses(courses.filter((c) => c._id !== courseId));
  };
  const updateCourse = async () => {
    await axios.put(`${COURSES_API}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
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
