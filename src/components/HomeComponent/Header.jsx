import homeIllustration from "../assets/homeIllustration.svg";
export default function Header() {
  return (
    <header className="grid grid-cols-2 gap-[12rem] mt-32">
      <div className="w-full py-24">
        <h1 className="text-7xl font-extralight">
          Take Control of <br />
          Your <span className="text-[#546FFFee]">Tasks</span> with <br /> Malva
        </h1>
        <p className="text-[#727272] text-base mt-10">
          Welcome aboard! Say goodbye to chaos and hello to organized success.
          Malva is your partner in conquering tasks, managing time, and reaching
          milestones. Let&#39;s set the stage for your best work ever.
        </p>
      </div>
      <div className="w-full">
        <img src={homeIllustration} alt="home page illustration" />
      </div>
    </header>
  );
}
