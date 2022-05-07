import React from "react";
import Head from "next/head";

import Header from "../components/header/header.component";
import Ticker from "../components/ticker/ticker.component";
import Table from "../components/table/table.component";
import Footer from "../components/footer/footer.component";
import { ReactDOM } from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Team from "../pages/team.js"
import Whitepaper from "../pages/whitepaper.js"

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={Homepage} exact={true} />
        <Route path='/team' component={Team} />
        <Route path='/whitepaper' component={Whitepaper} />
      </Switch>
    </div>
  </BrowserRouter>
);

function Homepage(props) {
  return (
    <div>
      <div className="Topbar">
        <Ticker />
        <Header />
      </div>
      <div className="jumbotron">
        <h1 className="text-center title">{props.blogTitle}</h1>
        <Table />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
