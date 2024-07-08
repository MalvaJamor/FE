import rafiki from "../assets/rafiki.svg";
export default function SectionTwo() {
  return (
    <section className="bg-[#EDEAE4] flex items-center mt-10 rounded-md shadow-md p-8">
      <div className="w-full">
        <img src={rafiki} alt="rafiki image" />
      </div>
      <div className="w-full">
        <h1 className="font-semibold text-[#07060c] text-2xl">
          The unseen of spending three years at Malva
        </h1>
        <p className="text-[#434248] text-justify">
          To empower individuals and teams to achieve their highest productivity
          potential by providing an intuitive, intelligent, and integrated
          productivity platform.To deliver a seamless productivity experience
          that combines powerful task management, smart automation, and
          collaborative tools, helping users streamline their workflows and
          maximize their efficiency.
        </p>
        <button className="rounded bg-custom-purplish-blue text-white px-7 mt-4 py-2">Learn more</button>
      </div>
    </section>
  );
}
