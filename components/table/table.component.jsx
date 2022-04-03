import React from "react";
import axios from "axios";

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
      tokens: [],
      baseURL: "https://mainnet-public.mirrornode.hedera.com/api/v1/tokens",
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
            <th>symbol</th>
            <th>token id</th>
            {/* <th>supply</th> */}
          </tr>
          {this.state.tokens.map((token) => {
            const explorerUrl = "https://app.dragonglass.me/hedera/tokens";
            return (
              <tr key={token.token_id}>
                {/* <td>#</td> */}
                <td className="symbol">{token["symbol"]}</td>
                <td className="symbol">
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
              </tr>
            );
          })}
        </thead>
      </table>
    );
  }
}

export default Table;
