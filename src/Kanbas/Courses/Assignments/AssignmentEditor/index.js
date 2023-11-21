import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentReducer";
import * as client from "../client";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  //const assignment = db.assignments.find(
  //  (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const handleAddAssignment = () => {
    client.createAssignment(assignmentId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };

  const courseAssignments = useSelector((state) => state.assignmentReducer.assignments.filter(
    (assignment) => assignment.course === courseId));
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const dispatch = useDispatch();
  return (
    <div className="col-sm-11">
      <div className="row">
        <div className="row-auto">                             
            <div className="float-end">
                <i className="fa-solid fa-circle-check"></i>
                <p className="published d-inline">Published</p>
                <a href="#" className="btn btn-secondary btn-m wd-btns"><i className="fa fa-ellipsis-v pt-1" aria-hidden="true"></i></a>
            </div>
        </div>
      </div>
    <div className="row">
        <br />
        <hr />
    </div>
    <div className="row">
    </div>
      <label for="assignmentName"
                className="form-label">
                Assignment Name
      </label>
      <input value={assignment.title} id="assignmentName"
            onChange={(e) =>
                dispatch(setAssignment({ ...assignment, title: e.target.value }))
            }
             className="form-control mb-2" />
        <textarea id="assignmentDescription"
            onChange={(e) =>
                dispatch(setAssignment({ ...assignment, description: e.target.value }))
            }
                    className="form-control mb-2"
                    defaultValue="This is a placeholder text for this assignment."
                    rows="3">
        </textarea>
        <div className="row justify-content-center mb-3">
            <label for="points" className="col-1 col-form-label text-end col-sm-4 col-md-1">Points</label>
            <div className="col-3 text-start col-sm-4 col-md-3">
                <input type="number" value="100" max="100" min="0" step="5" className="form-control" id="inputPoints"/>
            </div>
        </div>
        
        <div className="row justify-content-center mb-3">
            <label for="inputGroupSelect01" className="col-1 text-end mt-1 col-sm-4 col-md-1">Options</label>
            <div className="col-3 text-start col-sm-4 col-md-3">
                <select className="form-select" data-width="100%" id="inputGroupSelect01">
                    <option selected>Assignments</option>
                    <option value="1">Placeholder Text 2</option>
                </select> 
            </div> 
        </div>
        <div className="row justify-content-center mb-3">
            <label for="inputGroupSelect02" className="col-1 text-end mt-1 col-sm-4 col-md-1">Display Grade as</label>
            <div className="col-3 text-start col-sm-4 col-md-3">
                <select className="form-select" data-width="100%" id="inputGroupSelect02">
                    <option selected>Percentage</option>
                    <option value="1">Placeholder Text 2</option>
                </select> 
            </div>   
        </div>
        <div className="row justify-content-center mb-3">
            <div className="col-sm-4 col-md-3 offset-sm-1">
                <div className="form-check">
                    <input className="form-check-input"
                            type="checkbox" id="r6"/>
                    <label className="form-check-label" for="r6">
                        Do not count this assignment towards the final grade</label>
                </div>
            </div>
        </div>
        <div className="row justify-content-center mb-3">
            <div 
                className="col-1 col-form-label text-end col-sm-4 col-md-1">Submission Type
            </div>
            <div className="col-3 text-start col-sm-4 col-md-3">  
                <div className="col text-start col-sm-12 border px-3">    
                    <div className="col-3 text-start col-sm-4 col-md-4 py-4">
                        <select className="form-select" data-width="100%" id="inputGroupSelect01">
                            <option selected>Online</option>
                            <option value="1">Placeholder Text 2</option>
                        </select> 
                    </div>  
                    <h7><b>Online Entry Options</b></h7> 
                    
                    <div className="col-sm-4 col-md-3 py-2">
                        <div className="form-check">
                        <input className="form-check-input"
                                type="checkbox" id="textEntry"/>
                            <label className="form-check-label" for="textEntry">
                            Text entry</label>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 py-2">
                        <div className="form-check">
                        <input className="form-check-input"
                                type="checkbox" id="websiteURL"/>
                            <label className="form-check-label" for="websiteURL">
                            Website URL</label>
                        </div>
                    </div>
                    <div className="col-sm-6 py-2">
                        <div className="form-check">
                        <input className="form-check-input"
                                type="checkbox" id="mediaRecordings"/>
                            <label className="form-check-label" for="mediaRecordings">
                            Media Recordings</label>
                        </div>
                    </div>
                    <div className="col-sm-6 py-2">
                        <div className="form-check">
                        <input className="form-check-input"
                                type="checkbox" id="studentAnnotation"/>
                            <label className="form-check-label" for="studentAnnotation">
                            Student Annotation</label>
                        </div>
                    </div>
                    <div className="col-sm-6 py-2">
                        <div className="form-check">
                        <input className="form-check-input"
                                type="checkbox" id="FileUploads"/>
                            <label className="form-check-label" for="FileUploads">
                            File Uploads</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center mb-3">
            <div 
                className="col-1 col-form-label text-end col-sm-4 col-md-1">Assign
            </div>
            <div className="col-3 text-start col-sm-4 col-md-3">  
                <div className="col-3 text-start col-sm-12 border px-3 py-2"> 
                    <h7><b>Assign to</b></h7>      
                    <div className="col-3 text-start col-sm-8 col-md-6 pb-4">
                        <input type="text" value="Everyone" className="form-control" id="assignTo"/>
                    </div> 
                    <h7><b>Due</b></h7>   
                    <div className="col-3 text-start col-sm-8 col-md-6 pb-4">
                        <input type="date" className="form-control" id="dueDate"/>
                    </div>    
                    <div className="row">
                        <div className="col">
                            <h7><b>Available from</b></h7>   
                            <div className="col-12 text-start col-sm-12">
                                <input type="date" className="form-control" id="dueDate"/>
                            </div> 
                        </div>
                        <div className="col">
                            <h7><b>Available from</b></h7>   
                            <div className="col-12 text-start col-sm-12">
                                <input type="date" className="form-control" id="dueDate"/>
                            </div> 
                        </div>   
                    </div>
                </div>
                <div className="col-3 text-start col-sm-12 border px-3 py-2 btn btn-secondary">
                    <a href="#" className="btn btn-secondary col-12"><i className="fa fa-plus pt-1" aria-hidden="true"></i> Add</a>
                </div>  
            </div>
        </div>
        <div class="form-check float-left">
            <input class="form-check-input"
                    type="checkbox" id="content"/>
                <label class="form-check-label" for="content">
                Notify users that this content has been changed</label>
        </div>  
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
        Cancel
      </Link>
      <button
        onClick={() => {
            const assignmentExists = courseAssignments.some(
                (assignment) => assignment._id === assignmentId
              );
              if (assignmentExists) {
                dispatch(updateAssignment(assignment));
              } else {
                {handleAddAssignment()};
              }
            //dispatch(updateAssignment(assignment));
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
        }}
        className="btn btn-success me-2 float-end"
        >
        Save
        </button>
    </div>
  );
}


export default AssignmentEditor;

