import React from "react";

const TypeMediaFilter = ({
  typesMedia,
  selectedTypeMedia,
  typeMediaDefault,
  valueId,
  valueName,
  onTypeMediaSelect,
}) => {
  return (
    <select
      className="form-control ml-auto"
      value={selectedTypeMedia ? selectedTypeMedia.name : typeMediaDefault.name}
      style={{ width: "90px" }}
      onChange={(e) =>
        onTypeMediaSelect({
          _id: e.target.children[e.target.selectedIndex].id,
          name: e.target.value,
        })
      }
    >
      {typesMedia.map((item) => (
        <option key={item[valueId]} id={item[valueId]} value={item[valueName]}>
          {item[valueName]}
        </option>
      ))}
    </select>
  );
};

TypeMediaFilter.defaultProps = {
  valueName: "name",
  valueId: "_id",
};

export default TypeMediaFilter;
