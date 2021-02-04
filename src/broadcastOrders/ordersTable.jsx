import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../components/common/table";

class OrdersTable extends Component {
  state = {
    order: [],
  };

  columns = [
    {
      path: "campaing.name",
      label: "Campaña",
      content: (order) => (
        <Link to={`/broadcastOrders/${order._id}`}>{order.campaing.name}</Link>
      ),
    },
    { path: "supplier.name", label: "Proveedor" },
    { path: "supplier.media.name", label: "Tipo de medio" },
    { path: "startDate", label: "Fecha inicio" },
    { path: "endDate", label: "Fecha fin" },
    { path: "amount", label: "Monto" },
    {
      key: "clone",
      content: (order) => (
        <a
          href="#/"
          onClick={() => this.openConfirmation(order)}
          className="text-muted"
        >
          <i className="far fa-clone"></i>
        </a>
      ),
    },
    {
      key: "delete",
      content: (order) => (
        <a
          href="#/"
          onClick={() => this.openConfirmation(order)}
          className="text-muted"
        >
          <i className="fal fa-trash-alt fa-lg"></i>
        </a>
      ),
    },
  ];

  render() {
    const { orders, onSort, sortColumn } = this.props;

    return (
      <div>
        <Table
          columns={this.columns}
          data={orders}
          sortColumn={sortColumn}
          onSort={onSort}
        />
      </div>
    );
  }
}

export default OrdersTable;
