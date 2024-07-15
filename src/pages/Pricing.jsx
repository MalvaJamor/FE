import sac from "../asset/image/gail.png";
import sim from "../asset/image/feati.png";

const PricingCards = () => {
  return (
    <section className="relative">
      <div className="text-center font-semibold text-2xl mt-10 mb-16">
        <h3>Choose A Business Period</h3>
      </div>
      <br />
      <div className="sm:py-24 py-16 sm:px-8 px-5 mx-auto flex flex-col lg:flex-row justify-center items-center space-x-2 gap-y-8 lg:space-x-[14px]">
        <div>
          <img
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-full min-h-[650px]"
            src={sac}
            alt="icon"
          />
        </div>
        <div className="relative lg:w-1/4 shadow-[0px_0px_24px_rgba(0,0,0,0.25)] rounded-[15px] xl:min-h-[400px] lg:min-h-[300px] px-6 pb-11 pt-20 flex flex-col justify-between bg-white mb-10 mt-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary-100 w-3/5 h-10 rounded-t-[8px] flex justify-center items-center">
            <h3 className="text-white text-xl text-center font-bold">
              1 Month
            </h3>
          </div>
          <div className="flex items-center justify-center">
            <img className="w-8 h-8 mb-1" src={sim} alt="icon" />
          </div>

          <div>
            <p className="text-center text-gray-300 text-sm mb-1">$150</p>
            <p className="text-center font-semibold text-2xl mb-1">$100</p>
            <p className="text-center text-sm text-gray-300 font-bold mb-2">
              $USD/month
            </p>
          </div>
          <div className="flex items-center text-sm text-gray-600 justify-center">
            Plans renew at $100 on 23/01/2024
          </div>
        </div>
        <div className="relative lg:w-1/4 shadow-[0px_0px_24px_rgba(0,0,0,0.25)] rounded-[15px] xl:min-h-[400px] lg:min-h-[300px] px-6 pb-11 pt-20 flex flex-col justify-between bg-white mb-10 mt-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary-100 w-3/5 h-10 rounded-t-[8px] flex justify-center items-center">
            <h3 className="text-white text-xl text-center font-bold">
              6 MONTHS
            </h3>
          </div>
          <div className="flex items-center justify-center">
            <img className="w-8 h-8 mb-1" src={sim} alt="icon" />
          </div>

          <div>
            <p className="text-center text-gray-300 text-sm mb-1">$150</p>
            <p className="text-center font-semibold text-2xl mb-1">$100</p>
            <p className="text-center text-sm text-gray-300 font-bold mb-2">
              $USD/month
            </p>
          </div>
          <div className="flex items-center text-sm text-gray-600 justify-center">
            Plans renew at $100 on 23/01/2024
          </div>
        </div>
        <div className="relative lg:w-1/4 shadow-[0px_0px_24px_rgba(0,0,0,0.25)] rounded-[15px] xl:min-h-[400px] lg:min-h-[300px] px-6 pb-11 pt-20 flex flex-col justify-between bg-white mb-10 mt-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary-100 w-3/5 h-10 rounded-t-[8px] flex justify-center items-center">
            <h3 className=" text-xl text-white text-center font-bold">
              12 MONTHS
            </h3>
          </div>
          <div className="flex items-center justify-center">
            <img className="w-8 h-8 mb-1" src={sim} alt="icon" />
          </div>

          <div>
            <p className="text-center text-gray-300 text-sm mb-1">$150</p>
            <p className="text-center font-semibold text-2xl mb-1">$100</p>
            <p className="text-center text-sm text-gray-300 font-bold mb-2">
              $USD/month
            </p>
          </div>
          <div className="flex items-center text-sm text-gray-600 justify-center">
            Plans renew at $100 on 23/01/2024
          </div>
        </div>
        <div className="relative lg:w-1/4 shadow-[0px_0px_24px_rgba(0,0,0,0.25)] rounded-[15px] xl:min-h-[400px] lg:min-h-[300px] px-6 pb-11 pt-20 flex flex-col justify-between bg-white mb-10 mt-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary-100 w-3/5 h-10 rounded-t-[8px] flex justify-center items-center">
            <h3 className=" text-xl text-white text-center font-bold ">
              48 MONTHS
            </h3>
          </div>
          <div className="flex items-center justify-center">
            <img className="w-8 h-8 mb-1" src={sim} alt="icon" />
          </div>

          <div>
            <p className="text-center text-gray-300 text-sm mb-1">$150</p>
            <p className="text-center font-semibold text-2xl mb-1">$100</p>
            <p className="text-center text-sm text-gray-300 font-bold mb-2">
              $USD/month
            </p>
          </div>
          <div className="flex items-center text-sm text-gray-600 justify-center">
            Plans renew at $100 on 23/01/2024
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
