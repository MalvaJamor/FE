/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Question({text, dividedText, link}) {
  return (
    <div>
      <p className="font-moreLight text-center mt-4 cursor-pointer text-[#8E92BC] ">
      {text}
        {" "}
        <Link to={link}>
          <span className="text-[#546FFF]">
          {dividedText}
          
        </span>
        </Link>
      </p>
    </div>
  );
}
