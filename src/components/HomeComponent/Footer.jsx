import FramedIcon from "./FramedIcon";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import path from "../assets/Path.svg";
import send from '../assets/send.svg';
export default function Footer() {
  return (
    <footer className="bg-[#10197A] mt-32 p-10">
      <div className="grid grid-cols-3 gap-32 items-center">
        <div className="grid grid-cols-4 items-center">
          <FramedIcon icon={instagram} />
          <FramedIcon icon={path} />
          <FramedIcon icon={twitter} />
          <FramedIcon icon={youtube} />
        </div>
        <div className="grid grid-cols-2">
          <div className="text-[#F5F7FA]">
            <h1 className="text-white font-normal mb-6 text-2xl">Company</h1>
            <li className="list-none mb-4 text-[#F5F7FA] text-sm">About Us</li>
            <li className="list-none mb-4 text-[#F5F7FA] text-sm">Blog</li>
            <li className="list-none mb-4 text-[#F5F7FA] text-sm">Contact Us</li>
            <li className="list-none mb-4 text-[#F5F7FA] text-sm">Pricing</li>
            <li className="list-none mb-4 text-[#F5F7FA] text-sm">Testimonial</li>
          </div>
          <div>
            <h1 className="text-white font-normal mb-6 text-2xl">Support</h1>
            <li className="list-none mb-4 text-[#F5F7FA] text-sm">Help Center</li>
            <li className="list-none mb-4 text-[#F5F7FA] text-sm">Terms of service</li>
            <li className="list-none mb-4 text-[#F5F7FA] text-sm">Legal</li>
            <li className="list-none mb-4 text-[#F5F7FA] text-sm">Privacy and policy</li>
            <li className="list-none mb-4 text-[#F5F7FA] text-sm">Status</li>
          </div>
        </div>
        <div>
          <label className="text-white text-2xl" htmlFor="stay">Stay up to date</label>
          <input className="block mt-4 bg-[#ffffff2d] w-[255px] h-[40px] px-2 rounded-md placeholder:text-[#D9DBE1]" placeholder="Your email address" type="email" id="stay" />
          <img src={send} className="-translate-y-7 translate-x-[14rem]" alt="send" />
        </div>
      </div>
    </footer>
  );
}
