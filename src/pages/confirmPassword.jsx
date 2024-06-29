
import rip from "../asset/image/slash.png";


const confirmPassword = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="text-center">
        <div className="gap-y-1">
          <h2 className="text-center gap-y-6 mt-4 text-xl text-primary-100 font-semibold">
            Reset your password
          </h2>
        </div>

        <div className="bg-white p-8 rounded-md  shadow-md">
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
          <div className="relative  gap-y-6 mt-4">
            <p className="text-sm text-primary-100 text-left font-semibold mb-2">
              Confirm Password
            </p>
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
          </div>
        </div>
        <div className="flex justify-end gap-y-2 mt-4 ">
          <button
            type="button"
            className="  text-center p-2 text-sm font-poppins bg-primary-100 text-white rounded-md font-semibold w-0.9"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default confirmPassword;



