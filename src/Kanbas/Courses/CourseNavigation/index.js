import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css"


function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus","Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div>
    <ul className="wd-kanbas-course-navigation list-group">
      {links.map((link, index) => (
        <li className = {`list-group-item ${pathname.includes(link) && "active"}`} key={index}>
        <Link
          to={`/Kanbas/Courses/${courseId}/${link}`}>
          {link}
        </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}


export default CourseNavigation;
