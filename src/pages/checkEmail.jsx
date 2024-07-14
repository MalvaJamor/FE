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

        <div className="bg-white p-10 rounded-md mt-2">
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-4 mt-4">
            <div className="flex items-center justify-center w-full md:w-auto">
              <input
                type="number"
                className="w-full md:w-20 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="button"
              />
            </div>
            <div className="flex items-center justify-center w-full md:w-auto">
              <input
                type="number"
                className="w-full md:w-20 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="button"
              />
            </div>
            <div className="flex items-center justify-center w-full md:w-auto">
              <input
                type="number"
                className="w-full md:w-20 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="button"
              />
            </div>
            <div className="flex items-center bg-gray-100 justify-center w-full md:w-auto">
              <input
                type="number"
                className="w-full md:w-20 p-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="button"
              />
            </div>
          </div>
        </div>

        <div className="text-center flex items-center justify-center gap-2 mt-4">
          <p className="text-sm text-primary-100">Resend Code</p>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
          
        