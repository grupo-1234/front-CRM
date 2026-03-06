import { Navigate } from "react-router-dom"

interface Props {
  children: React.ReactNode
}

export default function PrivateRoute({ children }: Props) {

  const usuario = localStorage.getItem("usuarioCRM")

  if (!usuario) {
    return <Navigate to="/" />
  }

  return children
}