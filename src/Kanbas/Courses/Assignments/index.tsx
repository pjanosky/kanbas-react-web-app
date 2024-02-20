import {
  FaCaretDown,
  FaCheckCircle,
  FaEllipsisV,
  FaGripVertical,
  FaPlus,
  FaRegEdit,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="wd-assignments">
      <div className="d-flex gap-1">
        <input
          className="form-control  form-control-override w-auto"
          placeholder="Search for Assignment"
        />
        <div className="flex-grow-1 flex-shrink-1"></div>
        <button className="btn btn-secondary btn-secondary-override">
          <FaPlus />
          Group
        </button>
        <button className="btn btn-primary btn-primary-override">
          <FaPlus />
          Assignment
        </button>
        <button className="btn btn-secondary btn-secondary-override">
          <FaEllipsisV className="m-0" />
        </button>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="d-flex align-items-center gap-2">
            <FaEllipsisV className="flex-shrink-0" />
            <FaCaretDown className="flex-shrink-0" />
            <span className="flex-grow-1 flex-shrink-1">ASSIGNMENTS</span>
            <span className="badge badge-pill badge-light pill-override flex-shrink-0">
              40% of Total
            </span>
            <FaPlus className="flex-shrink-0" />
            <FaEllipsisV className="flex-shrink-0" />
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item" key={assignment._id}>
                <div className="d-flex align-items-center gap-2">
                  <FaGripVertical className="flex-shrink-0 " />
                  <FaRegEdit
                    className="flex-shrink-0"
                    style={{ color: "green" }}
                  />
                  <div className="flex-grow-1 flex-shrink-1 p-0">
                    <div className="mb-1 p-0">
                      <Link
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </Link>
                    </div>
                    <div
                      className="d-flex flex-wrap p-0 wd-assignment-details"
                      style={{ fontSize: "14px" }}
                    >
                      <span>
                        <Link to="" style={{ color: "red" }}>
                          Multiple Modules
                        </Link>
                        {" | "}
                      </span>
                      <span>
                        <span className="fw-bold">Available:</span>{" "}
                        {formatDate(assignment.available)}
                        {" | "}
                      </span>
                      <span>
                        <span className="fw-bold">Due:</span>{" "}
                        {formatDate(assignment.due)}
                        {" | "}
                      </span>
                      <span>
                        <span className="fw-bold">Points:</span>{" "}
                        {assignment.points}
                      </span>
                    </div>
                  </div>
                  <FaCheckCircle className="text-success flex-shrink-0" />
                  <FaEllipsisV />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default Assignments;

function formatDate(s: string) {
  const date = new Date(s);
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
  });
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
  });

  return `${dateFormatter.format(date)} at ${timeFormatter.format(date)}`;
}
