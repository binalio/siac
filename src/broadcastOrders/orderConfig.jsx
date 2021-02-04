import React, { Component } from "react";
import { Button } from "react-bootstrap";
import OrderForm from "./orderForm";

class OrderConfig extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="row mt-4 mb-3">
          <div className="col-4 pr-0 d-flex">
            <h4 className="mb-0 pt-1">Creación de orden</h4>
          </div>
          <div className="col d-flex">
            <ul className="list-inline ml-auto mb-0">
              <li className="list-inline-item">
                <Button
                  variant="light border"
                  onClick={() => this.setState({})}
                >
                  Imprimir
                </Button>
              </li>
              <li className="list-inline-item">
                <Button variant="primary" onClick={() => this.setState({})}>
                  Nueva orden
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card border-0">
          <div className="card-body py-0">
            <OrderForm />
          </div>
        </div>
      </div>
    );
  }
}

export default OrderConfig;
