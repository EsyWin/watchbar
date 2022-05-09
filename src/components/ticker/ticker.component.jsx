/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import axios from 'axios';

const objectToArray = (obj) => {
  const keys = Object.keys(obj);
  const res = [];
  for (let i = 0; i < keys.length; i++) {
    res.push([keys[i], obj[keys[i]]]);
  }
  return res;
};

const queryURL =
  'https://api.coingecko.com/api/v3/simple/price?ids=hedera-hashgraph&vs_currencies=usd';

class Ticker extends Component {
  constructor() {
    super();

    this.state = {
      usd: '',
      mcap: '',
      h24: '',
    };
  }

  componentDidMount() {
    const updateH = async () => {
      axios
          .get(queryURL)
          .then((response) => response.data)
      //   response.json())
          .then((data) =>
            this.setState(
                () => {
                  // console.log(data);
                  const wen = objectToArray(data);
                  const price = wen[0][1].usd;
                  return {usd: price.toString().slice(0, 5)};
                },
                () => {
                  console.log(this.state);
                },
            ),
          );
    };
    updateH();
    setInterval(updateH, 60000);
  }

  render() {
    return (
      <div className="ticker-container">
        <th className="ticker">
          Ħ <span className="blink">:</span> $ {this.state.usd}
        </th>
        <th className="marketcap">
          Market cap:
        </th>
        <th className="vol">
          24h Vol
        </th>
      </div>
    );
  }
}

export default Ticker;
