import React, { useState } from "react";

function WorkingWithArraysOld() {
    // const API = "http://localhost:4000/a5/todos";
    const API = "https://kanbas-node-server-app-l3yv.onrender.com/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
      });    
    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <input
            className="form-control"
            value={todo.id}
            onChange={(e) => setTodo({ ...todo,
            id: e.target.value })}/>
        <a href={`${API}/${todo.id}`}
            className="btn btn-primary me-2">
            Get Todo by ID
        </a>
        <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`}
            className="btn btn-primary me-2" >
            Get Completed Todos
        </a>
        <h4>Creating new Items in an Array</h4>
        <a href={`${API}/create`}
            className="btn btn-primary me-2">
            Create Todo
        </a>
        <input
            value={todo.id}
            onChange={(e) => setTodo({
            ...todo, id: e.target.value })}
            className="form-control mb-2"
            type="number"
        />
        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`}
          className="btn btn-primary me-2">
          Delete Todo with ID = {todo.id}
        </a>
        <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2" >
        Update Title to {todo.title}
      </a>
      <input
            value={todo.id}
            onChange={(e) => setTodo({
            ...todo, id: e.target.value })}
            className="form-control mb-2"
            type="number"
        />
        <input
        value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
        <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary me-2" >
        Update Description to {todo.description}
      </a>
      <br />
      <input
            onChange={(e) => setTodo({
            ...todo, id: e.target.value })}
            className="form-check-input mx-3"
            type="checkbox"
            value={!todo.completed}
            id="flexCheckDefault"
        />
        <label className="form-check-label mx-3" for="flexCheckDefault">
        Completed
    </label>
      <a
        href={`${API}/${todo.id}/completed/${Boolean(!todo.completed)}`}
        className="btn btn-primary me-2 float-end">
        Update Completed
      </a>
      </div>
    );
  }
  export default WorkingWithArraysOld;
  
  