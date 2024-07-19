/* eslint-disable react/prop-types */
export default function TestimonialCard({testimonialsName, testimonierImage, profession,fistBatch,secondBatch, thirdBatch, fourthBatch, finalBatch}) {
  return (
    <div className="w-[604px] h-[359px] p-4 shadow-thick-gray mt-20 rounded-md">
      <div className="flex items-center gap-4">
        <img src={testimonierImage} alt="testimonial " />
        <div>
          <h1 className="font-semibold">{testimonialsName} </h1>
          <p className="text-xl">{profession}</p>
        </div>
      </div>
      <p className="text-justify mt-10 ml-14">
      {fistBatch} <br />
      {secondBatch} <br />{thirdBatch} <br />{fourthBatch} <br />{finalBatch}
      {/*       */}
      </p>
    </div>
  );
}
