import { NavLink } from "react-router-dom";

import React from "react";

const Public = () => {
  return (
    <section className="public">
      <header>
        {/* <h1>Welcome to <span className="nowrap">SPORTS MANIA</span></h1> */}
      </header>
      <main className="public_main">
        {/* <p>
                Sports Mania is a platform where you can connect and share with others pationate of sports.
            </p> */}
      </main>
      <footer>
        <NavLink
          to="/login"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#fff",
                  background: "#0A3442",
                }
              : { color: "#545e6f", background: "#f0f0f0" }
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/Register"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#fff",
                  background: "#0A3442",
                }
              : { color: "#545e6f", background: "#f0f0f0" }
          }
        >
          Don'thave an account? Sign up
        </NavLink>
      </footer>
    </section>
  );
};

export default Public;
