import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({ authState, Component }: any) => {
    return authState ? <Component /> : <Navigate to='/' />
}

export default ProtectedRouter