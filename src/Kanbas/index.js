import {Link} from "react-router-dom";
import Nav from "../nav";
import KanbasNavigationSidebar from "./KanbasNavigationSidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Kanbas() {
   const [courses, setCourses] = useState([]);
   //const URL = "http://localhost:4000/api/courses";
   const URL = "https://kanbas-node-server-app-a6-mtju.onrender.com/api/courses";
   const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
   };
   const addNewCourse = async () => {
      const response = await axios.post(URL, course);
      setCourses([
        response.data,
        ...courses,
      ]);
      setCourse({ name: "" });
    };  
   const deleteCourse = async (course_id) => {
      const response = await axios.delete(
        `${URL}/${course_id}`
      );
      setCourses(courses.filter(
        (c) => c._id !== course_id));
    };
    const updateCourse = async () => {
      const response = await axios.put(
        `${URL}/${course._id}`,
        course
      );
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          }
          return c;
        })
      );
      setCourse({ name: "" });
    };  
  
   useEffect(() => {
      findAllCourses();
   }, []);
   
   //const [courses, setCourses] = useState(db.courses);
   
   const [course, setCourse] = useState({
      name: "New Course",      number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
   });
   /*
   const addNewCourse = () => {
      setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
   };
   */
   /*const deleteCourse = (courseId) => {
      setCourses(courses.filter((course) => course._id !== courseId));
   };
   */
   /*const updateCourse = () => {
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

    return(
      <Provider store={store}>
      <div className="d-flex">
         <KanbasNavigationSidebar />
         <div className="col">
            <Routes>
               <Route path="/" element={<Navigate to="Dashboard" />} />
               <Route path="/account" element={<Account />} />
               <Route path="/account/:id" element={<Account />} />
               <Route path="/signin" element={<Signin />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/admin/users" element={<UserTable />} />
               <Route path="Dashboard" element={
                  <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}/>
               } />
               <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            </Routes>
         </div>
      </div>
      </Provider>
    );
 }
 export default Kanbas
 
 