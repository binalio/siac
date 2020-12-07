import React, { Component } from "react";
import Table from "../components/common/table";
import ConfirmationModal from "../components/confirmationModal";
import TransactionModal from "./transactionModal";

class TransactionsTable extends Component {
  state = {
    isOpen: false,
    confirmIsOpen: false,
    confirmAction: false,
    idValue: null,
    titleTransaction: "",
    titleEdit: true,
    transaction: [],
    msjConfirmation: "",
  };

  openModal = (value, name) =>
    this.setState({ isOpen: true, idValue: value, titleTransaction: name });
  closeModal = () => this.setState({ isOpen: false });

  openConfirmation = (value) => {
    const msjConfirmation = (
      <>
        Estas a punto de eliminar el movimiento
        <b> {value.typeTransaction.name}</b>, en caso de hacerlo, su monto de
        <b> {value.amount}</b> se devolvera al presupuesto{" "}
        <b> {value.budget.name}</b>. ¿Deseas continuar?
      </>
    );
    this.setState({
      confirmIsOpen: true,
      transaction: value,
      msjConfirmation: msjConfirmation,
    });
  };

  handleDelete = (transaction) => {
    this.props.onDelete(transaction);
    this.setState({ confirmIsOpen: false });
  };

  columns = [
    {
      path: "typeTransaction.name",
      label: "Tipo de transacción",
      content: (transaction) => (
        <a
          href="#"
          onClick={() =>
            this.openModal(transaction._id, transaction.typeTransaction.name)
          }
        >
          {transaction.typeTransaction.name}
        </a>
      ),
    },
    { path: "amount", label: "Monto" },
    { path: "dateTransaction", label: "Fecha" },
    {
      key: "delete",
      content: (transaction) => (
        <a
          href="#"
          onClick={() => this.openConfirmation(transaction)}
          className="text-muted"
        >
          <i className="fal fa-trash-alt fa-lg"></i>
        </a>
      ),
    },
  ];

  render() {
    const { transactions, onSort, sortColumn } = this.props;

    return (
      <div>
        <Table
          columns={this.columns}
          data={transactions}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TransactionModal
          handleOpen={this.state.isOpen}
          handleTitle={this.state.titleEdit}
          titleTransaction={this.state.titleTransaction}
          item={this.state.idValue}
          handleClose={() => this.setState({ isOpen: false })}
        />
        <ConfirmationModal
          openConfirmation={this.state.confirmIsOpen}
          transaction={this.state.transaction}
          msjConfirmation={this.state.msjConfirmation}
          confirmationClose={() => this.setState({ confirmIsOpen: false })}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default TransactionsTable;
