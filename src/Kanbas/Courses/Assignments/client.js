import axios from "axios";
//const COURSES_URL = "http://localhost:4000/api/courses";
//const ASSIGNMENTS_URL = "http://localhost:4000/api/assignments";

const COURSES_URL = "https://kanbas-node-server-app-a6-mtju.onrender.com/api/courses";
const ASSIGNMENTS_URL = "https://kanbas-node-server-app-a6-mtju.onrender.com/api/assignments";

export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/assignments`,
      assignment
    );
    return response.data;
  };  

export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};