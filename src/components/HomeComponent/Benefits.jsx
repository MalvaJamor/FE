import GriddyBenefitsDetails from "./GriddyBenefitsDetails";
export default function Benefits() {
  return (
    <div className="mt-10">
      <h1 className="text-center text-custom-purplish-blue font-bold text-[36px]">
        Who benefits from Malva
      </h1>
      <div>
        <GriddyBenefitsDetails 
            transferDetails={'Remote Worker'}
            secondTransferDetails={'Startup Owner'}
        />
        <GriddyBenefitsDetails 
            transferDetails={'Students'}
            secondTransferDetails={'Project Manager'}
        />

        <GriddyBenefitsDetails 
            transferDetails={'Small Business'}
            secondTransferDetails={'Institution'}
        />
        <GriddyBenefitsDetails 
            transferDetails={'Product Managers'}
            secondTransferDetails={'Freelancer'}
        />
      </div>
    </div>
  );
}
