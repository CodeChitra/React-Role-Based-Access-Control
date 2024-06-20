import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Admin from "./Components/Admin";
import Editor from "./Components/Editor";
import Lounge from "./Components/Lounge";
import ProtectedRoute from "./Components/ProtectedRoute";
import Unauthorized from "./Components/Unauthorized";
import { ROLES } from "./Components/constants";

function App() {
  return (
    <main>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Private Routes */}
        <Route element={<ProtectedRoute allowedList={[ROLES.ADMIN]} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route element={<ProtectedRoute allowedList={[ROLES.EDITOR]} />}>
          <Route path="/editor" element={<Editor />} />
        </Route>
        <Route
          element={<ProtectedRoute allowedList={[ROLES.EDITOR, ROLES.ADMIN]} />}
        >
          <Route path="/lounge" element={<Lounge />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
