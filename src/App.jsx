
import Landing from "./Pages/Landing.jsx";
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";
import EditPost from "./Pages/EditPost.jsx";
import Playground from "./Pages/Playground.jsx";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import Profile from "./Pages/Profile.jsx";
import Topic from "./Pages/Topic.jsx";
import NewTopic from "./Pages/NewTopic.jsx";
import AllTopic from "./Pages/AllTopic.jsx";
import Nav from "./components/utils/Nav.jsx";
import FichaDePersonaje from "./Pages/fichaDePersonaje.jsx";
import CrearPersonaje from "./Pages/CrearPersonaje.jsx";
import IsAllowed from "./utils/isAllowed.jsx";
import { user, admin } from "./utils/allowedRoles.js";
import HomeBoard from "./Pages/HomeBoard.jsx";
import UserFeed from "./Pages/UserFeed.jsx";



export default function App() {
  return (
    <>
      <Routes>
        <Route path="/profile/:id" element={<ProtectedRoute><Nav /><Profile /></ProtectedRoute>} />
        <Route path="/topic/:id" element={<ProtectedRoute><Nav /><Topic /></ProtectedRoute>} />
        <Route path="/editpost/:id" element={<ProtectedRoute><Nav /><EditPost /></ProtectedRoute>} />
        <Route path="/ficha-de-personaje/:id" element={<ProtectedRoute><Nav /><FichaDePersonaje /></ProtectedRoute>} />
        <Route path="/newtopic" element={<ProtectedRoute><Nav /><NewTopic /></ProtectedRoute>} />
        <Route path="/crear-personaje" element={<ProtectedRoute><Nav /><CrearPersonaje /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Nav /><Home /></ProtectedRoute>} />
        <Route path="/homeboard" element={<ProtectedRoute><Nav /><HomeBoard /></ProtectedRoute>} />
        <Route path="/feed" element={<ProtectedRoute><Nav /><UserFeed /></ProtectedRoute>} />
        <Route path="/login" element={<Landing />} />
        <Route path="/all-topics" element={<><Nav /><AllTopic /></>} />
        <Route path="/register" element={<Register />} />
        <Route path="/playground" element={<><Nav /><IsAllowed roles={[user]} ><Playground /></IsAllowed></>} />
        <Route index element={<Landing />} />

      </Routes>
    </>

  );
}

