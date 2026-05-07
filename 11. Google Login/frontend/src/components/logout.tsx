import { useAuth0 } from "@auth0/auth0-react"

function Logout() {

  const {logout} = useAuth0()

  return (
    <button onClick={() => logout()} className="border rounded p-4 ml-4 cursor-pointer">Logout</button>
  )
}

export default Logout