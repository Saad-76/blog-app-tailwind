import React from "react";
import RelatedArticle from "./Components/relatedArticle";
import TableOfContent from "./Components/TableOfContent/index";
import TipsAndTricks from "./Components/tipsAndTricks";
import Footer from "../../Shared-Components/Footer";
import NavBar from "../NavBar";

const BlogDetail = () => {
  return (
    <div>
      <div
        className="px-6 sm:px-16 md:px-16 lg:px-28"
        style={{ background: "#0A0D0E" }}
      >
        <NavBar/>
        <TipsAndTricks />
        <TableOfContent />
        <RelatedArticle />
        <Footer/>
      </div>
    </div>
  );
};
export default BlogDetail;
