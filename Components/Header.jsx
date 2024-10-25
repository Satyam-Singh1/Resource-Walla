import "./App.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <header className="p-3 text-bg-dark">
        <div className="container d-flex justify-content-between align-items-center">
          <a href="/" className="text-decoration-none text-white">
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav">
            <li>
              <a href="#" className="nav-link text-white px-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white px-2">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white px-2">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white px-2">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white px-2">
                About
              </a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
            <button type="submit" className="btn btn-outline-light ms-2">
              Search
            </button>
          </form>

          <div>
            <button type="button" className="btn btn-outline-secondary me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
