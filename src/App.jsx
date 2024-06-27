import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Password from "./pages/Password";
import ConfirmPassword from "./pages/confirmPassword";
import CheckEmail from "./pages/checkEmail";


function App() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/password" element={<Password />} />
            <Route path="/confirmpassword" element={<ConfirmPassword />} />
            <Route path="/checkemail" element={<CheckEmail />} />
          </Routes>
        </Router>
      </>
    );
}

export default App;
