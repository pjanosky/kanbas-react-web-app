import { Link, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigationLarge() {
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
  const { pathname } = useLocation();
  return (
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link className="wd-link" to={link}>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigationLarge;
