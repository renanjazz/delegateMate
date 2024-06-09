import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import PersonalDetailsPage from "./pages/PersonalDetailsPage";
import RequestPage from "./pages/RequestPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/companies" component={CompanyPage} />
        <Route path="/requests" component={RequestPage} />
        <Route path="/personal-details" component={PersonalDetailsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
