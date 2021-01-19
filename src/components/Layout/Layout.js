import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../router";
import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.Layout}> 
    <header className={styles.Header}>
      <ul className={styles.Header_menu}>
        <li>
          <NavLink
            to={routes.home}
            exact
            className={styles.Navigation_link}
            activeClassName={styles.Navigation_link_active}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to={routes.movies}
            className={styles.Navigation_link}
            activeClassName={styles.Navigation_link_active}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
    {children}
  </div>
);

export default Layout;
