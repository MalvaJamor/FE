import Form from "../Auth/Form";
import Or from "../plans-components/Or";
import FraamedLogo from "../FraamedLogo";
import Rectangle from "../plans-components/Rectangle";
import NormalHorizontal from "./NormalHorizontal";
import LeftLine from "../plans-components/LeftLine";
import GoogleButton from "../Auth/GoogleButton";
import Question from "../plans-components/Question";
import RightImgWithBackground from "../plans-components/RightImgWithBackground";
export default function AccountModal() {
  return (
    <>
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
                Welcome Back
              </h2>
              <p className="font-moreLight text-custom-purplish-blue text-center">
                Please login to your account
              </p>
            </div>
            <div className="mx-auto p-4 shadow-custom mt-4 w-full">
              <Form />
            </div>
            <div className="flex items-center gap-4 mt-3 mb-3">
              <LeftLine />
              <Or />
              <LeftLine />
            </div>
            <div>
              <GoogleButton />
            </div>
            <Question 
              link={'/sign'}
              text={'Don\'t have an account?'}
              dividedText={'Sign Up here'}
            />
          </div>
        </div>
          <RightImgWithBackground 
            illuStyles={'w-96 mx-auto mt-56'}
          />
      </div>
    </>
  );
}
