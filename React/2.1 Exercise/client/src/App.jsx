import { useEffect, useState } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Pagination from "./components/Pagination.jsx";
import Search from "./components/Search.jsx";
import UserList from "./components/UserList.jsx";
import CreateUserModal from "./components/CreateUserModal.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/users")
      .then((response) => response.json())
      .then((result) => {
        setUsers(Object.values(result));
      })
      .catch((err) => alert(err.message));
  }, [refresh]);

  const forceUserRefresh = () => {
    setRefresh((state) => !state);
  };

  function addUserClickHandler() {
    setShowCreateUser(true);
  }
  function closeUserModalHandler() {
    setShowCreateUser(false);
  }
  function addUserSubmitHandler(e) {
    e.preventDefault();

    const fortData = new FormData(e.target);

    const { country, city, street, streetNumber, ...userData } =
      Object.fromEntries(fortData);
    userData.address = {
      country,
      city,
      street,
      streetNumber,
    };
    userData.createdAt = new Date().toISOString();
    userData.updatedAt = new Date().toISOString();
    fetch("http://localhost:3030/jsonstore/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(() => {
        forceUserRefresh();
        closeUserModalHandler();
      })
      .catch((err) => alert(err.message));
  }
  return (
    <div>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList users={users} forceUserRefresh={forceUserRefresh} />
          <button className="btn-add btn" onClick={addUserClickHandler}>
            Add new user
          </button>
          <Pagination />
        </section>
        {showCreateUser && (
          <CreateUserModal
            onClose={closeUserModalHandler}
            onSubmit={addUserSubmitHandler}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
