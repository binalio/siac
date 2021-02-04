import React from "react";

const SupplierList = ({
  suppliers,
  totalContracts,
  defaultSupplier,
  valueBusinessName,
  valueId,
  selectedItem,
  onItemSelect,
  getNumberContracts,
}) => {
  getNumberContracts = (supplierId) => {
    const numContracts = totalContracts.filter(
      (o) => o.supplier._id === supplierId
    );
    return Object.keys(numContracts).length;
  };

  return (
    <ul className="list-group list-group-flush budget-list">
      {suppliers.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueId]}
          className={
            item === selectedItem ||
            (item[valueId] === defaultSupplier._id && selectedItem === null)
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          <h6 className="mb-0">{item[valueBusinessName]}</h6>
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <p className="text-muted mb-0">
                {getNumberContracts(item[valueId])} de contratos
              </p>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

SupplierList.defaultProps = {
  valueBusinessName: "name",
  valueTradeName: "tradename",
  valueTypeMedia: "media.type",
  valueId: "_id",
};

export default SupplierList;
