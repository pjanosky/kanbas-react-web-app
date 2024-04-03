import { Navigate, Route, Routes, useLocation } from "react-router";
import Dashboard from "./Dashboard";
import "./Navigation/index.css";
import Courses from "./Courses";
import { useCallback, useEffect, useState } from "react";
import { Course } from "./Database";
import store from "./store";
import { Provider, useDispatch } from "react-redux";
import "./index.css";
import KanbasNavigation from "./Navigation";
import axios from "axios";
import Account from "./Account";
import {
  setNavigationTitles,
  setShowSmallNavButton,
} from "./Navigation/navigationReducer";

export default function Kanbas() {
  return (
    <Provider store={store}>
      <KanbasContent />
    </Provider>
  );
}

function KanbasContent() {
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

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    const currentPage = pathname.split("/")[2] || "";
    if (currentPage.toLowerCase() !== "courses") {
      dispatch(
        setNavigationTitles({
          title: pathname.split("/")[2] || "",
          subtitle: "",
        })
      );
      dispatch(setShowSmallNavButton(false));
    }
  }, [pathname, dispatch]);

  return (
    <KanbasNavigation>
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard" replace={true} />} />
        <Route path="/Account/*" element={<Account />} />
        <Route
          path="Dashboard"
          element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
            />
          }
        />
        <Route
          path="Courses/:courseId/*"
          element={<Courses courses={courses} />}
        />
        <Route path="Courses/*" element={<h1>Courses</h1>} />
        <Route path="Calendar" element={<h1>Calendar</h1>} />
        <Route path="Inbox" element={<h1>Inbox</h1>} />
        <Route path="History" element={<h1>History</h1>} />
        <Route path="Studio" element={<h1>Studio</h1>} />
        <Route path="Commons" element={<h1>Commons</h1>} />
        <Route path="Help" element={<h1>Help</h1>} />
      </Routes>
    </KanbasNavigation>
  );
}
