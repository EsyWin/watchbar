/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
'use strict';
import React, {Component} from 'react';
import {InfluxDB} from '@influxdata/influxdb-client';

// You can generate an API token from the "API Tokens Tab" in the UI
const token = process.env.INFLUX_TOKEN;
const org = process.env.INFLUX_ORG;
const url = process.env.INFLUX_URL;
/**
 * Instantiate the InfluxDB client
 * with a configuration object.
 *
 * Get a query client configured for your org.
 **/
const queryApi = new InfluxDB({url, token}).getQueryApi(org);

class Tokens extends Component {
  constructor() {
    super();

    this.state = {
      number: '',
    };
  }

  componentDidMount() {
    /** To avoid SQL injection, use a string literal for the query. */
    const fluxQuery = 'from(bucket:"hedera") |> range(start: 0) |> filter(fn: (r) => r._measurement == "tokens")';

    const fluxObserver = {
      next(row, tableMeta) {
        const o = tableMeta.toObject(row);
        console.log(
            `${o._time} ${o._measurement} in ${o.region} (${o.sensor_id}): ${o._field}=${o._value}`,
        );
      },
      error(error) {
        console.error(error);
        console.log('\nFinished ERROR');
      },
      complete() {
        console.log('\nFinished SUCCESS');
      },
    };

    /** Execute a query and receive line table metadata and rows. */
    queryApi.queryRows(fluxQuery, fluxObserver);

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
  }

  render() {
    return (
      <div>
        <span className="token-container">tokens <span className="blink">:</span> $ {this.state.number}</span>
      </div>
    );
  }
}

export default Tokens;
