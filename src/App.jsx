
import Landing from "./Pages/Landing.jsx"
import Home from "./Pages/Home.jsx"
import Register from "./Pages/Register.jsx"

import Playground from "./Pages/Playground.jsx"
import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./utils/ProtectedRoute.jsx"


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/playground" element={<Playground />} />

      </Routes>
    </>

  )
}
