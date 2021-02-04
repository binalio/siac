import React from "react";
import Form from "../components/common/form";
import { getTypeMedia } from "../services/fakeTypeMediaService";
import { getSuppliers } from "../services/fakeSupplierService";
import SupplierFilter from "./OnTypeMediaFilter";
import DynamicOrderTable from "./dynamicOrderTable";

class OrderForm extends Form {
  state = {
    data: {
      dateStart: "",
      dateEnd: "",
    },
    allTypeMedia: [],
    suppliers: [],
    errors: {},
  };

  schema = {};

  handleTypeMediaSelect = (selectedTypeMedia) => {
    this.setState({
      selectedTypeMedia: selectedTypeMedia,
    });

    let suppliers = getSuppliers();
    suppliers = suppliers.filter((s) => s.mediaId === selectedTypeMedia._id);
    //   console.log(suppliers);

    this.setState({
      suppliers: suppliers,
    });
  };

  componentDidMount() {
    const allTypeMedia = getTypeMedia();
    const setTypeMedia = [
      ...new Map(allTypeMedia.map((item) => [item.name, item])).values(),
    ];
    this.setState({ allTypeMedia: setTypeMedia });

    // const suppliers = getSuppliers();
    // const setSupplier = [
    //   ...new Map(suppliers.map((item) => [item.name, item])).values(),
    // ];
    // this.setState({ suppliers: setSupplier });

    // const selectedTypeMedia = this.state.selectedTypeMedia;
    //console.log(selectedTypeMedia);
    //   ? this.props.selectedPeriod
    //   : this.props.periodDefault;

    // let suppliers = getSuppliers();
    //   suppliers = suppliers.filter((s) => s.mediaId === selectedMedia
    //       ._id);
    // console.log(suppliers);

    // const setbudgets = [
    //   ...new Map(budgets.map((item) => [item.name, item])).values(),
    // ];

    // this.setState({ budgets: setbudgets });

    // const transactionId = this.props.itemId;
    // //const transactionId = this.props.match.params.id;
    // if (transactionId === "new") return;

    // const transaction = getTransaction(transactionId);
    // if (!transaction) return this.props.history.replace("/not-found");
    // //console.log(transaction.budget._id, "hello");

    // this.setState({ data: this.mapToVieModel(transaction) });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-4 border-top border-left border-bottom pt-4">
            <div className="form-row">
              <div className="col">
                <SupplierFilter
                  allTypeMedia={this.state.allTypeMedia}
                  onTypeMediaSelect={this.handleTypeMediaSelect}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                {this.renderSelect(
                  "supplierId",
                  "Proveedores",
                  "",
                  "",
                  this.state.suppliers
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6">
                {this.renderInput("startDate", "Fecha inicio", "w-100")}
              </div>
              <div className="col-md-6">
                {this.renderInput("endDate", "Fecha fin", "w-100")}
              </div>
            </div>
            <ul className="list-inline mt-3 mb-4 pt-1">
              <li className="list-inline-item">
                {this.renderButton("Guardar")}
              </li>
              <li className="list-inline-item">
                {this.renderButton("Cancelar", "white border")}
              </li>
            </ul>
          </div>
          <div className="col px-0">
            <DynamicOrderTable />
          </div>
        </div>
      </form>
    );
  }
}

export default OrderForm;
