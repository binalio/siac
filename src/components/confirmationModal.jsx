import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class ConfirmationModal extends Component {
  state = {};

  handleConfirmAction = () => {
    this.props.onDelete(this.props.elementDelete);
  };

  handleCloseConfirmation = () => {
    this.props.confirmationClose();
  };

  render() {
    return (
      <Modal
        show={this.props.openConfirmation}
        onHide={this.props.confirmationClose}
        dialogClassName="modal-60w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmación requerida</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>{this.props.msjConfirmation}</span>
          <ul className="list-inline mt-4 mb-0 pt-1">
            <li className="list-inline-item">
              <button
                className="btn btn-primary"
                onClick={this.handleConfirmAction}
              >
                Continuar
              </button>
            </li>
            <li className="list-inline-item">
              <button
                className="btn btn-white border"
                onClick={this.handleCloseConfirmation}
              >
                Cancelar
              </button>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ConfirmationModal;
