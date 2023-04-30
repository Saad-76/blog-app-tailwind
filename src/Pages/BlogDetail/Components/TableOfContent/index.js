import React from "react";
import Conclusion from "./conclusion";
import Resources from "./resources";
import SoftwareAndTools from "./softwareAndTools";
import Introduction from "./introduction";
import ContentMenu from "./contentMenu";

const TableOfContent = () => {
  return (
    <div class="grid grid-cols-12 gap-6  ">
      <div class="col-span-4 lg:col-span-4 hidden lg:block">
        <ContentMenu />
      </div>
      <div class="col-span-12  md:col-span-12 lg:col-span-8 ">
        <Introduction />
        <SoftwareAndTools />
        <Resources />
        <Conclusion />
      </div>
    </div>
  );
};
export default TableOfContent;
