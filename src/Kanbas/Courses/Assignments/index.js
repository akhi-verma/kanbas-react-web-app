import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
      <div>
        <h2>Assignments for course {courseId}</h2>
        <div class="row">
          <div class="row-auto">
            <div class="w-25 float-start">
                <input type="text"
                        class="form-control"
                        id="assignmentSearch"
                        placeholder="Search for Assignment"/>
            </div>                                      
            <div class="float-end">
                <a href="#" class="btn btn-secondary btn-m wd-btns"><i class="fa fa-ellipsis-v pt-1" aria-hidden="true"></i></a>
            </div>
            <div class="float-end">
                <a href="#" class="btn btn-danger btn-m wd-btns"><i class="fa fa-plus" aria-hidden="true"></i> Assignment</a>
            </div>   
            <div class="float-end">
                <a href="#" class="btn btn-secondary btn-m wd-btns"><i class="fa fa-plus" aria-hidden="true"></i> Group</a>
            </div>
        </div>
      </div>
      <hr />
      <div> 
        <ul className="list-group col-sm-11">
            <li className="list-group-item list-group-item-secondary">
                <h4>Assignments</h4>
            </li>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
          </Link>
        ))}
        </ul>
      </div>
    </div>
  );
}
export default Assignments;

