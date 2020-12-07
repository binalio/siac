import React from "react";
import CardMetric from "../components//common/cardMetric";
import Form from "../components//common/form";
import Joi from "joi-browser";
import CardTable from "../components//common/cardTable";
import CardChart from "../components/common/cardChart";

class Dashboard extends Form {
  state = {
    data: {
      title: "Help",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    options: [
      { _id: 1, opt: "op1" },
      { _id: 2, opt: "op2" },
      { _id: 3, opt: "op3" },
    ],
    errors: {},
    metrics: [
      {
        id: 1,
        title: "Hello",
        balance: "this is me",
        detail: "talkin",
        ico: require("../assets/img/budget_ico.svg"),
      },
      {
        id: 2,
        title: "Hello",
        balance: "this is me",
        detail: "talkin",
        ico: require("../assets/img/balance_ico.svg"),
      },
      {
        id: 3,
        title: "Hello",
        balance: "this is me",
        detail: "talkin",
        ico: require("../assets/img/expenses_ico.svg"),
      },
    ],
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  render() {
    return (
      <div>
        <div className="d-flex mt-4 mb-3">
          <h1>Tablero de información</h1>
          <ul className="list-inline my-auto ml-auto">
            <li className="list-inline-item">
              <select className="form-control">
                <option>Seleccionar...</option>
              </select>
            </li>
            <li className="list-inline-item">
              <select className="form-control">
                <option>Seleccionar...</option>
              </select>
            </li>
          </ul>
        </div>

        <div className="row">
          {this.state.metrics.map((metric) => (
            <div className="col-4" key={metric.id}>
              <CardMetric
                title={metric.title}
                balance={metric.balance}
                detail={metric.detail}
                ico={metric.ico}
              />
            </div>
          ))}
        </div>
        <div className="row mt-4">
          <div className="col-8">
            <CardTable />
          </div>
          <div className="col-4">
            <CardChart />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-4">
            <CardChart />
          </div>
          <div className="col-8">
            <CardTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
