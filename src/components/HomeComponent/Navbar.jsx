import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import Logo from "./Logo";
export default function Navbar() {
  const listArray = ["Features", "Resources", "Pricing", "Plans"];
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <p className="font-bold text-base">Why Malva?</p>
      <div className="flex gap-16">
        <ListItem list={[listArray[0]]} />
        <ListItem list={[listArray[1]]} />
        <ListItem list={[listArray[2]]} />
        <ListItem list={[listArray[3]]} to={"/plans"} />
      </div>
      <div className="flex gap-10 items-center">
        <Link to={"/account"}>
          <button className="bg-login-button-gray text-custom-purplish-blue px-4 py-2 rounded-lg border border-custom-purplish-blue">
            Login
          </button>
        </Link>
        <Link  to={'/sign'}>
          <button className="bg-custom-purplish-blue px-4 py-2 text-white rounded-md">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
}
