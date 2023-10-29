import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
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
            </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;

