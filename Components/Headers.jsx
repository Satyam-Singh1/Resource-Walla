// import React from "react";
// import "./Header.css";
// const Headers = () => {
//   return (
//     <div className="header">
//       <div className="header-content">
//         <h1>Resource Wallah</h1>
//         <p>
//           Welcome to Resource Walla! Your one-stop platform for curated
//           resources in tech and development. Whether you're exploring web
//           frameworks, diving into mobile app development, or building the next
//           big thing, we've got you covered with:
//         </p>
//       </div>
//       <button>Show Resources</button>
//     </div>
//   );
// };

// export default Headers;
import React, { useState } from "react";
import { Link } from "react-router-dom"; // For dynamic routing
import "./App.css";
import ContactUs from "../Screens/ContactUs";

const Header = () => {
  return (
    <>
      <header class="p-4 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                class="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" class="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  Support
                </a>
              </li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                class="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" class="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* <header className="p-3 bg-dark text-white Header">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link px-2 text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link px-2 text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="nav-link px-2 text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/support" className="nav-link px-2 text-white">
                  Support
                </Link>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              onSubmit={handleSearch}
            >
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            <div className="text-end">
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={handleSignup}
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;
