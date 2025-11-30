import { Link, NavLink, Route, Routes } from "react-router";
import "./App.css";
import About from "./Components/About.jsx";
import NotFound from "./Components/NotFound.jsx";
import City from "./Components/City.jsx";
import Redirect from "./Components/Redirect.jsx";
import styles from "./App.module.css";
import Dashboard from "./Components/Dashboard.jsx";
import Users from "./Components/Users.jsx";
import Posts from "./Components/Posts.jsx";
import Admin from "./Components/Admin.jsx";
import { useState } from "react";
import RouteGuard from "./Components/RouteGuard.jsx";
import Profile from "./Components/Profile.jsx";
import Login from "./Components/Login.jsx";

function App() {
  const [user, setuser] = useState({
    username: 'Pesho',
    role: 'admin'
  })
  return (
    <div>
      <h1>React router</h1>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/city/:Pernik">Pernik parameter</Link>
        <Link to="/redirect">Redirect</Link>
      </nav> */}

      <nav> 
        <NavLink className={({isActive}) => isActive ? styles["selected-link"] : ''} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? styles["selected-link"] : ''} to="/about">About</NavLink>
        <NavLink className={({isActive}) => isActive ? styles["selected-link"] : ''} to="/city/Pernik">Pernik parameter</NavLink>
        <NavLink className={({isActive}) => isActive ? styles["selected-link"] : ''} to="/redirect">Redirect</NavLink>
        <NavLink className={({isActive}) => isActive ? styles["selected-link"] : ''} to="/profile">Profile</NavLink>
        <NavLink className={({isActive}) => isActive ? styles["selected-link"] : ''} to="/admin">Admin</NavLink>
      </nav>



      {/* <nav> 
        <NavLink style={({isActive}) => isActive ? {color : 'green'} : {}} to="/">Home</NavLink>
        <NavLink style={({isActive}) => isActive ? {color : 'green'} : {}} to="/about">About</NavLink>
        <NavLink style={({isActive}) => isActive ? {color : 'green'} : {}} to="/city/:Pernik">Pernik parameter</NavLink>
        <NavLink style={({isActive}) => isActive ? {color : 'green'} : {}} to="/redirect">Redirect</NavLink>
      </nav> */}

      <Routes>
        <Route path="/" element={<h1>This is Home page!</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/city/:city?" element={<City />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/admin" element={<Admin />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="*" element={<NotFound />} />

        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="posts" element={<Posts />} />
        </Route>

        <Route element={<RouteGuard user={user}/>}>
          <Route path="/profile" element={<Profile username={user.username}/>} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
