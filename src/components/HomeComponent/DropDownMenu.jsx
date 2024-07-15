import ListItem from "./ListItem";
export default function DropDownMenu() {
    const listArray = ["Features", "Resources", "Pricing", "Plans"];
  return (
    <div>
      <p className="font-bold text-base">Why Malva?</p>
      <div>
      <ListItem list={[listArray[0]]} />
        <ListItem list={[listArray[1]]} />
        <ListItem list={[listArray[2]]} />
        <ListItem list={[listArray[3]]} to={"/plans"} />
      </div>
    </div>
  );
}
