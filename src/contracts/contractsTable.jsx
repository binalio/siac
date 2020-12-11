import React, { Component } from "react";
import Table from "../components/common/table";
import ConfirmationModal from "../components/confirmationModal";
import ContractModal from "./contractModal";

class ContractsTable extends Component {
  state = {
    isOpen: false,
    confirmIsOpen: false,
    confirmAction: false,
    idValue: null,
    titleContract: "",
    titleEdit: true,
    contract: [],
    msjConfirmation: "",
  };

  openModal = (value, name) =>
    this.setState({ isOpen: true, idValue: value, titleContract: name });
  closeModal = () => this.setState({ isOpen: false });

  openConfirmation = (value) => {
    const msjConfirmation = (
      <>
        Estas a punto de eliminar el contrato
        <b> {value.budget.period.name}</b>, ¿deseas continuar?
      </>
    );
    this.setState({
      confirmIsOpen: true,
      contract: value,
      msjConfirmation: msjConfirmation,
    });
  };

  handleDelete = (contract) => {
    this.props.onDelete(contract);
    this.setState({ confirmIsOpen: false });
  };

  columns = [
    {
      path: "budget.period.name",
      label: "Contrato",
      content: (contract) => (
        <a
          href="#"
          onClick={() =>
            this.openModal(contract._id, contract.budget.period.name)
          }
        >
          {contract.budget.period.name}
        </a>
      ),
    },
    { path: "startDate", label: "Fecha inicio" },
    { path: "endDate", label: "Fecha fin" },
    { path: "amount", label: "Monto" },
    { path: "balance", label: "Saldo" },
    {
      key: "delete",
      content: (contract) => (
        <a
          href="#"
          onClick={() => this.openConfirmation(contract)}
          className="text-muted"
        >
          <i className="fal fa-trash-alt fa-lg"></i>
        </a>
      ),
    },
  ];

  render() {
    const { contracts, onSort, sortColumn } = this.props;
    //console.log(this.state.idValue);

    return (
      <div>
        <Table
          columns={this.columns}
          data={contracts}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <ContractModal
          handleOpen={this.state.isOpen}
          handleTitle={this.state.titleEdit}
          titleContract={this.state.titleContract}
          item={this.state.idValue}
          handleClose={() => this.setState({ isOpen: false })}
        />
        <ConfirmationModal
          openConfirmation={this.state.confirmIsOpen}
          contract={this.state.contract}
          msjConfirmation={this.state.msjConfirmation}
          confirmationClose={() => this.setState({ confirmIsOpen: false })}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default ContractsTable;
