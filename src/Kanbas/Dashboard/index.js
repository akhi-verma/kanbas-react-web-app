import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
  ) {
  /*
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    setCourses([...courses,
              { ...course,
                _id: new Date().getTime() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

*/
  return (
    <div className="col">
      <h1>Dashboard</h1>

      <div className="row row-auto mx-3">
        <div className="col-auto col-sm-3">
          <input value={course.name} className="form-control my-3"
            onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          <input value={course.number} className="form-control my-3"
            onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
          <input value={course.startDate} className="form-control my-3" type="date" 
            onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
          <input value={course.endDate} className="form-control my-3" type="date" 
            onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>

          <button className="btn btn-primary col-auto" onClick={addNewCourse} >
            Add
          </button>
          <button className="btn btn-success col-auto mx-3" onClick={updateCourse} >
            Update
          </button>
        </div>
      </div>

      <div className="row mx-3 my-3">
        {courses.map((course) => (
          <div class="wd-dashboard-courses-size col-lg-2 col-md-6 col-sm-8 col-xs-12 ">
            <div class="card">
                <a href="#"></a>
                <div class="card-body">
                    <h5 class="card-title">
                      <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        {course.name}
                          <button className="btn btn-danger col-auto mx-1 btn-sm float-end"
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}>
                          Delete
                        </button>
                        <button className="btn btn-warning col-auto btn-sm float-end"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}>
                          Edit
                          </button>
                      </Link>
                      </h5>
                    <p class="card-text">{course.endDate}</p>                                
                </div>
            </div>
         </div>
           
        ))}
      </div>
    </div>
  );
}
export default Dashboard;

