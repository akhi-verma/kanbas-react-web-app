import JavaScript from "./JavaScript";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todos/TodoList";

function Assignment3() {
    return (
      <div className="container">
        <h1>Assignment 3</h1>
          <TodoList />
          <ConditionalOutput />
          <Styles/>
          <Classes/>
          <JavaScript/>
      </div>
    );
  }
  export default Assignment3;
