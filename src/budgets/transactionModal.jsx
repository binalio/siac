import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import TransactionForm from "./transactionForm";

class TransactionModal extends Component {
  render() {
    const title = !this.props.handleTitle ? "Nueva" : "Editar ";
    //console.log(this.props.item);
    return (
      <Modal
        show={this.props.handleOpen}
        onHide={this.props.handleClose}
        dialogClassName="modal-60w"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {title} transacción{`: ${this.props.titleTransaction}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TransactionForm
            itemId={this.props.item}
            onHide={this.props.handleClose}
            periodDefault={this.props.periodDefault}
            selectedPeriod={this.props.selectedPeriod}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

export default TransactionModal;
