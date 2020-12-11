import React, { Component } from "react";
import _ from "loadsh";
import SupplierList from "./suppliersList";
import ContractModal from "./contractModal";
import SearchBox from "../components/searchBox";
import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import { Button } from "react-bootstrap";
import ContractsTable from "./contractsTable";
import TypeMediaFilter from "../components/typeMediaFilter";

import { getContracts, deleteContract } from "../services/fakeContractService";
import { getSuppliers } from "../services/fakeSupplierService";
import { getTypeMedia } from "../services/fakeTypeMediaService";

class Contracts extends Component {
  state = {
    contracts: [],
    totalContracts: [],
    suppliers: [],
    typessMedia: [],
    currentPage: 1,
    pageSize: 15,
    searchQuery: "",
    selectedSupplier: null,
    selectedTypeMedia: null,
    sortColumn: { path: "title", order: "asc" },
    isOpen: false,
    titleEdit: false,
    titleContract: "",
    idValue: "new",
  };

  componentDidMount() {
    const typesMedia = [{ _id: "0", name: "Todos" }, ...getTypeMedia()];
    this.setState({
      contracts: getContracts(),
      totalContracts: getContracts(),
      suppliers: getSuppliers(),
      typesMedia: typesMedia,
    });
  }

  handleDelete = (contract) => {
    const contracts = this.state.contracts.filter(
      (m) => m._id !== contract._id
    );
    this.setState({ contracts });

    deleteContract(contract._id);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleTypeMediaSelect = (typeMedia) => {
    //console.log(typeMedia);
    this.setState({
      selectedTypeMedia: typeMedia,
      searchQuery: "",
      currentPage: 1,
    });
  };

  handleSupplierSelect = (supplier) => {
    //console.log(budget);
    this.setState({
      selectedSupplier: supplier,
      searchQuery: "",
      currentPage: 1,
    });
  };

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      selectedSupplier: null,
      currentPage: 1,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedSupplier,
      selectedTypeMedia,
      searchQuery,
      contracts: allContracts,
      totalContracts: totalContracts,
      suppliers: allSuppliers,
      typesMedia: allTypesMedia,
    } = this.state;

    //const defaultSupplier = allSuppliers[0];

    const defaultTypeMedia = !selectedTypeMedia
      ? allTypesMedia.find((o) => o.name === "Todos")
      : selectedTypeMedia;

    const defaultSupplier =
      defaultTypeMedia.name === "Todos"
        ? allSuppliers[0]
        : allSuppliers.find((o) => o.mediaId === defaultTypeMedia._id);

    //console.log(defaultSupplier);

    let filteredSuppliers = allSuppliers;
    let filtered = allContracts;

    if (!selectedTypeMedia) filteredSuppliers = allSuppliers;
    else if (
      selectedTypeMedia &&
      selectedTypeMedia._id &&
      selectedTypeMedia.name !== "Todos"
    )
      filteredSuppliers = allSuppliers.filter(
        (b) => b.mediaId === selectedTypeMedia._id
      );

    // console.log(selectedSupplier);

    if (searchQuery)
      filtered = allContracts.filter((c) =>
        c.budget.period.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedSupplier === null)
      filtered = allContracts.filter(
        (t) => t.supplier._id === defaultSupplier._id
      );
    else
      filtered = allContracts.filter(
        (t) => t.supplier._id === selectedSupplier._id
      );

    const suppliers = _.orderBy(filteredSuppliers);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const contracts = paginate(sorted, currentPage, pageSize);

    const typeMediaDefault = selectedTypeMedia
      ? selectedTypeMedia
      : defaultTypeMedia;

    return {
      totalCount: filtered.length,
      data: contracts,
      totalContracts: totalContracts,
      list: suppliers,
      defaultSupplier: defaultSupplier,
      typeMediaDefault: typeMediaDefault,
      selectedTypeMedia: selectedTypeMedia,
    };
  };

  render() {
    const { length: count } = this.state.contracts;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>No hay transacciones en la Base de Datos.</p>;

    const {
      totalCount,
      data: contracts,
      list: suppliers,
      totalContracts: totalContracts,
      defaultSupplier,
      typeMediaDefault,
      selectedTypeMedia,
    } = this.getPageData();

    return (
      <div>
        <div className="row mt-4 mb-3">
          <div className="col-3 pr-0 d-flex">
            <h4 className="mb-0 pt-1">Proveedores</h4>
            <TypeMediaFilter
              typesMedia={this.state.typesMedia}
              typeMediaDefault={typeMediaDefault}
              selectedTypeMedia={selectedTypeMedia}
              onTypeMediaSelect={this.handleTypeMediaSelect}
            />
          </div>
          <div className="col d-flex">
            <h4 className="mb-0 pt-1">Contratos</h4>
            <ul className="list-inline ml-auto mb-0">
              <li className="list-inline-item">
                <SearchBox value={searchQuery} onChange={this.handleSearch} />
              </li>
              <li className="list-inline-item">
                <Button
                  variant="primary"
                  onClick={() => this.setState({ isOpen: true })}
                >
                  Nuevo contrato
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-body py-0">
            <div className="row">
              <div className="col-3 px-0 border-right budget-col">
                <SupplierList
                  suppliers={suppliers}
                  totalContracts={totalContracts}
                  defaultSupplier={defaultSupplier}
                  selectedItem={this.state.selectedSupplier}
                  onItemSelect={this.handleSupplierSelect}
                />
              </div>
              <div className="col">
                <ContractsTable
                  contracts={contracts}
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
        <ContractModal
          handleOpen={this.state.isOpen}
          handleTitle={this.state.titleEdit}
          titleContract={this.state.titleContract}
          item={this.state.idValue}
          handleClose={() => this.setState({ isOpen: false })}
        />
      </div>
    );
  }
}

export default Contracts;
