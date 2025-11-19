export default function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <a href="index.html" className="logo">
                <img src="assets/images/logo.png" alt="" />
              </a>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li>
                  <a href="index.html" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="explore.html">Explore</a>
                </li>
                <li>
                  <a href="details.html">Item Details</a>
                </li>
                <li>
                  <a href="author.html">Author</a>
                </li>
                <li>
                  <a href="create.html">Create Yours</a>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
