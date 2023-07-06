import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
// import { Home, Router } from "@mui/icons-material";
import CreateDomain from "./components/DomainRegistration";
import RegisterUser from "./components/RegisterUser";
import Home from "./components/Home";
import SearchURL from "./components/SearchURL";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/createdomain" element={<CreateDomain />} />
        <Route path="/registeruser" element={<RegisterUser />} />
        <Route path="/searchurl" element={<SearchURL />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
