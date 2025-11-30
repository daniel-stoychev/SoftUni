import { Navigate, Outlet } from "react-router";

export default function RouteGuard({user}){
    if (!user || user.role !== 'admin') {
        return <Navigate to={'/login'} />
    }
    return <Outlet />
}