/* eslint-disable react/prop-types */
export default function PriceCard({duration,amount,}) {
  return (
    <div className="shadow-md w-full rounded-md translate-y-[-17rem] bg-white p-4 border">
      <p className="text-center mt-[-1rem]">
        <button className="bg-custom-purplish-blue text-center py-2 px-10  text-white  rounded-md">
          {duration}
        </button>
      </p>
      <div className="bg-[#F5F5F7] w-10 h-10 rounded-full mx-auto mt-10"></div>
      <p className="text-center text-[#546effae] font-semibold mt-5 text-base">$150</p>
      <h1 className="text-3xl text-center mt-10 font-extrabold">{amount}</h1>
      <p className="text-center text-[#667085] mt-4">USD / month</p>
      <p className="text-sm mt-4 text-[#667085]">Plan renew at $100 on 23/01/2024</p>
    </div>
  );
}
