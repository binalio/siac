import React from "react";
import Joi from "joi-browser";
import Form from "../components/common/form";
import { getSuppliers } from "../services/fakeSupplierService";
import { getBudgets } from "../services/fakeBudgetService";
import { getContract, saveContract } from "../services/fakeContractService";
import { getPeriods } from "../services/fakePeriodService";

class ContractForm extends Form {
  state = {
    data: {
      supplierId: "",
      budgetId: "",
      periodId: "",
      amount: "",
      balance: "",
      startDate: "",
      endDate: "",
      detail: "",
    },
    suppliers: [],
    periods: [],
    budgets: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    supplierId: Joi.string().required().label("Transaction"),
    budgetId: Joi.string().required().label("Transaction"),
    periodId: Joi.string().required().label("Transaction"),
    amount: Joi.number().required().min(0).max(100000).label("Number in Stock"),
    balance: Joi.number()
      .required()
      .min(0)
      .max(100000)
      .label("Number in Stock"),
    startDate: Joi.string().required().label("Date transaction"),
    endDate: Joi.string().required().label("Date transaction"),
    detail: Joi.string().required().label("Date transaction"),
  };

  componentDidMount() {
    const periods = getPeriods();
    const setPeriods = [
      ...new Map(periods.map((item) => [item.name, item])).values(),
    ];
    this.setState({ periods: setPeriods });

    const budgets = getBudgets();
    const setbudgets = [
      ...new Map(budgets.map((item) => [item.name, item])).values(),
    ];
    this.setState({ budgets: setbudgets });

    const suppliers = getSuppliers();
    const setSuppliers = [
      ...new Map(suppliers.map((item) => [item.name, item])).values(),
    ];
    this.setState({ suppliers: setSuppliers });

    const contractId = this.props.itemId;
    //const transactionId = this.props.match.params.id;
    if (contractId === "new") return;

    const contract = getContract(contractId);
    if (!contract) return this.props.history.replace("/not-found");
    //console.log(transaction.budget._id, "hello");
    console.log(contract);

    this.setState({ data: this.mapToVieModel(contract) });
  }

  mapToVieModel(contract) {
    //let currency = contract.amount;
    //let number = Number(currency.replace(/[^0-9.-]+/g, ""));
    //console.log(contract);
    return {
      _id: contract._id,
      budgetId: contract.budget._id,
      supplierId: contract.supplier._id,
      periodId: contract.budget.period._id,
      amount: contract.amount,
      balance: contract.balance,
      startDate: contract.startDate,
      endDate: contract.endDate,
      detail: contract.detail,
    };
  }

  doSubmit = () => {
    saveContract(this.state.data);
    this.props.onHide();
    //this.props.location.push("/budgets");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-md-10">
              {this.renderSelect(
                "supplierId",
                "Proveedor",
                "w-100",
                "",
                this.state.suppliers
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-3">
              {this.renderSelect(
                "periodId",
                "Periodo",
                "w-100",
                "",
                this.state.periods
              )}
            </div>
            <div className="col">
              {this.renderSelect(
                "budgetId",
                "Presupuesto",
                "w-75",
                "",
                this.state.budgets
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-4">
              {this.renderInput("startDate", "Fecha inicio", "w-100")}
            </div>
            <div className="col-md-4">
              {this.renderInput("endDate", "Fecha fin", "w-100")}
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-3">
              {this.renderInput("amount", "Monto", "w-100", "", "number")}
            </div>
            <div className="col-md-3">
              <label>IVA</label>
              <input
                className="form-control"
                type="number"
                value={parseFloat(this.state.data.amount * 0.16).toFixed(2)}
                disabled
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-3">
              <label>Total (con IVA)</label>
              <input
                className="form-control"
                type="number"
                value={parseFloat(
                  this.state.data.amount * 0.16 + this.state.data.amount
                ).toFixed(2)}
                disabled
              />
            </div>
            <div className="col-md-3">
              <label>&nbsp;</label>
              <button className="btn btn-secondary btn-block">
                <i className="fas fa-chevron-double-left"></i> Pasar saldo
              </button>
            </div>
            <div className="col-md-3">
              <label>Total (con IVA)</label>
              <input
                className="form-control"
                type="number"
                value={parseFloat(this.state.data.balance).toFixed(2)}
                disabled
              />
            </div>
          </div>

          <div className="form-row mt-3">
            <div className="col-md-10">
              {this.renderTextarea("detail", "Detalle")}
            </div>
          </div>

          <ul className="list-inline mt-2 mb-0 pt-1">
            <li className="list-inline-item">{this.renderButton("Guardar")}</li>
            <li className="list-inline-item">
              {this.renderButton("Cancelar", "white border")}
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default ContractForm;
