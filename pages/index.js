import React from "react";

import Header from "../components/header/header.component";

function Homepage(props) {
  return (
    <div>
      <Header />
      <h1>Welcome to {props.blogTitle}!</h1>
    </div>
  );
}

Homepage.getInitialProps = () => {
  return {
    blogTitle: "WATCĦBAR",
  };
};

export default Homepage;
