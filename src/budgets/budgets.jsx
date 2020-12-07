import React, { Component } from "react";
import Pagination from "../components/common/pagination";
import {
  getTransactions,
  deleteTransaction,
} from "../services/fakeTransactionService";
import { paginate } from "../utils/paginate";
import { getBudgets } from "../services/fakeBudgetService";
import TransactionsTable from "./transactionsTable";
import _ from "loadsh";
import { Button } from "react-bootstrap";
import TransactionModal from "./transactionModal";
import BudgetList from "./budgetsList";
import SearchBox from "../components/searchBox";
import PeriodFilter from "../components/periodFilter";
import { getPeriods } from "../services/fakePeriodService";

class Budgets extends Component {
  state = {
    transactions: [],
    budgets: [],
    periods: [],
    currentPage: 1,
    pageSize: 15,
    searchQuery: "",
    selectedBudget: null,
    selectedPeriod: null,
    sortColumn: { path: "title", order: "asc" },
    isOpen: false,
    titleEdit: false,
    titleTransaction: "",
    idValue: "new",
  };

  componentDidMount() {
    this.setState({
      transactions: getTransactions(),
      budgets: getBudgets(),
      periods: getPeriods(),
    });
  }

  handleDelete = (transaction) => {
    const transactions = this.state.transactions.filter(
      (m) => m._id !== transaction._id
    );
    this.setState({ transactions });

    deleteTransaction(transaction._id);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlePeriodSelect = (period) => {
    //console.log(period);
    this.setState({
      selectedPeriod: period,
      selectedBudget: null,
      currentPage: 1,
    });
  };

  handleBudgetSelect = (budget) => {
    //console.log(budget);
    this.setState({ selectedBudget: budget, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedBudget: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedBudget,
      selectedPeriod,
      searchQuery,
      transactions: allTransactions,
      budgets: allBudgets,
      periods: allPeriods,
    } = this.state;

    const year = new Date().getFullYear().toString();
    const defaultPeriod = !selectedPeriod
      ? allPeriods.find((o) => o.name === year)
      : selectedPeriod;
    const defaultBudget = allBudgets.find(
      (o) => o.periodId === defaultPeriod._id
    );

    let filteredBudgets = allBudgets;
    let filtered = allTransactions;

    if (!selectedPeriod)
      filteredBudgets = allBudgets.filter(
        (b) => b.periodId === defaultPeriod._id
      );
    else if (selectedPeriod && selectedPeriod._id)
      filteredBudgets = allBudgets.filter(
        (b) => b.periodId === selectedPeriod._id
      );

    if (searchQuery)
      filtered = allTransactions.filter((t) =>
        t.typeTransaction.name
          .toLowerCase()
          .startsWith(searchQuery.toLowerCase())
      );
    else if (selectedBudget === null)
      filtered = allTransactions.filter(
        (t) => t.budget._id === defaultBudget._id
      );
    else
      filtered = allTransactions.filter(
        (t) => t.budget._id === selectedBudget._id
      );

    const budgets = _.orderBy(filteredBudgets);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const transactions = paginate(sorted, currentPage, pageSize);

    const periodDefault = selectedPeriod ? selectedPeriod : defaultPeriod;

    return {
      totalCount: filtered.length,
      data: transactions,
      list: budgets,
      defaultBudget: defaultBudget,
      periodDefault: periodDefault,
      selectedPeriod: selectedPeriod,
    };
  };

  render() {
    const { length: count } = this.state.transactions;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>No hay transacciones en la Base de Datos.</p>;

    const {
      totalCount,
      data: transactions,
      list: budgets,
      defaultBudget,
      periodDefault,
      selectedPeriod,
    } = this.getPageData();

    return (
      <div>
        <div className="row mt-4 mb-3">
          <div className="col-3 pr-0 d-flex">
            <h4 className="mb-0 pt-1">Presupuestos</h4>
            <PeriodFilter
              periods={this.state.periods}
              periodDefault={periodDefault}
              selectedPeriod={selectedPeriod}
              onPeriodSelect={this.handlePeriodSelect}
            />
          </div>
          <div className="col d-flex">
            <h4 className="mb-0 pt-1">Transacciones</h4>
            <ul className="list-inline ml-auto mb-0">
              <li className="list-inline-item">
                <SearchBox value={searchQuery} onChange={this.handleSearch} />
              </li>
              <li className="list-inline-item">
                <Button
                  variant="primary"
                  onClick={() => this.setState({ isOpen: true })}
                >
                  Nueva transacción
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-body py-0">
            <div className="row">
              <div className="col-3 px-0 border-right budget-col">
                <BudgetList
                  budgets={budgets}
                  defaultBudget={defaultBudget}
                  selectedItem={this.state.selectedBudget}
                  onItemSelect={this.handleBudgetSelect}
                />
              </div>
              <div className="col">
                <TransactionsTable
                  transactions={transactions}
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
        <TransactionModal
          handleOpen={this.state.isOpen}
          handleTitle={this.state.titleEdit}
          titleTransaction={this.state.titleTransaction}
          item={this.state.idValue}
          handleClose={() => this.setState({ isOpen: false })}
        />
      </div>
    );
  }
}

export default Budgets;
