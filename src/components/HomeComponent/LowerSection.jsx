 import members from "../assets/Icon1.svg";
import nationalBuilding from "../assets/Icon2.svg";
import groupHands from "../assets/icon3.svg";
export default function LowerSection() {
  return (
    <section className="mt-[-12rem]">
      <div className="grid grid-cols-3">
        <div>
          <img src={members} className="mx-auto" alt="members" />
          <p className="text-center mt-2 text-2xl font-semibold">
            Members <br /> Organisations
          </p>
          <p className=" text-center mt-4">
            Our membership management 
          </p>
          <p className="text-center">software provides full automation of</p>
        <p className="text-center">membership renewals and payments</p>
        </div>
        <div>
          <img src={nationalBuilding} className="mx-auto" alt="big building" />
          <p className="text-center mt-2 text-2xl font-semibold">
            National <br /> Association
          </p>
          <p className="text-center mt-4">
          Our membership management <br />software provides full automation of <br />membership renewals and payments
          </p>
        </div>
        <div>
        <img src={groupHands} className="mx-auto mb-6" alt="big building" />
          <p className="text-center mt-2 text-2xl font-semibold">
            Clubs and <br /> Groups
          </p>
          <p className="text-center mt-4">
          Our membership management <br />software provides full automation of <br />membership renewals and payments
          </p>
        </div>
      </div>
    </section>
  );
}
