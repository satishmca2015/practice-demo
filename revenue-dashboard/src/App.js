import React, { useEffect, useState } from "react";

import Dashboard from "./component/Dashboard";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Login from "./component/Login";
import Footer from "./component/Footer";
import RevenueDateWise from "./component/RevenueDateWise";
import TodaysRevenue from "./component/TodaysRevenue";
import OpeatorWiseRev from "./component/OpeatorWiseRev";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { login, logout, getCurrentUser } from "./services/auth.service";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  let [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem("user")
  );
  // isAuthenticated = true;

  // let isAuthenticated = localStorage.getItem('isLogin');

  useEffect(() => {
    setAuthenticated(isAuthenticated);
  }, isAuthenticated);

  return (
    <Router>
      <div className="App">
        {isAuthenticated && (
          <>
            <Header />
            <Sidebar />
          </>
        )}

        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          {/* <Route path="/login" component={Login} /> */}

          <ProtectedRoute
            isAuthenticated={!isAuthenticated}
            path="/login"
            component={Login}
          />

          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path="/dashboard"
            component={Dashboard}
          />

          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path="/datewise-revenue"
            component={RevenueDateWise}
          />

          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path="/todays-revenue"
            component={TodaysRevenue}
          />

          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path="/operatorwise-revenue"
            component={OpeatorWiseRev}
          />

          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path="/"
            component={Dashboard}
          />
        </Switch>

        {isAuthenticated && (
          <>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
