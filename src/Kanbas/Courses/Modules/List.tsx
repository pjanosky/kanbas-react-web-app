import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlus,
  FaCaretDown,
  FaCaretRight,
  FaGripVertical,
} from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="wd-course-home">
      <div className="d-flex justify-content-end flex-wrap gap-1">
        <button className="btn btn-secondary btn-secondary-override">
          Collapse All
        </button>
        <button className="btn btn-secondary btn-secondary-override">
          View Progress
        </button>
        <select
          className="form-select form-select-override"
          defaultValue={"publish-all"}
        >
          <option value="publish-all">Publish All</option>
        </select>
        <button className="btn btn-primary btn-primary-override">
          <FaPlus />
          Module
        </button>
        <button className="btn btn-secondary btn-secondary-override">
          <FaEllipsisV className="m-0" />
        </button>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        {modulesList.map((module) => {
          const isSelected = selectedModule._id === module._id;
          return (
            <li
              key={module._id}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div className="d-flex align-items-center gap-2">
                <FaGripVertical className="flex-shrink-0 " />
                {isSelected && (
                  <FaCaretDown onClick={() => setSelectedModule(module)} />
                )}
                {!isSelected && <FaCaretRight />}
                <span className="flex-grow-1 flex-shrink-1">{module.name}</span>
                <FaCheckCircle className="text-success flex-shrink-0" />
                <FaPlus className="flex-shrink-0" />
                <FaEllipsisV className="flex-shrink-0" />
              </div>
              {isSelected && (
                <ul className="list-group">
                  {module.lessons?.map((lesson) => (
                    <li className="list-group-item" key={lesson._id}>
                      <div className="d-flex align-items-center gap-2">
                        <FaGripVertical className="flex-shrink-0" />
                        <span className="flex-grow-1 flex-shrink-1">
                          {lesson.name}
                        </span>
                        <FaCheckCircle className="text-success flex-shrink-0" />
                        <FaEllipsisV className="flex-shrink-0" />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ModuleList;
