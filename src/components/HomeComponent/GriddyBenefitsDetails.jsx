/* eslint-disable react/prop-types */
import BenefitsDetails from "./BenefitsDetails";
export default function GriddyBenefitsDetails({transferDetails, secondTransferDetails}) {
  return (
    <div className="grid grid-cols-2 gap-40 mt-10">
      <BenefitsDetails details={transferDetails} />
      <BenefitsDetails details={secondTransferDetails} />
    </div>
  );
}
