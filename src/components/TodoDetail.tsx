import { useParams } from "react-router-dom"

interface TodoDetailProps {
  id: number
  title: string
  completed: boolean
}

const TodoDetail: React.FC<TodoDetailProps[]> = ({ todos }) => {
  const { id } = useParams<{ id: string }>()
  const todoId = parseInt(id ?? "0")
  const todo = todos.find((t) => t.id === todoId)

  if (!todo) {
    return <div>Todo not found</div>
  }

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-md">
      <h1 className="text-2xl font-bold mb-4">{todo.title}</h1>
      <p>Status: {todo.completed ? "Completed" : "Not completed"}</p>
    </div>
  )
}

export default TodoDetail
