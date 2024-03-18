import axios from "axios";
import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
  description: string | undefined;
  due: string | undefined;
  completed: boolean;
};

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [todos, setTodos] = useState([] as Todo[]);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  // const removeTodo = async (todo) => {
  //   const response = await axios
  //     .get(`${API}/${todo.id}/delete`);
  //   setTodos(response.data);
  // };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id: number) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data as Todo]);
  };
  const deleteTodo = async (todo: Todo) => {
    await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  const updateTodo = async () => {
    await axios.put(`${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        type="number"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
      />
      <a href={`${API}/${todo.id}`} className="btn btn-primary">
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`} className="btn btn-primary">
        Get Completed Todos
      </a>
      <h3>Creating new Items in an Array</h3>
      <a href={`${API}/create`} className="btn btn-primary">
        Create Todo
      </a>
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`} className="btn btn-primary">
        Delete Todo with ID = {todo.id}
      </a>

      <h3>Updating an Item in an Array</h3>
      <input
        className="form-control"
        type="number"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.valueAsNumber,
          })
        }
      />
      <input
        className="form-control"
        type="text"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary"
      >
        Update Title to {todo.title}
      </a>
      <div className="form-check">
        <label className="form-check-label">
          Completed
          <input
            className="form-check-input"
            type="checkbox"
            onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
            checked={todo.completed}
          />
        </label>
      </div>
      <a
        href={`${API}/${todo.id}/completed/${true}`}
        className="btn btn-primary"
      >
        Complete Todo ID = {todo.id}
      </a>
      <input
        className="form-control"
        type="text"
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary"
      >
        Describe Todo ID = {todo.id}
      </a>

      <input className="form-control mt-4" type="number" value={todo.id} />
      <input
        className="form-control "
        type="text"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <textarea
        className="form-control"
        value={todo.description || ""}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <input
        className="form-control"
        value={todo.due || ""}
        type="date"
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
      />
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="form-check-input"
            checked={todo.completed}
            type="checkbox"
            onChange={(e) =>
              setTodo({
                ...todo,
                completed: e.target.checked,
              })
            }
          />
          Completed
        </label>
      </div>
      <button onClick={postTodo} className="btn btn-warning">
        Post Todo
      </button>
      <br />
      <button onClick={updateTodo} className="btn btn-success">
        Update Todo
      </button>
      <br />
      <button onClick={createTodo} className="btn btn-primary">
        Create Todo
      </button>
      <br />
      <button onClick={updateTitle} className="btn btn-success">
        Update Title
      </button>
      <ul className="list-group">
        {todos.map((todo: Todo) => (
          <li key={todo.id} className="list-group-item">
            <input checked={todo.completed} type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2"
            >
              Delete
            </button>
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning float-end ms-2"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default WorkingWithArrays;
