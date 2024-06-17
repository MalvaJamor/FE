import {BrowserRouter as Router,  Routes, Route } from 'react-router-dom';

import AboutUs from "./pages/AboutUs";
import Password from "./pages/Password";
import ConfirmPassword from "./pages/confirmPassword";
import Footer from "./components/Footer";
import Header from "./components/Header";



function App() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/password" element={<Password />} />
            <Route path="/confirmpassword" element={<ConfirmPassword />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
}

export default App;
