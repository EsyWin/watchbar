import React from "react";
import Head from "next/head";

import Header from "../components/header/header.component";
import Ticker from "../components/ticker/ticker.component";
import Table from "../components/table/table.component";
import Footer from "../components/footer/footer.component";

function Homepage(props) {
  return (
<<<<<<< HEAD
    <div>
      <h1>Welcome to {props.blogTitle}!</h1>
      Whaddupp bitchessss
=======
    <div className="jumbotron">
      <Header />
      <Ticker />
      <h1 className="text-center title">{props.blogTitle}</h1>
      <Table />
      <Footer />
>>>>>>> e70376faab11c5ee70e2eec1f8e360aa407c0904
    </div>
  );
}

Homepage.getInitialProps = () => {
  return {
    blogTitle: "WATCĦBAR",
  };
};

export default Homepage;
