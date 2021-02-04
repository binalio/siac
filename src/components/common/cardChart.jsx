import React, { Component } from "react";
import PieChart from "./Chart/pieChart";

class CardChart extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <PieChart />
        </div>
      </div>
    );
  }
}

export default CardChart;
