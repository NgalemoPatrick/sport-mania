import { Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import Register from "./features/Register";
import DashLayout from "./components/DashLayout";
import Profile from "./features/Profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
