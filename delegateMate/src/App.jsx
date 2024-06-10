import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import CompanyPage from "./pages/CompanyPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import OpenRequestPage from "./pages/OpenRequestPage";
import RequestReceivedPage from "./pages/RequestReceivedPage";

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" component={CompanyPage} />
        <Route path="/requests" component={RequestReceivedPage} />
        <Route path="/open-request" component={OpenRequestPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
    </Routes>
  );
} 

export default App;

