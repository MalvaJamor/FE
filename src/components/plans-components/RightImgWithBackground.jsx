/* eslint-disable react/prop-types */
import illustrationImage from "../assets/illustration-login.svg";
import LargerEllipse from "./LargerEllipse";
export default function RightImgWithBackground({text, textStyle, illuStyles}) {
  return (
    <>
      <div className="bg-[#7E95FF]">
        <img
          src={illustrationImage}
          className={illuStyles}
          alt="illustration"
        />
        <LargerEllipse
          ellipseStyle={
            "bg-white rounded-full w-8 h-8 ml-[35.5rem] mt-[-10rem]"
          }
        />

        <LargerEllipse
          ellipseStyle={"bg-white rounded-full w-5 h-5 ml-[34rem] mt-[-3rem]"}
        />

        <LargerEllipse
          ellipseStyle={"bg-white rounded-full w-4 h-4 ml-[34rem] mt-[1.5rem]"}
        />
        <p className={textStyle}>{text}</p>
      </div>
    </>
  );
}
