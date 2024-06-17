
import logo from "../asset/image/logomal.png";
import rip from "../asset/image/slash.png";
import cosh from "../asset/image/dash.png";



const Password = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="text-center">
        <img className="block mx-auto w-1/2 mb-8" src={logo} alt="malva" />
        <div className="gap-y-1">
          <h2 className="text-center text-2xl text-indigo-600 font-semibold">
            Forgot Password
          </h2>
        </div>
        <div className="gap-y-2 mt-4">
          <p className="text-center text-xl text-indigo-600">
            Please check your email for reset Link
          </p>
        </div>
        <div className="bg-white p-8 rounded-md gap-y-6 mt-4 shadow-md">
          <h3 className="text-sm text-indigo-600 text-left font-semibold mb-4">
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
              className="w-full p-2 text-sm font-poppins bg-indigo-600 text-white rounded-md font-semibold"
            >
              Reset Password
            </button>
          </div>
          <div className="text-center flex flex-col gap-y-4 mt-4 md:flex-row mr-12 space-y-1 md:space-y-0 md:space-x-1">
            <img
              className="block mx-auto w-6 h-6 mr-6 mb-8"
              src={cosh}
              alt="mull"
            />
            <h2 className="text-center text-sm text-indigo-600 ml-2">
              Back to Login
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
