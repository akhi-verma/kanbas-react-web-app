import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import "./index.css"
import { Link } from "react-router-dom";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";

//function Courses({ courses }) {
function Courses({ courses }) {
  const { courseId } = useParams();
  //const URL = "http://localhost:4000/api/courses";
  const URL = "kanbas-node-server-app-a6-mtju.onrender.com/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  //const course = db.courses.find((course) => course._id === courseId);
  //const course = courses.find((course) => course._id === courseId);
  const breadcrumbStyle = {
    '--bs-breadcrumb-divider':'>',ariaLabel:'breadcrumb'
  };

  const pathname = window.location.pathname
  return (
    <div>
      <nav class="navbar col-auto">
      <button class="mx-3 mb-2 navbar-toggler wd-navbar-nav" type="button" aria-controls="kanbas-navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="dark-blue-text">
        <i class="fas fa-bars fa-1x"></i></span></button>
        <div id="breadcrumb" class="col wd-breadcrumb mb-2">
        <nav>
            <ol class="breadcrumb">
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                  {course.name}
                </Link>
                <li class="breadcrumb-item"></li>
                <li class="breadcrumb-item active" aria-current="page">Modules</li>
            </ol>
        </nav>
        </div>
      </nav>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId"
                   element={<AssignmentEditor/>}/>
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;

