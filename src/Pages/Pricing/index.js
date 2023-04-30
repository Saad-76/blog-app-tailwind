import React from "react";
import Review from "./Components/review";
import Footer from "../../Shared-Components/Footer";
import Charges from "./Components/charges";
import PricingHeader from "./Components/pricingHeader";
import CreateContent from "./Components/createContent";
import NavBar from "../NavBar";

const Pricing = () => {
  return (
    <>
      <div
        className="px-6 sm:px-16 md:px-16 lg:px-28"
        style={{ background: "#0A0D0E" }}
      >
        <NavBar/>
        <PricingHeader />
        <Charges />
        <Review />
        <CreateContent />
        <Footer />
      </div>
    </>
  );
};
export default Pricing;
