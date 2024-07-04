import logo from "../asset/image/logaf.png";

const CheckEmail = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="text-center gap-y-1 mt-4">
        <img className="block cursor-pointer  mx-auto w-1/2 mb-8" src={logo} alt="malva" />
        <div>
          <h2 className="text-xl text-primary-100 font-semibold">
            Check your email
          </h2>
        </div>
        <div>
          <p className="text-sm text-primary-100">
            We sent a verification link to <br />
            obatobi1@gmail.com
          </p>
        </div>
        <div className="bg-white p-12 rounded-md gap-y-0.2 mt-2">
          <div className="flex justify-between gap-2 mt-4">
            <button
              type="button"
              className="flex items-center justify-center w-full md:w-1/3 p-4 px-6 text-lg text-black rounded-md font-semibold border border-gray-300"
            >
              1
            </button>
            <button
              type="button"
              className="flex items-center justify-center  w-full md:w-1/3 p-4 px-6  text-lg text-black rounded-md font-semibold border border-gray-300"
            >
              2
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-1/2 p-4 px-6 text-lg text-black rounded-md font-semibold border border-gray-300"
            >
              3
            </button>
            <button
              type="button"
              className="flex items-center bg-gray-100 justify-center w-1/2 p-4 px-6 text-lg text-black rounded-md font-semibold border border-gray-300"
            ></button>
          </div>

          <div className="text-center flex items-center justify-center gap-2 mt-4">
            <p className="text-sm text-primary-100 cursor-pointer">Resend Code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
          
        