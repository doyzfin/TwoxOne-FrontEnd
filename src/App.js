import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";

import BasicReact from "./pages/learning/BasicReact/BasicReact";
import BasicHome from "./pages/learning/HomePage/Home";
import BasicMovieDetails from "./pages/learning/Movie Details/MovieDetails";
import Home from "./pages/main/Home/Home";
import Movies from "./pages/main/Movies/MoviesPage";
import Order from "./pages/main/Order/OrderPage";
import Payment from "./pages/main/Payments/Payments";
import Admin from "./pages/main/Admin/Admin";
import View from "./pages/main/Movies/ViewAll";
import BasicRedux from "./pages/learning/BasicRedux/BasicRedux";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Schedule from "./pages/main/Admin/ManageSchedule";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* <Route path="/login" exact component={Login} /> */}
            <PublicRoute
              path="/learning/basic-react"
              exact
              component={BasicReact}
            />
            <Route path="/learning/basic-redux" exact component={BasicRedux} />
            <PrivateRoute
              path="/learning/basic-home"
              exact
              component={BasicHome}
            />
            <Route
              path="/learning/basic-movie-details/:id"
              exact
              component={BasicMovieDetails}
            />
            <PublicRoute
              restricted={true}
              path="/"
              exact
              component={Register}
            />
            <PublicRoute
              restricted={true}
              path="/login"
              exact
              component={Login}
            />
            <PrivateRoute path="/home" exact component={Home} />
            <Route path="/movie-page/:id" exact component={Movies} />
            <Route path="/order-page" exact component={Order} />
            <Route path="/payment-page" exact component={Payment} />
            <Route path="/admin-page" exact component={Admin} />
            <Route path="/manage-schedule" exact component={Schedule} />
            <Route path="/view" exact component={View} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
