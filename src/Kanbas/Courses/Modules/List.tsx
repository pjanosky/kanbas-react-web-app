import React, { useEffect, useState } from "react";
import "./index.css";
import { Module } from "../../Database";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlus,
  FaCaretDown,
  FaCaretRight,
  FaGripVertical,
} from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { KanbasState } from "../../store";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList: Module[] = useSelector((state: KanbasState) =>
    state.modulesReducer.modules.filter((module) => module.course === courseId)
  );
  const module: Module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const [selectedModule, setSelectedModule] = useState(
    moduleList.length === 0 ? undefined : moduleList[0]
  );

  const dispatch = useDispatch();
  const handleAddModule = () => {
    client.createModule(courseId || "", module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    client
      .findModulesForCourse(courseId || "")
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId, dispatch]);

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
      <div className="mb-3">
        <input
          className="form-control text-input-override mb-2"
          value={module.name}
          onChange={(e) =>
            dispatch(
              setModule({
                ...module,
                name: e.target.value,
              })
            )
          }
        />
        <textarea
          className="form-control text-input-override mb-2"
          value={module.description}
          onChange={(e) =>
            dispatch(
              setModule({
                ...module,
                description: e.target.value,
              })
            )
          }
        />
        <button
          className="btn btn-primary btn-primary-override me-2"
          onClick={handleAddModule}
        >
          Add
        </button>
        <button
          className="btn btn-primary btn-primary-override"
          onClick={handleUpdateModule}
        >
          Update
        </button>
      </div>
      <ul className="list-group wd-modules">
        {moduleList.map((module) => {
          const isSelected = selectedModule?._id === module._id;
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
                <span className="flex-grow-1 flex-shrink-1">
                  {module.name}: {module.description}
                </span>
                <button
                  className="btn btn-primary btn-primary-override px-1 py-0"
                  onClick={() => handleDeleteModule(module._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-secondary btn-secondary-override px-1 py-0"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
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
                        <div className="flex-grow-1 flex-shrink-1">
                          <div>{lesson.name}</div>
                          <div style={{ fontSize: "14px", color: "gray" }}>
                            {lesson.description}
                          </div>
                        </div>
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
