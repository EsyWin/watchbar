import react from "react";
import Head from "next/head";

const Header = () => {
  return (
    <div>
      <Head>
        <title>WATCĦBAR | Hello data !</title>
        <meta
          property="og:title"
          content="WATCĦBAR | Hello data !"
          key="watchbar"
        />
      </Head>
      <Head>
        <meta
          property="og:title"
          content="WATCĦBAR | Hello data !"
          key="title"
        />
      </Head>
    </div>
  );
};

export default Header;
