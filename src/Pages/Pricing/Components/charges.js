import React from "react";
import BusinessCard from "./BuinessCard";
import ChargesCard from "./chargesCard";

const Charges = () => {
  return (
    <>
      <div class="flex flex-col lg:flex-row md:flex-col justify-between">
        <ChargesCard />
        <BusinessCard />
        <ChargesCard />
      </div>
    </>
  );
};
export default Charges;
