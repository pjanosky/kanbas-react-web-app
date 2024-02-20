import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaBullhorn,
  FaBullseye,
  FaCircle,
  FaCog,
  FaComment,
  FaEdit,
  FaFile,
  FaFileAlt,
  FaHome,
  FaPlug,
  FaProjectDiagram,
  FaRocket,
  FaUser,
} from "react-icons/fa";

function CourseNavigationSmall({ hide }: { hide: () => void }) {
  const links = [
    { title: "Home", icon: <FaHome /> },
    { title: "Modules", icon: <FaProjectDiagram /> },
    { title: "Piazza", icon: <FaPlug /> },
    { title: "Zoom", icon: <FaPlug /> },
    { title: "Assignments", icon: <FaEdit /> },
    { title: "Quizzes", icon: <FaRocket /> },
    { title: "Grades", icon: <FaEdit /> },
    { title: "People", icon: <FaUser /> },
    { title: "Panopto", icon: <FaPlug /> },
    { title: "Discussions", icon: <FaComment /> },
    { title: "Announcements", icon: <FaBullhorn /> },
    { title: "Pages", icon: <FaFile /> },
    { title: "Files", icon: <FaFile /> },
    { title: "Rubrics", icon: <FaFileAlt /> },
    { title: "Outcomes", icon: <FaBullseye /> },
    { title: "Collaborations", icon: <FaCircle /> },
    { title: "Syllabus", icon: <FaFileAlt /> },
    { title: "Settings", icon: <FaCog /> },
  ];
  const { pathname } = useLocation();
  return (
    <div>
      <ul className="wd-navigation-sm">
        {links.map((link, index) => (
          <li
            key={index}
            className={pathname.includes(link.title) ? "wd-active" : ""}
          >
            <Link className="wd-link" to={link.title} onClick={hide}>
              {link.icon}
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CourseNavigationSmall;
