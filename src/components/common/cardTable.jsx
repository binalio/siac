import React, { Component } from "react";
import { getTransactions } from "../../services/fakeTransactionService";
import Pagination from "./pagination";
import { paginate } from "../../utils/paginate";

class CardTable extends Component {
  state = {
    transactions: getTransactions(),
    currentPage: 1,
    pageSize: 5,
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.transactions;
    const { pageSize, currentPage, transactions: allTransactions } = this.state;

    if (count === 0) return <p>No hay transacciones en la Base de Datos.</p>;

    const transactions = paginate(allTransactions, currentPage, pageSize);

    return (
      <div className="card">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>MOVIMIENTO</th>
                <th>DETALLE</th>
                <th>FECHA</th>
                <th>MONTO</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td>{transaction.title}</td>
                  <td>{transaction.budget.name}</td>
                  <td>{transaction.numberInStock}</td>
                  <td>{transaction.dailyRentalRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Mostrando {count} transacciones</p>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default CardTable;
