import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";

import "../App.css";

import BookablesPage from "./Bookables/BookablesPage";
import BookingsPage from "./Bookings/BookingsPage";
import UsersPage from "./Users/UsersPage";
import UserPicker from "./Users/UserPicker";
import BookablesList from "./Bookables/BookablesList";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/bookings" className="btn btn-header">
                  <FaCalendarAlt />
                  <span>Reservas</span>
                </Link>
              </li>
              <li>
                <Link to="/bookables" className="btn btn-header">
                  <FaDoorOpen />
                  <span>Reserve</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className="btn btn-header">
                  <FaUsers />
                  <span>Usuarios</span>
                </Link>
              </li>
            </ul>
          </nav>
          <UserPicker />
        </header>

        <Switch>
          <Route path="/bookings">
            <BookingsPage />
          </Route>
          <Route path="/bookables">
            <BookablesPage />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
          <Route path="/bookables-list">
            <BookablesList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
