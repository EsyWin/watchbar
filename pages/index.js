import React from "react";
import Head from "next/head";

import Header from "../components/header/header.component";
import Table from "../components/table/table.component";
import Footer from "../components/footer/footer.component";

function Homepage(props) {
  return (
    <div className="jumbotron">
      <Header />
      <h1 className="text-center title">{props.blogTitle}</h1>
      <Table />
      <Footer />
    </div>
  );
}

Homepage.getInitialProps = () => {
  return {
    blogTitle: "WATCĦBAR",
  };
};

export default Homepage;
