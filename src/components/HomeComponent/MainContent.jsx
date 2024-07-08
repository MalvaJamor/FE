import PriceCard from "./PriceCard";
export default function MainContent() {
  return (
    <div>
      <div className="bg-[#DCE4FF]  innerBackground"></div>
      <div className="bg-[#DCE4FF] p-7 w-[15rem] translate-y-16 absolute -skew-y-12  h-[4rem]"></div>
      <div className="grid grid-cols-4 gap-4 p-4">
        <PriceCard duration={"1 MONTH"} amount={"$100"} />
        <PriceCard duration={"6 Month"} amount={"$75"} />
        <PriceCard duration={"12 MoONTHS"} amount={"$50"} />
        <PriceCard duration={"48 MONTHS"} amount={"$20"} />
      </div>
    </div>
  );
}
