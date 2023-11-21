import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithArrays() {
    //const API = "http://localhost:4000/a5/todos";
    const API = "https://kanbas-node-server-app-l3yv.onrender.com/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
      });    
    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
    };
    const removeTodo = async (todo) => {
      const response = await axios
        .get(`${API}/${todo.id}/delete`);
      setTodos(response.data);
    };  
    const createTodo = async () => {
      const response = await axios.get(`${API}/create`);
      setTodos(response.data);
    };  
    const fetchTodoById = async (id) => {
      const response = await axios.get(`${API}/${id}`);
      setTodo(response.data);
    };  
    const updateTitle = async () => {
      const response = await axios.get(
        `${API}/${todo.id}/title/${todo.title}`);
      setTodos(response.data);
    };
    const postTodo = async () => {
      const response = await axios.post(API, todo);
      setTodos([...todos, response.data]);
    };  
    const deleteTodo = async (todo) => {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    };  
    const updateTodo = async () => {
      const response = await axios.put(
        `${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (
        t.id === todo.id ? todo : t)));
      setTodo({});
    };
  
    useEffect(() => {
      fetchTodos();
    }, []);
    return (
      <div>
        <h3>Working with Arrays</h3>
        <input
            className="form-control"
            value={todo.id}
            onChange={(e) => setTodo({ ...todo,
            id: e.target.value })}/>
          <input
          className="form-control"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo,
          title: e.target.value })}/>
        <ul className="list-group">
        <button onClick={createTodo}
              className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle}
              className="btn btn-success mb-2 w-100">
        Update Title
      </button>

      <textarea
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })}
        value={todo.description} type="text"
      />
      <label>
        <input
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label>
      <button onClick={postTodo} >
        Post Todo
      </button>

        {todos.map((todo) => (
          <li key={todo.id}
              className="list-group-item">
                <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end" >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2">
              Delete
          </button>
              <button
              onClick={() => removeTodo(todo)}
              className="btn btn-danger float-end" >
              Remove
            </button>
            <button onClick={updateTodo}>
              Update Todo
            </button>
            <input
              checked={todo.completed}
              type="checkbox" readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            {todo.title}
         </li>
        ))}
      </ul>
     
      </div>
    );
  }
  export default WorkingWithArrays;
  
  