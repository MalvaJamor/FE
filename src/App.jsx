import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Password from "./pages/Password";
import ConfirmPassword from "./pages/confirmPassword";
import CheckEmail from "./pages/checkEmail";
import Plans from './pages/Plans';
import Account from "./pages/Account";
import Sign from './pages/Sign'
import Home from "./pages/Home";
import Error from './pages/Error'

function App() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/plans" element={<Plans />}/>
            <Route path="/sign" element={<Sign />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/password" element={<Password />} />
            <Route path="/confirmpassword" element={<ConfirmPassword />} />
            <Route path="/checkemail" element={<CheckEmail />} />
            <Route path="/account" element={<Account />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </>
    );
}

export default App;
