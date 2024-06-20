import { Link } from "react-router-dom";
import FraamedLogo from "../components/FraamedLogo";
export default function Error() {
  return (
    <div className="max-w-[1000px] p-8 mx-auto">
      <FraamedLogo logoClasses={"w-52 p-4 mx-auto shadow-custom rounded-lg"} />
      <h1 className="text-center mt-40 text-5xl font-semibold text-custom-purplish-blue ">
        404 error 😒
      </h1>
      <div className="max-w-[500px] mx-auto mt-4">
        <p className="text-center">
          <Link to="/">
            <button className="bg-custom-purplish-blue text-white px-4 py-2 rounded-lg">
              Go home
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
