import { useState } from "react"
import { Link } from "react-router-dom"

interface Todo {
  id: number
  title: string
  completed: boolean
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState<string>("")
  const [search, setSearch] = useState<string>("")
  const [searchQuery, setSearchQuery] = useState<string>("") // Applied search term

  //function to add a todo
  const addTodo = () => {
    if (input.trim() == "") {
      return
    }
    const newTodo: Todo = {
      id: Date.now(),
      title: input,
      completed: false,
    }
    setTodos((prevTodos) => [...prevTodos, newTodo])
    setInput("")
  }

  const toggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id))
  }

  const filteredTodos = todos.filter((todo) => todo.title.includes(searchQuery))

  return (
    <div>
      <div className="flex flex-col">
        <div className="mb-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a new task..."
          />
          <button
            onClick={addTodo}
            className="text-white bg-purple-500 rounded-md p-2"
          >
            Add Task
          </button>
        </div>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a task"
          ></input>
          <button
            onClick={() => setSearchQuery(search)}
            className="text-white bg-purple-300 rounded-md p-2"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-col py-2">
        {filteredTodos.map((todo, index) => (
          <div key={todo.id} className="m-2">
            <span>{index + 1}.</span>
            <button
              className={`${todo.completed ? "line-through" : ""} mr-2`}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.title}
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-2 bg-gray-300 rounded-md"
            >
              delete
            </button>
            {/* Link to individual todo page */}
            <Link to={`/todos/${todo.id}`} className="text-blue-500 ml-2">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
