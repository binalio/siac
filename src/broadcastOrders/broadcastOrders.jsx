import React, { Component } from "react";
import _ from "loadsh";
import OrdersTable from "./ordersTable";
import SearchBox from "../components/searchBox";
import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import { Button } from "react-bootstrap";

import { getOrders } from "../services/fakeOrdersService";

class BroadcastOrders extends Component {
  state = {
    orders: [],
    currentPage: 1,
    pageSize: 15,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    this.setState({
      orders: getOrders(),
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      orders: allOrders,
    } = this.state;

    let filtered = allOrders;

    if (searchQuery)
      filtered = allOrders.filter((o) =>
        o.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const orders = paginate(sorted, currentPage, pageSize);

    return {
      totalCount: filtered.length,
      data: orders,
    };
  };
  render() {
    const { length: count } = this.state.orders;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>No hay transacciones en la Base de Datos.</p>;

    const { totalCount, data: orders } = this.getPageData();
    return (
      <div>
        <div className="row mt-4 mb-3">
          <div className="col d-flex">
            <h4 className="mb-0 pt-1">Ordenes de medios</h4>
            <ul className="list-inline ml-auto mb-0">
              <li className="list-inline-item">
                <SearchBox value={searchQuery} onChange={this.handleSearch} />
              </li>
              <li className="list-inline-item">
                <Button
                  variant="primary"
                  onClick={() => this.setState({ isOpen: true })}
                >
                  Nueva orden
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-body py-0">
            <div className="row">
              <div className="col">
                <OrdersTable
                  orders={orders}
                  sortColumn={sortColumn}
                  onDelete={this.handleDelete}
                  onSort={this.handleSort}
                />
                <div className="d-flex">
                  <p className="mb-0 pt-2">
                    Mostrando {totalCount} transacciones
                  </p>
                  <Pagination
                    itemsCount={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BroadcastOrders;
