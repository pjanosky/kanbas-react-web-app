import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
function WorkingWithObjects() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
  const MODULE_URL = `${API_BASE}/a5/module`;
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "1234",
    name: "NodeJS Module",
    description: "Learn NodeJS and ExpressJS",
    course: "CS4550",
  });
  const fetchAssignment = useCallback(async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  }, [ASSIGNMENT_URL]);
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, [fetchAssignment]);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a href={ASSIGNMENT_URL} className="btn btn-primary">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title`} className="btn btn-primary">
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <input
        className="form-control"
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />{" "}
      <a
        href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
        className="btn btn-primary"
      >
        Update Title
      </a>
      <input
        className="form-control"
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.valueAsNumber })
        }
        value={assignment.score}
      />{" "}
      <a
        href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
        className="btn btn-primary"
      >
        Update Score
      </a>
      <br />
      <div className="form-check">
        <label className="form-check-label">
          Completed
          <input
            className="form-check-input"
            type="checkbox"
            onChange={(e) =>
              setAssignment({ ...assignment, completed: e.target.checked })
            }
            checked={assignment.completed}
          />
        </label>
      </div>
      <a
        href={`${ASSIGNMENT_URL}/completed/${assignment.completed.toString()}`}
        className="btn btn-primary"
      >
        Update Completed
      </a>
      <h3>Modifying Properties</h3>
      <input
        className="form-control"
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <button onClick={updateTitle} className="btn btn-primary">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} className="btn btn-primary">
        Fetch Assignment
      </button>
      <h4>Module Object</h4>
      <a href={MODULE_URL} className="btn btn-primary">
        Get Module
      </a>
      <br />
      <a href={`${MODULE_URL}/name`} className="btn btn-primary">
        Get Module Name
      </a>
      <input
        className="form-control"
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}
      />
      <a href={`${MODULE_URL}/name/${module.name}`} className="btn btn-primary">
        Update Name
      </a>
      <input
        className="form-control"
        type="text"
        onChange={(e) => setModule({ ...module, description: e.target.value })}
        value={module.description}
      />
      <a
        href={`${MODULE_URL}/description/${module.description}`}
        className="btn btn-primary"
      >
        Update Description
      </a>
    </div>
  );
}
export default WorkingWithObjects;
