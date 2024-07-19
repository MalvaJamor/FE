import shape from "../assets/NewDesignImages/Shape.svg";
import onlineLearning from "../assets/NewDesignImages/Online learning-img.svg";
export default function NewDesignComponent() {
  return (
    <div className="relative mt-10">
      <img src={shape} className="absolute" alt="background shape" />
      <div className="bg-custom-gradient">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full mt-10">
            <img src={onlineLearning} alt="learning" />
          </div>
          <div className="w-full">
            <h1 className="text-center mt-28 text-[#546fff] font-extrabold text-4xl">
              Dependable, Reliable, <br /> Trustworthy, Accessible,
            </h1>
            <p className="text-center mt-10 font-normal text-base">&#34;With  Malva, your task is done with high dependable and <br /> Reliable as much as you can trust, now more accessible than <br /> ever&#34;</p>
            <button className="ml-44 bg-custom-purplish-blue px-12 py-5 mt-10 text-white text-3xl rounded-full">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
