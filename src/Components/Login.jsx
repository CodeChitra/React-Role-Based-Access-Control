import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ROLES } from "./constants";
const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    const roleId = ROLES[e.target.name.toUpperCase()];
    setUser({
      name: "Akash",
      roles: [2000, roleId],
    });
    navigate(from, { replace: true });
  };
  console.log(location);
  return (
    <>
      <button onClick={handleLogin} name="user">
        Login As User
      </button>
      <button onClick={handleLogin} name="admin">
        Login As Admin
      </button>
      <button onClick={handleLogin} name="editor">
        Login As Editor
      </button>
    </>
  );
};

export default Login;
