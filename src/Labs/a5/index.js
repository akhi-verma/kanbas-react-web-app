import EncodingParametersInURLsOld from "./EncodingParametersInURLsOld";
import WorkingWithObjectsOld from "./WorkingWithObjectsOld";
import WorkingWithArraysOld from "./WorkingWithArraysOld";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          {/* <a href="http://localhost:4000/a5/welcome" */}
          <a href="https://kanbas-node-server-app-l3yv.onrender.com/a5/welcome"
             className="list-group-item">
            Welcome
            </a>
            <EncodingParametersInURLsOld />
            <WorkingWithObjectsOld />
            <WorkingWithArraysOld />
            <h1>Receiving Data from Servers as HTTP Responses</h1>
            <EncodingParametersInURLs />
            <WorkingWithObjects />
            <WorkingWithArrays />
        </div>
      </div>
    );
  }
  export default Assignment5;
  
/*<SimpleAPIExamples />*/