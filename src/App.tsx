import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WatStreet from "./components/WatStreet"

function App() {
  return (
    <Router>
      <div className="flex h-screen justify-center items-center">
        <Routes>
          <Route path="/" element={<WatStreet />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
