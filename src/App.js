import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

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

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* <Route path="/login" exact component={Login} /> */}
            <Route path="/learning/basic-react" exact component={BasicReact} />
            <Route path="/learning/basic-redux" exact component={BasicRedux} />
            <Route path="/learning/basic-home" exact component={BasicHome} />
            <Route
              path="/learning/basic-movie-details/:id"
              exact
              component={BasicMovieDetails}
            />
            <Route path="/" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/movie-page/:id" exact component={Movies} />
            <Route path="/order-page" exact component={Order} />
            <Route path="/payment-page" exact component={Payment} />
            <Route path="/admin-page" exact component={Admin} />
            <Route path="/view" exact component={View} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
