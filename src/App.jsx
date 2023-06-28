
import Landing from "./Pages/Landing.jsx"
import Home from "./Pages/Home.jsx"
import Register from "./Pages/Register.jsx"

import Playground from "./Pages/Playground.jsx"
import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./utils/ProtectedRoute.jsx"
import Profile from "./Pages/Profile.jsx"


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/profile/:id" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/" element={<Landing />} />

      </Routes>
    </>

  )
}
