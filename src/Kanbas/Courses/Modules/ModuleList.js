import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";

import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  /*
  const [modules, setModules] = useState(db.modules);
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });
  const addModule = (module) => {
    setModules([
      { ...module, _id: new Date().getTime().toString() },
        ...modules,
    ]);
  };
  const deleteModule = (moduleId) => {
    setModules(modules.filter(
      (module) => module._id !== moduleId));
  };
  const updateModule = () => {
    setModules(
      modules.map((m) => {
        if (m._id === module._id) {
          return module;
        } else {
          return m;
        }
      })
    );
  }
*/
//  const modules = db.modules;
  return (
    <ul className="list-group">
      <div className="row row-auto my-4">
        <li className="list-group-item col-sm-3">
          <input className="form-control form-rounded" value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <br />
          <textarea className="form-control form-rounded" value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          />
          <br />
          {/*<button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>*/}
          <button className="btn btn-success" onClick={handleAddModule}>Add</button>
          <button className="btn btn-primary mx-3" onClick={() => handleUpdateModule(module._id)}>Update</button>
        </li>
      </div>
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
            <li key={index} className="list-group-item list-group-item-secondary">
              <h3>{module.name}</h3>
                <ul class="list-group">
                  <li class="list-group-item">
                      <p>{module.description}</p>
                  </li>
              </ul>
              <button className="btn btn-danger my-2"
                onClick={() => handleDeleteModule(module._id)}>{/*dispatch(deleteModule(module._id))}>*/}
                Delete
              </button>
              <button className="btn btn-warning my-2 mx-3"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
            </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;

