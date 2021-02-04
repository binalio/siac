import React from "react";

const OnTypeMediaFilter = ({
  allTypeMedia,
  onTypeMediaSelect,
  valueName,
  valueId,
}) => {
  return (
    <div className="form-group">
      <label htmlFor="mediaSelected">Tipo de medio</label>
      <select
        name="mediaSelected"
        className="form-control"
        onChange={(e) =>
          onTypeMediaSelect({
            _id: e.target.children[e.target.selectedIndex].id,
            name: e.target.value,
          })
        }
      >
        <option value="">Seleccionar...</option>
        {allTypeMedia.map((item) => (
          <option
            key={item[valueId]}
            id={item[valueId]}
            value={item[valueName]}
          >
            {item[valueName]}
          </option>
        ))}
      </select>
    </div>
  );
};

OnTypeMediaFilter.defaultProps = {
  valueName: "name",
  valueId: "_id",
};

export default OnTypeMediaFilter;
