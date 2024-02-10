import {
  FaBan,
  FaBullhorn,
  FaCalendar,
  FaChartBar,
  FaCheckCircle,
  FaCrosshairs,
  FaFileImport,
  FaRegBell,
  FaSignOutAlt,
} from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <div className="d-flex gap-4">
      <div className="flex-grow-1 flex-shrink-1">
        <ModuleList />
      </div>

      <div
        className="d-none d-lg-block flex-shrink-0 wd-course-home"
        style={{ width: "275px" }}
      >
        <h3>Course Status</h3>
        <div className="d-flex w-100 mb-3">
          <button className="btn btn-secondary btn-secondary-override w-50">
            <FaBan />
            Unpublish
          </button>
          <button
            disabled
            className="btn btn-success btn-success-override w-50"
          >
            <FaCheckCircle />
            Published
          </button>
        </div>
        <button className="btn btn-secondary btn-secondary-override wd-course-status-btn">
          <FaFileImport />
          Import Existing Content
        </button>
        <button className="btn btn-secondary btn-secondary-override wd-course-status-btn">
          <FaSignOutAlt />
          Import From Commons
        </button>
        <button className="btn btn-secondary btn-secondary-override wd-course-status-btn">
          <FaCrosshairs />
          Choose Home Page
        </button>
        <button className="btn btn-secondary btn-secondary-override wd-course-status-btn">
          <FaChartBar />
          View Course Stream
        </button>
        <button className="btn btn-secondary btn-secondary-override wd-course-status-btn">
          <FaBullhorn />
          New Announcements
        </button>
        <button className="btn btn-secondary btn-secondary-override wd-course-status-btn">
          <FaChartBar />
          New Analytics
        </button>
        <button className="btn btn-secondary btn-secondary-override wd-course-status-btn">
          <FaRegBell />
          View Course Notifications
        </button>

        <div className="d-flex justify-content-between align-items-baseline">
          <h3 className="m-0 p-0 mt-3">Coming Up</h3>
          <span>
            <FaCalendar className=" me-2" />
            <button className="float-end wd-calendar-link">
              View Calendar
            </button>
          </span>
        </div>
        <hr className="p-0 m-0 mb-2" />

        <ul className="wd-coming-up">
          <li>
            <button className="wd-calendar-link">
              <div className="d-flex align-items-baseline">
                <FaCalendar />
                <div>
                  Lecture <br />
                  <span> CS4550.12631.202410 Sep 7 at 11:45am </span>
                </div>
              </div>
            </button>
          </li>
          <li>
            <button className="wd-calendar-link">
              <div className="d-flex align-items-baseline">
                <FaCalendar />
                <div>
                  Lecture <br />
                  <span> CS4550.12631.202410 Sep 11 at 11:45am </span>
                </div>
              </div>
            </button>
          </li>
          <li>
            <button className="wd-calendar-link">
              <div className="d-flex align-items-baseline">
                <FaCalendar />
                <div>
                  Lecture <br />
                  <span> CS5610 06 SP23 LEcture Sep 11 at 6pm </span>
                </div>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Home;
