
import logo from "../asset/image/logaf.png";
import rip from "../asset/image/slash.png";
import cosh from "../asset/image/dash.png";



const Password = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="text-center">
        <img className="block mx-auto w-1/2 mb-8" src={logo} alt="malva" />
        <div className="gap-y-1">
          <h2 className="text-center gap-y-0.8 mt-4 text-2xl text-primary-100 font-semibold">
            Forgot Password
          </h2>
        </div>
        <div>
          <p className="text-center text-sm text-primary-100">
            Please check your email for reset Link
          </p>
        </div>
        <div className="bg-white p-8 rounded-md gap-y-3 mt-4 shadow-md">
          <h3 className="text-sm text-primary-100 text-left font-semibold mb-4">
            Password
          </h3>
          <div className="relative">
            <input
              type="password"
              className="w-full p-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            <img
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
              src={rip}
              alt="icon"
            />
          </div>
          <div className="flex flex-col items-center gap-y-4 mt-4">
            <button
              type="button"
              className="w-full p-2 text-sm font-poppins bg-primary-100 text-white rounded-md font-semibold"
            >
              Reset Password
            </button>
          </div>
          <div className="text-center flex flex-col gap-y-4 mt-4 md:flex-row mr-12 ">
            <img
              className="block mx-auto w-6 h-6  mr-4 mb-8"
              src={cosh}
              alt="mull"
            />
            <h2 className="text-center text-sm text-primary-100 mr-2 ml-0.5">
              Back to Login
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
