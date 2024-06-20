import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Password from "./pages/Password";
import ConfirmPassword from "./pages/confirmPassword";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Plans from "./pages/Plans";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Error from "./pages/Error";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/account" element={<Account />} />
          <Route path="/password" element={<Password />} />
          <Route path="/confirmpassword" element={<ConfirmPassword />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
