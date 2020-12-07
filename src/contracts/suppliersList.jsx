import React from "react";

const SupplierList = ({
  budgets,
  defaultBudget,
  valueName,
  valueId,
  valueIvaInitialBalance,
  valueCurrentBalance,
  selectedItem,
  onItemSelect,
}) => {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  //const vae = budgets.find((o) => o._id === defaultBudget._id);
  //console.log(budgets);
  //console.log(defaultBudget);

  return (
    <ul className="list-group list-group-flush budget-list">
      {budgets.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueId]}
          className={
            item === selectedItem ||
            (item[valueId] === defaultBudget._id && selectedItem === null)
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          <h6>{item[valueName]}</h6>
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <p className="text-muted mb-0">Saldo inicial:</p>
            </li>
            <li className="list-inline-item">
              {formatter.format(item[valueIvaInitialBalance])}
            </li>
          </ul>
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <p className="text-muted mb-0">Saldo actual:</p>
            </li>
            <li className="list-inline-item">
              {formatter.format(item[valueCurrentBalance])}
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

SupplierList.defaultProps = {
  valueName: "name",
  valueId: "_id",
  valuePeriod: "period",
  valueIvaInitialBalance: "ivaInitialBalance",
  valueCurrentBalance: "currentBalance",
};

export default SupplierList;
