import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments
} from "./assignmentReducer";
import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);
  //console.log(setAssignments(assignments));
  const navigate = useNavigate();
  //const assignments = db.assignments;
  //const courseAssignments = assignments.filter(
  //  (assignment) => assignment.course === courseId);
  //const courseAssignments = useSelector((state) => state.assignmentReducer.assignments.filter(
  //    (assignment) => assignment.course === courseId));
  const courseAssignments = useSelector((state) => state.assignmentReducer.assignments);
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const dispatch = useDispatch();
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
                <button
                onClick={() => {
                    dispatch(addAssignment(assignment));
                    navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
                }}
                className="btn btn-danger me-2 float-end btn-m wd-btns" 
                > <i class="fa fa-plus" aria-hidden="true"></i> 
                Assignment
                </button>
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
        {courseAssignments.map((assignment)  => (
          <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            onClick={() => dispatch(setAssignment(assignment))}
            className="list-group-item border-0">
            {assignment.title}
          </Link>
          <button className="btn btn-danger my-2 float-end"
            onClick={() => {
              if (window.confirm('Are you sure you want to remove this assignment?')){
                dispatch(deleteAssignment(assignment._id));
              }
            }}>
            Delete
          </button>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
export default Assignments;

