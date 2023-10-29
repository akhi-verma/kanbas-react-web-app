import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="col">
      <h1>Dashboard</h1>
      <div className="row mx-3">
        {courses.map((course, index) => (
          <div class="wd-dashboard-courses-size col-lg-2 col-md-6 col-sm-8 col-xs-12 ">
            <div class="card">
                <a href="#"></a>
                <div class="card-body">
                    <h5 class="card-title">
                      <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        {course.name}
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

