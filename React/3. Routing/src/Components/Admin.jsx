
import { NavLink, Outlet } from "react-router";
import styles from "../App.module.css";
export default function Admin(){
    return (
        <>
        <h2>Admin</h2>
        <nav>
            <NavLink className={({isActive}) => isActive ? styles["selected-link"] : ''} to=".">Dashboard</NavLink>
            <NavLink className={({isActive}) => isActive ? styles["selected-link"] : ''} to="users">Users</NavLink>
            <NavLink className={({isActive}) => isActive ? styles["selected-link"] : ''} to="posts">Posts</NavLink>
        </nav>
        <Outlet />
        </>
        );
}