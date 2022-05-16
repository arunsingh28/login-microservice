import { Navigate, Outlet } from 'react-router-dom'

interface IAuth {
    state: boolean
}

export const useAuth = ({ state }: IAuth) => {
    const user = { loggedIn: state || false }
    return user && user.loggedIn
}

const ProtectedRouter = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRouter