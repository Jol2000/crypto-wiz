import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/header";
import Home from "./pages/home";
import Twitter from "./pages/twitter";
import Footer from "./components/footer";
import "./App.css";
import ServerError from "./pages/servererror";
import PageNotFound from "./pages/404";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/twitter" component={Twitter}></Route>
        <Route path="/503error" component={ServerError}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
