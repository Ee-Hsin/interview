import TodoList from "./components/todolist"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="flex h-screen justify-center items-center">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
