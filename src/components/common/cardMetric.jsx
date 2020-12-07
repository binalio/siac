import React from "react";

const CardMetric = ({ title, balance, detail, ico }) => {
  return (
    <div className="card rounded-lg">
      <div className="card-body">
        <div className="media">
          <div className="media-body">
            <h4 className="mt-0 mb-1 text-muted">{title}</h4>
            <h1>{balance}</h1>
            <h6>
              <i className="fas fa-caret-down"></i> {detail}
            </h6>
          </div>
          <img src={ico} className="align-self-center ml-3" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default CardMetric;
