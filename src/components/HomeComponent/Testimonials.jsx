import TestimonialCard from "./TestimonialCard";
import imageOne from "../assets/NewDesignImages/testimonialOne.svg";
import imageTwo from "../assets/NewDesignImages/imageTwo.svg";
export default function Testimonials() {
  return (
    <div className="mt-20">
      <h1 className="text-center font-semibold text-[36px] text-custom-purplish-blue">
        Testimonials
      </h1>
      <div className="flex items-center justify-between">
        <TestimonialCard
          testimonierImage={imageOne}
          testimonialsName={"Olaoluwa Ayetoro"}
          profession={"client"}
          fistBatch={"“Malva has been a problem solver for me as a non-time"}
          secondBatch={"management and a busy individual. The platform help"}
          thirdBatch={"manage my time, assign task and give priority to"}
          fourthBatch={"important task and this app has brought unparalleled"}
          finalBatch={"convenience and peace of mind to my household.” "}
        />
        <TestimonialCard
          testimonierImage={imageTwo}
          testimonialsName={"Shade Arotoye"}
          profession={"client"}
          fistBatch={"“Malva has revolutionized my life! As a freelancer ith alot"}
          secondBatch={" of gigs, finishing up the accumulated gigs was a"}
          thirdBatch={"challenge. But with this platform, i can set reminders for"}
          fourthBatch={" each tasks and also set priorities on tasks. I can also use"}
          finalBatch={"my idea box to save my ideas for future refernces” "} />
      </div>
    </div>
  );
}
