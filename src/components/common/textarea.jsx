import React from "react";

const Textarea = ({ name, label, error, placeholder, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        autoFocus
        {...rest}
        name={name}
        id={name}
        className="form-control"
        placeholder={placeholder}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Textarea;
