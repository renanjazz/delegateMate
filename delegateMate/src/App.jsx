import { useState, useEffect } from "react";
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
        <Route path="/companies" component={CompanyList} />
        <Route path="/requests" component={RequestList} />
        <Route path="/personal-details" component={PersonalDetails} />
      </Switch>
    </Router>
  );
}
export default App;

// jonny wuz here
// renan wuz also here
//guilherme wuz here as well
