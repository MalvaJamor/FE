import { Link } from "react-router-dom";
import mainIllustration from '../assets/NewDesignImages/newillustration.svg';
export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-2 gap-[4rem] mt-[7rem]">
        <div className="w-full mt-[-3rem] py-24">
          <h1 className="text-6xl font-extrabold">
            Take Control of <br />
            Your <span className="text-[#546FFFee]">Tasks</span> with <br />{" "}
            Malva
          </h1>
          
          <p className="text-[#727272] text-base mt-10">
            Welcome aboard! Say goodbye to chaos and hello to organized success.
            Malva is your partner in conquering tasks, managing time, and
            reaching milestones. Let&#39;s set the stage for your best work
            ever.
          </p>
          <div className="flex items-center gap-7 mt-5">
            <Link to={"/sign"}>
              <button className=" text-white bg-custom-purplish-blue py-2 px-10 mt-2 rounded-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <img src={mainIllustration} alt="home page illustration" />
        </div>
      </div>
    </header>
  );
}
