import React, { useState } from "react";
function WorkingWithObjectsOld() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
      });
      // const URL = "http://localhost:4000/a5/assignment";
      const URL = "https://kanbas-node-server-app-l3yv.onrender.com/a5/assignment";
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      {/* <a href="http://localhost:4000/a5/assignment" */}
      <a href="https://kanbas-node-server-app-l3yv.onrender.com/a5/assignment"
         className="btn btn-primary me-2">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        // href="http://localhost:4000/a5/assignment/title"
        href="https://kanbas-node-server-app-l3yv.onrender.com/a5/assignment/title"
        className="btn btn-primary me-2">
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a
        // href={`${URL}/title/${assignment.title}`}
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end">
        Update Title
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text" />
      <a
        href={`${URL}/score/${assignment.score}`}
        className="btn btn-primary me-2 float-end">
        Update Score
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment,
            score: e.target.value })}
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="number" />
      <input onChange={(e) => setAssignment({ ...assignment,
            completed: e.target.value })} className="form-check-input mx-3" type="checkbox" value={!assignment.completed} id="flexCheckDefault"></input>
      <label className="form-check-label mx-3" for="flexCheckDefault">
        Completed
    </label>
    <a
        href={`${URL}/completed/${assignment.completed}`}
        className="btn btn-primary me-2 float-end">
        Update Completed
      </a>
    </div>
  );
}
export default WorkingWithObjectsOld;

