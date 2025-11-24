import { useState } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Pagination from "./components/Pagination.jsx";
import Search from "./components/Search.jsx";
import UserList from "./components/UserList.jsx";
import CreateUserModal from "./components/CreateUserModal.jsx";

function App() {
  const [showCreateUser, setShowCreateUser] = useState(false);
  function addUserClickHandler() {
    setShowCreateUser(true);
  }
  function closeUserModalHandler() {
    setShowCreateUser(false);
  }
  function addUserSubmitHandler(e) {
    e.preventDefault();

    const fortData = new FormData(e.target);

    const userData = Object.fromEntries(fortData);
  }
  return (
    <div>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList />
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
        ;
      </main>
      <Footer />
    </div>
  );
}

export default App;
