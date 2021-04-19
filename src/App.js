import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicReact from "./pages/learning/BasicReact/BasicReact";
import BasicHome from "./pages/learning/HomePage/Home";
import BasicMovieDetails from "./pages/learning/Movie Details/MovieDetails";
import Home from "./pages/main/Home/Home";
import Movies from "./pages/main/Movies/MoviesPage";
import Order from "./pages/main/Order/OrderPage";
import Payment from "./pages/main/Payments/Payments";
import Admin from "./pages/main/Admin/Admin";
import View from "./pages/main/Movies/ViewAll";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/learning/basic-react" exact component={BasicReact} />
          <Route path="/learning/basic-home" exact component={BasicHome} />
          <Route
            path="/learning/basic-movie-details"
            exact
            component={BasicMovieDetails}
          />
          <Route path="/home" exact component={Home} />
          <Route path="/movie-page" exact component={Movies} />
          <Route path="/order-page" exact component={Order} />
          <Route path="/payment-page" exact component={Payment} />
          <Route path="/admin-page" exact component={Admin} />
          <Route path="/view" exact component={View} />
        </Switch>
      </Router>
    );
  }
}

export default App;
