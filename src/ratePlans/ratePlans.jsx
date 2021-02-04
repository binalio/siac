import React, {Component} from 'react';

class RatePlans extends Component {


  render() {
    return (
        <div>
          <div className="row mt-4 mb-3">
            <div className="col-3 pr-0 d-flex">
              <h4 className="mb-0 pt-1">Proveedores</h4>
            </div>
            <div className="col d-flex">
              <h4 className="mb-0 pt-1">Contratos</h4>
              <ul className="list-inline ml-auto mb-0">
                <li className="list-inline-item">
                </li>
                <li className="list-inline-item">
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-body py-0">
              <div className="row">
                <div className="col-3 px-0 border-right budget-col">
                </div>
                <div className="col">
                  <div className="d-flex">
                    <p className="mb-0 pt-2">
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default RatePlans;
