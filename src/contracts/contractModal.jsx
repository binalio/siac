import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import ContractForm from "./contractForm";

class ContractModal extends Component {
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
          <ContractForm
            itemId={this.props.item}
            onHide={this.props.handleClose}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

export default ContractModal;
