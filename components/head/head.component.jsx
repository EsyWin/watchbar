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
      <Head>
        <meta property="og:url" content="https://watchbar.space" />
      </Head>
      <Head>
        <meta property="og:site_name" content="watchbar" />
      </Head>
      <Head>
        <meta
          property="og:description"
          content="hedera, hashgraph, hedera-hashgraph, hbar, analytics"
        />
      </Head>
      <Head>
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/esywin/watchbar/main/public/img/hello-data_mini.jpg"
          key="embed"
        />
      </Head>
    </div>
  );
};

export default Header;
