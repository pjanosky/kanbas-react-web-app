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
  FaTimes,
} from "react-icons/fa";

function KanbasNavigationSmall(props: {
  children: React.ReactNode;
  hide: () => void;
}) {
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
    <div className="wd-kanbas-navigation-sm">
      <div className="d-flex justify-content-end">
        <FaTimes
          className="m-4"
          onClick={props.hide}
          style={{ color: "black", fontSize: "1.2em" }}
        />
      </div>
      <ul>
        {links.map((link, index) => (
          <li
            className={pathname.includes(link.label) ? "wd-active-sm" : ""}
            key={index}
          >
            <Link to={`/Kanbas/${link.label}`} onClick={props.hide}>
              {link.icon}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KanbasNavigationSmall;
