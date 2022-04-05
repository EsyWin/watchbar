import React from "react";
import axios from "axios";

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      tokenList: [],
      tokens: [],
      baseURL: "https://mainnet-public.mirrornode.hedera.com/api/v1/tokens/"
    };
  }

  componentDidMount() {
    axios
      .get(this.state.baseURL)
      .then((response) => response.data)
      //   response.json())
      .then((tokens) =>
        this.setState(
          () => {
            return { tokens: tokens.tokens };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <table className="Table-Container">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th id="rank">#</th>
            <th id="symbol">Symbol</th>
            <th id="price">Price</th>
            <th id="tokenId">Token id</th>
            <th id="mcap">Marketcap</th>
            <th id="24V">24h Volume</th>
            <th id="mSupply">Max supply</th>
            <th id="cSupply">Circulating supply</th>
            <th id="holders">Holders</th>
            <th id="decimals">Decimals</th>
            <th id="txns">Transfers</th>
            {/* <th>supply</th> */}
          </tr>
        </thead>
        <tbody>
          {this.state.tokens.map((token) => {
            const explorerUrl = "https://app.dragonglass.me/hedera/tokens";
            return (
              <tr key={token.token_id}>
                {/* <td>#</td> */}
                <td id="rank"></td>
                <td id="symbol" className="symbol">{token["symbol"]}</td>
                <td id="price"></td>
                <td id="tokenId" className="tokenId">
                  <a
                    href={`${explorerUrl}/${token.token_id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="table-link"
                  >
                    {token["token_id"]}
                  </a>
                </td>
                {/* <td>{this.state.list.id}</td> */}
                <td id="mcap"></td>
                <td id="24V"></td>
                <td id="mSupply"></td>
                <td id="cSupply"></td>
                <td id="holders"></td>
                <td id="decimals"></td>
                <td id="txns"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
