
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-indigo-600 p-4 text-white">
    <nav className="container  mx-auto flex justify-end p-4 ">
      <Link to="/" className="mr-4">
        Home
      </Link>
      <div>
        <Link to="/about-us" className="mr-4">
          About Us
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
