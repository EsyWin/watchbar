import React from "react";
import Head from "next/head";

import Header from "../components/header/header.component";
import Ticker from "../components/ticker/ticker.component";
import Table from "../components/table/table.component";
import Footer from "../components/footer/footer.component";

function Homepage(props) {
  return (
    <>
      <div className="header">
        <Ticker />
        <Header />
      </div>
      <div className="jumbotron">
        <h1 className="text-center title">{props.blogTitle}</h1>
        <Table />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
