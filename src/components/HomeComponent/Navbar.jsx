import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import Logo from "./Logo";
export default function Navbar() {
  const listArray = ["Features", "Resources", "Plans"];
  return (
    <>
      <nav>
        <div className="flex justify-between">
          <div className="flex gap-14 items-center">
            <Logo />
            <p className="font-bold text-base items-center">Home</p>
            <div className="flex gap-16 items-center">
              <ListItem list={[listArray[0]]} />
              <ListItem list={[listArray[1]]} />
              <ListItem list={[listArray[2]]} />
              <ListItem list={[listArray[3]]} to={"/plans"} />
            </div>
          </div>
          <div className="flex items-center gap-10">
            <Link to={"/account"}>
              <button className="bg-[#F5F6F7] px-4 py-2 text-custom-purplish-blue rounded-md border border-custom-purplish-blue w-[190px]">
                Login
              </button>
            </Link>
            <Link to={"/sign"}>
              <button className="bg-custom-purplish-blue px-4 py-2 w-[190px] text-white rounded-md">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
