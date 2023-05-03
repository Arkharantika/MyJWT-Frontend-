import React from "react";
import axios from "axios";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const history = useNavigate();

  const Logout = async () => {
    try {
      const keluar = await axios.delete("http://localhost:5000/logout");
      if (keluar) return history("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <nav className="navbar is-light" role="navigation" aria-label="main navigation">
    //     <div className="container">
    //         <div className="navbar-brand">
    //             <a className="navbar-item" href="https://bulma.io">
    //                 <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
    //             </a>

    //             <a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
    //                 <span aria-hidden="true"></span>
    //                 <span aria-hidden="true"></span>
    //                 <span aria-hidden="true"></span>
    //             </a>
    //         </div>

    //         <div id="navbarBasicExample" className="navbar-menu">
    //             <div className="navbar-start">
    //                 <a href="/" className="navbar-item">
    //                     Home
    //                 </a>
    //             </div>

    //             <div className="navbar-end">
    //                 <div className="navbar-item">
    //                     <div className="buttons">
    //                         <button onClick={Logout} className="button is-light">
    //                             Log Out
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </nav>
    // <nav
    //   class="navbar is-primary"
    //   role="navigation"
    //   aria-label="main navigation"
    // >
    //   <div class="navbar-brand">
    //     <a class="navbar-item" href="#">
    //       <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
    //     </a>

    //     <a
    //       role="button"
    //       class="navbar-burger burger"
    //       aria-label="menu"
    //       aria-expanded="false"
    //       data-target="navbarBasicExample"
    //     >
    //       <span aria-hidden="true"></span>
    //       <span aria-hidden="true"></span>
    //       <span aria-hidden="true"></span>
    //     </a>
    //   </div>

    //   <div id="navbarBasicExample" class="navbar-menu">
    //     <div class="navbar-start">
    //       <a class="navbar-item" href="#">
    //         Home
    //       </a>

    //       <a class="navbar-item" href="#">
    //         Documentation
    //       </a>

    //       <div class="navbar-item has-dropdown is-hoverable">
    //         <a class="navbar-link" href="#">
    //           More
    //         </a>

    //         <div class="navbar-dropdown">
    //           <a class="navbar-item" href="#">
    //             About
    //           </a>
    //           <a class="navbar-item" href="#">
    //             Jobs
    //           </a>
    //           <a class="navbar-item" href="#">
    //             Contact
    //           </a>
    //           <hr class="navbar-divider" />
    //           <a class="navbar-item" href="#">
    //             Report an issue
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     <div class="navbar-end">
    //       <div class="navbar-item">
    //         <div class="buttons">
    //           <a class="button is-primary" href="#">
    //             <strong>Sign up</strong>
    //           </a>
    //           <a class="button is-light" href="#">
    //             Log in
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav
      class="navbar is-primary is-centered"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#">
            HOME
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button onClick={Logout} className="button is-light">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
