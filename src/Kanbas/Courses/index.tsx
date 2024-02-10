import { courses } from "../../Kanbas/Database";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import "./index.css";
import { FaChevronRight } from "react-icons/fa";
import Home from "./Home";
import Assignments from "./Assignments";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings",
  ];
  const currentPage = links.find((link) => pathname.includes(link));
  const navBarHeight = "50px";

  return (
    <div>
      <div className="wd-course-title p-3" style={{ height: navBarHeight }}>
        <span>
          <HiMiniBars3 className="me-2" />
          <Link to="Home">
            <span>{course?.number}</span>
          </Link>
          <FaChevronRight
            className="ms-1 me-1"
            style={{ color: "lightgray" }}
          />
          <span style={{ color: "gray" }}>{currentPage}</span>
        </span>
        <hr style={{ color: "gray" }} />
      </div>
      <div className="d-flex">
        <div
          className="position-sticky top-0 left-0 overflow-scroll flex-shrink-0 d-none d-md-block"
          style={{ height: `100vh` }}
        >
          <CourseNavigation />
          <div style={{ height: navBarHeight }}></div>
        </div>
        <div className="p-3 flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="Home" replace={true} />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Zoom" element={<h1>Zoom Meetings</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="Panopto" element={<h1>Panopto Video</h1>} />
            <Route path="Discussions" element={<h1>Discussions</h1>} />
            <Route path="Announcements" element={<h1>Announcements</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
            <Route path="Files" element={<h1>Files</h1>} />
            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
            <Route path="Settings" element={<h1>Settings</h1>} />

            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
