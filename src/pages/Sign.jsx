import NormalHorizontal from "../components/AccountComponent/NormalHorizontal";
import GoogleButton from "../components/Auth/GoogleButton";
import SignInForm from "../components/Auth/SignInForm";
import FraamedLogo from "../components/FraamedLogo";
import LeftLine from "../components/plans-components/LeftLine";
import Or from "../components/plans-components/Or";
import Question from "../components/plans-components/Question";
import Rectangle from "../components/plans-components/Rectangle";
import RightImgWithBackground from "../components/plans-components/RightImgWithBackground";

export default function Sign() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="mr-20">
        <Rectangle />
        <NormalHorizontal normalClasses={" w-8 h-32 mt-20 bg-[#3D53DB]"} />
        <div className="ml-[4rem] mb-4 mt-[-8rem]">
          <div>
            <FraamedLogo
              logoClasses={"w-52 p-4 mx-auto shadow-custom rounded-lg"}
            />
            <h2 className="text-center font-lighter text-custom-purplish-blue text-2xl mt-6">
              Create a new account
            </h2>
            <p className="font-moreLight text-custom-purplish-blue text-center">
              Create an account for to have access to the features
            </p>
          </div>
          <div className="mx-auto p-4 shadow-custom mt-4 w-full">
            <SignInForm />
          </div>
          <div className="flex items-center gap-4 mt-5 mb-3">
            <LeftLine />
            <Or />
            <LeftLine />
          </div>
          <div>
            <GoogleButton />
          </div>
          <Question 
          link={'/account'}
            text={'Already have an account'}
            dividedText={'Log in'}
          />
        </div>
      </div>
      <RightImgWithBackground
        illuStyles={"w-[28rem] mx-auto mt-56"}
        text={"Term and Condition Privacy Policy"}
        textStyle={"mt-[27rem] ml-[20rem] text-[1rem] mb-4 text-[#f5f5f7]"}
      />
    </div>
  );
}
