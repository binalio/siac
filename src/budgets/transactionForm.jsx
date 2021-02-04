import React from "react";
import Joi from "joi-browser";
import Form from "../components/common/form";
import {
  getTransaction,
  saveTransaction,
} from "../services/fakeTransactionService";
import { getBudgets } from "../services/fakeBudgetService";
import { getTypeTransactions } from "../services/fakeTypeTransactionService";

class TransactionForm extends Form {
  state = {
    data: {
      typeTransactionId: "",
      budgetId: "",
      amount: "",
      dateTransaction: "",
      detail: "",
    },
    typeTransactions: [],
    budgets: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    typeTransactionId: Joi.string().required().label("Transaction"),
    budgetId: Joi.string().required().label("Budget"),
    amount: Joi.number().required().min(0).max(100000).label("Number in Stock"),
    dateTransaction: Joi.string().required().label("Date transaction"),
    detail: Joi.string().required().label("Date transaction"),
  };

  componentDidMount() {
    const typeTransactions = getTypeTransactions();
    const setTypeTransactions = [
      ...new Map(typeTransactions.map((item) => [item.name, item])).values(),
    ];
    this.setState({ typeTransactions: setTypeTransactions });

    const period = !this.props.periodDefault
      ? this.props.selectedPeriod
      : this.props.periodDefault;

    let budgets = getBudgets();
    budgets = budgets.filter((b) => b.periodId === period._id);

    //console.log(period._id);

    const setbudgets = [
      ...new Map(budgets.map((item) => [item.name, item])).values(),
    ];

    this.setState({ budgets: setbudgets });

    const transactionId = this.props.itemId;
    //const transactionId = this.props.match.params.id;
    if (transactionId === "new") return;

    const transaction = getTransaction(transactionId);
    if (!transaction) return this.props.history.replace("/not-found");
    //console.log(transaction.budget._id, "hello");

    this.setState({ data: this.mapToVieModel(transaction) });
  }

  mapToVieModel(transaction) {
    let currency = transaction.amount;
    let number = Number(currency.replace(/[^0-9.-]+/g, ""));
    //console.log(number);
    return {
      _id: Joi.string(),
      typeTransactionId: transaction.typeTransaction._id,
      budgetId: transaction.budget._id,
      amount: number,
      dateTransaction: transaction.dateTransaction,
      detail: transaction.detail,
    };
  }

  doSubmit = () => {
    saveTransaction(this.state.data);
    this.props.onHide();
    //this.props.location.push("/budgets");
  };

  render() {
    return (
      <div>
        {/* <h1>Transaction {props.item}</h1> */}
        <form onSubmit={this.handleSubmit}>
          {this.renderSelect(
            "typeTransactionId",
            "Tipo de movimiento",
            "w-50",
            "",
            this.state.typeTransactions
          )}
          {this.renderSelect(
            "budgetId",
            "Presupuesto",
            "w-50",
            "",
            this.state.budgets
          )}
          {this.renderInput("amount", "Monto", "w-25", "", "number")}
          {this.renderInput("dateTransaction", "Fecha", "w-25")}
          {this.renderTextarea("detail", "Detalle")}
          <ul className="list-inline mt-4 mb-0 pt-1">
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

export default TransactionForm;
