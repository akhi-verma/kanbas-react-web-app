import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css"

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
        <div className="row -sm-11">
            <div className="row-auto">    
                <div className="float-end">
                    <a href="#" className="btn btn-secondary btn-m wd-btns"><i className="fa-solid fa-gear pt-1" aria-hidden="true"></i></a>
                </div>
                <div className="float-end">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle mx-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-flip-horizontal fa-file-import" aria-hidden="true"></i> Export
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                        </div>
                </div>   
                <div className="float-end">
                    <a href="#" className="btn btn-secondary btn-m mx-2"><i className="fa fa-file-import" aria-hidden="true"></i>  Import</a>
                </div>
            </div>
        </div>
        <div className="row">
            <br />
        </div>
      <h1>Grades</h1>
      <div className="row">
        <div className="col">
            <div className="row">
                <h7><b>Student Names</b></h7>
            </div>
            <div className="row py-2">
                <div className="float-start">
                    <input type="text"
                            className="form-control"
                            id="assignmentSearch"
                            placeholder="Search for Students"/>
                    </div>        
            </div>                              
        </div>
        <div className="col">
            <div className="row">
                <h7><b>Assignment Names</b></h7>
            </div>
            <div className="row py-2">
                <div className="float-start">
                    <input type="text"
                            className="form-control"
                            id="assignmentSearch"
                            placeholder="Search for Assignments"/>
                    </div>        
            </div>                              
        </div>
    </div>
    <div class="row">
        <div class="float-start">
            <a href="#" class="btn btn-secondary btn-m"><i class="fa-solid fa-filter" aria-hidden="true"></i>  Apply Filters</a>
        </div>
    </div>
    <br></br>
    <div className="table-responsive">
        <table className="table table-bordered table-light">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
        </div>
    </div>);
}
export default Grades;


