"use client";
import InnerPlans from "./InnerPlans";
import singleUser from "../assets/profile.svg";
import doubleUser from "../assets/profile-2user.svg";
import { useNavigate } from "react-router-dom";
import FraamedLogo from "../FraamedLogo";
export default function Modal() {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/account");
  };
  return (
    <div className="w-[1030px] mt-[-15rem]   pt-14 pb-32 px-5 shadow-lg shadow-[#00000057]  mx-auto">
      <FraamedLogo logoClasses={"w-52 p-4 shadow-md mx-auto rounded-lg"} />
      <div className="mt-4">
        <h1 className="text-center text-2xl text-[#546fff] font-lighter leading-9">
          Select account type
        </h1>
        <p className="text-center text-[#546fff] font-moreLight">
          How do you want to use Malva;
        </p>
      </div>
      <div className="w-[597px] h-[296px] mx-auto mt-10">
        <div className="flex gap-28 p-10">
          <div className="cursor-pointer" onClick={handleClick}>
            <InnerPlans OneUser={singleUser} details={"Personal"} />
          </div>
          <div>
            <InnerPlans OneUser={doubleUser} details={"Team"} />
          </div>
        </div>
      </div>
    </div>
  );
}
