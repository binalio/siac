import React from "react";

const PeriodFilter = ({
  periods,
  selectedPeriod,
  periodDefault,
  valueId,
  valueName,
  onPeriodSelect,
}) => {
  return (
    <select
      className="form-control ml-auto"
      value={selectedPeriod ? selectedPeriod.name : periodDefault.name}
      style={{ width: "80px" }}
      onChange={(e) =>
        onPeriodSelect({
          _id: e.target.children[e.target.selectedIndex].id,
          name: e.target.value,
        })
      }
    >
      {periods.map((item) => (
        <option key={item[valueId]} id={item[valueId]} value={item[valueName]}>
          {item[valueName]}
        </option>
      ))}
    </select>
  );
};

PeriodFilter.defaultProps = {
  valueName: "name",
  valueId: "_id",
};

export default PeriodFilter;
