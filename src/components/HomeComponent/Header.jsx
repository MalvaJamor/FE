import NormalHorizontal from "../AccountComponent/NormalHorizontal";
import homeIllustration from "../assets/homeIllustration.svg";
import people from "../assets/people.svg";
export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-2 gap-[12rem] mt-32">
        <div className="w-full py-24">
          <h1 className="text-7xl font-extralight">
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
          <div className="flex items-center gap-7 mt-20">
            <button className=" text-white bg-custom-purplish-blue py-2 px-4 mt-4 rounded-lg">
              Get Started
            </button>
            <div className="mt-2">
              <img src={people} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <img src={homeIllustration} alt="home page illustration" />
        </div>
      </div>
      <div className="relative mt-10">
        <NormalHorizontal normalClasses={" w-8 absolute right-0 h-40 ml-auto bg-[#3D53DB]"} />
        <div className="w-[110px]  text-center rounded-full text-[#141522] mx-auto bg-[#DCE4FF]">
          Pricing Plans
        </div>
        <p className="font-semibold text-center mt-4 text-3xl">
          Plans for all sizes
        </p>
        <p className="text-center font-light mt-4">
          Simple, transparent pricing that grows with you. Try any plan free for
          30 days.
        </p>
        <p className="text-center mt-4 font-semibold text-1xl">
          Annual Pricing{" "}
          <span className="text-custom-purplish-blue">(20%)</span>
        </p>
      </div>
    </header>
  );
}
