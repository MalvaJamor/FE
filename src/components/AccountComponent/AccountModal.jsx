import Form from "../Auth/Form";
import FraamedLogo from "../FraamedLogo";
import Rectangle from "../plans-components/Rectangle";
import NormalHorizontal from "./NormalHorizontal";

export default function AccountModal() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <Rectangle />
          <NormalHorizontal normalClasses={" w-8 h-32 mt-20 bg-[#3D53DB]"} />
          <div className="ml-[10rem] mt-[-5rem]">
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
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
