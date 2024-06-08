/* eslint-disable react/prop-types */

export default function InnerPlans({OneUser, details}) {
  return (
    <div>
      <div className="bg-custom-purplish-blue w-[220px] px-14 py-20 box-border rounded-md h-[260px]">
        <img src={OneUser} alt="users-image" />
      </div>
      <p className="text-center mt-4 text-custom-purplish-blue">{details}</p>
    </div>
  );
}
