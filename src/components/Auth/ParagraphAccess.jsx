import { Link } from "react-router-dom";

export default function ParagraphAccess() {
  return (
    <div className="flex items-center justify-between mt-4">
      <div>
        <input
          type="checkbox"
          className="accent-[#546fff]"
          checked
          id="remember"
        />
        <label
          htmlFor="remember"
          className="font-moreLight text-custom-purplish-blue"
        >
          Remember me
        </label>
      </div>
      <div>
        <Link to={'/password'} >
        <p className="font-moreLight underline text-custom-purplish-blue">Forgot password?</p>
        </Link>
      </div>
    </div>
  );
}
