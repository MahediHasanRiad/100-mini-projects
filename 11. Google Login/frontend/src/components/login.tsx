import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./logout";

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
    {isAuthenticated && <p>Hi Riad !!!</p>}
    
    <button type="button" onClick={() => loginWithRedirect()} className="border rounded p-4 cursor-pointer">
      {isAuthenticated ? <Logout /> : <Login />}
    </button>
    </>
  );
}

export default Login;
