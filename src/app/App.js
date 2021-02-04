import React, { Component } from "react";
import "./App.css";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Account from "../account/account";
import BroadcastOrders from "../broadcastOrders/broadcastOrders";
import Budgets from "../budgets/budgets";
import Contracts from "../contracts/contracts";
import Dashboard from "../dashboard/dashboard";
import Login from "../login/login";
import NotFound from "../notFound/notFound";
import RatePlans from "../ratePlans/ratePlans";
import RecoverPassword from "../recoverPassword/recoverPassword";
import Reports from "../reports/reports";
import SystemSettings from "../systemSettings/systemSettings";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import OrderConfig from "../broadcastOrders/orderConfig";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className={
            this.props.location.pathname === "/login" ||
            this.props.location.pathname === "/recoverPassword"
              ? "wrapper"
              : "wrapper bg-light"
          }
        >
          {this.props.location.pathname === "/login" ||
          this.props.location.pathname === "/recoverPassword" ? (
            ""
          ) : (
            <NavBar />
          )}
          <main className="container content-dynamic">
            <Switch>
              <Route path="/not-found" component={NotFound} />
              <Route path="/login" component={Login} />
              <Route path="/recoverPassword" component={RecoverPassword} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/budgets" component={Budgets} />
              <Route path="/contracts" component={Contracts} />
              <Route path="/broadcastOrders/:id" component={OrderConfig} />
              <Route path="/broadcastOrders" component={BroadcastOrders} />
              <Route path="/ratePlans" component={RatePlans} />
              <Route path="/systemSettings" component={SystemSettings} />
              <Route path="/reports" component={Reports} />
              <Route path="/account" component={Account} />
              <Redirect from="/" exact to="/dashboard" />
              <Redirect to="/not-found" />
            </Switch>
            <div
              className={
                this.props.location.pathname === "/login" ||
                this.props.location.pathname === "/recoverPassword"
                  ? "align-center"
                  : "align-left"
              }
            >
              <Footer />
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
