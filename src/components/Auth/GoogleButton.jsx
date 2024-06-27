import googleImage from "../assets/Google.svg";
export default function GoogleButton() {
  return (
    <button className=" w-full border border-[#e0e3e8] rounded-lg p-2 gap-4">
      <span className="flex items-center mx-32">
        <img src={googleImage} className="w-10" alt="google-img" />
        <p className="font-moreLight text-[#8e92b2]">Login with Google</p>
      </span>
    </button>
  );
}
