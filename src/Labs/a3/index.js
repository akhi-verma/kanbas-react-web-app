import JavaScript from "./JavaScript";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";

/*
<TodoList />
          <ConditionalOutput />
          <Styles/>
          <Classes/>
          <JavaScript/>
*/

function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);
    return (
      <div className="container">
        <h1>Assignment 3</h1>
        <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

      </div>
    );
  }
  export default Assignment3;
