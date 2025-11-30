import { Navigate, useNavigate } from "react-router";
import styles from "./Redirect.module.css";

export default function Redirect() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <h2 className={styles["pointer"]} onClick={clickHandler}>
      Navigate to Home
    </h2>
  );
}

// used when we complete some request (fetch for example) and want to redirect
// return <Navigate to={"/about"} />;
