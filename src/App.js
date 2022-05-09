/* eslint-disable require-jsdoc */
import React from 'react';

import Header from './components/header/header.component';
import Ticker from './components/ticker/ticker.component';
import Table from './components/table/table.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div>
      <div className="Topbar">
        <Ticker />
        <Header />
      </div>
      <div className="jumbotron">
        <h1 className="text-center title">WATCĦBAR</h1>
        <Table />
        <Footer />
      </div>
    </div>
  );
}

export default App;
