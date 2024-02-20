import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaRegClock,
  FaTv,
  FaSignOutAlt,
  FaRegQuestionCircle,
} from "react-icons/fa";

function KanbasNavigationLarge() {
  const links = [
    {
      label: "Account",
      icon: <FaRegUserCircle className=" wd-account" />,
    },
    { label: "Dashboard", icon: <FaTachometerAlt /> },
    { label: "Courses", icon: <FaBook /> },
    { label: "Calendar", icon: <FaRegCalendarAlt /> },
    { label: "Inbox", icon: <FaInbox /> },
    { label: "History", icon: <FaRegClock /> },
    { label: "Studio", icon: <FaTv /> },
    { label: "Commons", icon: <FaSignOutAlt /> },
    { label: "Help", icon: <FaRegQuestionCircle /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li style={{ paddingBottom: "0px" }}>
        <a href="http://northeastern.edu">
          <img
            src="/images/northeastern.png"
            style={{ width: "4em", height: "4em", paddingBottom: "0px" }}
            alt="Northeastern University Logo"
          />
        </a>
      </li>
      {links.map((link, index) => (
        <li
          className={pathname.includes(link.label) ? "wd-active" : ""}
          key={index}
        >
          <Link to={`/Kanbas/${link.label}`}>
            {link.icon}
            <br />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default KanbasNavigationLarge;
