import { Navigate, Route, Routes } from "react-router";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import "./Navigation/index.css";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex align-items-stretch">
      <div className="d-none d-md-block">
        <KanbasNavigation />
      </div>
      <div className="wd-kanbas-nav-spacer d-none d-md-block"></div>
      <div className="flex-grow-1" style={{ height: "100vh" }}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="Dashboard" replace={true} />}
          />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Courses/*" element={<h1>Courses</h1>} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="Inbox" element={<h1>Inbox</h1>} />
          <Route path="History" element={<h1>History</h1>} />
          <Route path="Studio" element={<h1>Studio</h1>} />
          <Route path="Commons" element={<h1>Commons</h1>} />
          <Route path="Help" element={<h1>Help</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
