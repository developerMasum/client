import Inventory from "../components/Inventory/Inventory";
import DemoColumn from "../components/Inventory/inventoryStock";


import DisplayCard from "../components/home/DisplayCard";
import Section from "../components/home/Section";

const Test = () => {
  return (
    <>
      <DisplayCard />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DemoColumn/> <Section />
      </div>
      <Inventory />
    </>
  );
};

export default Test;
