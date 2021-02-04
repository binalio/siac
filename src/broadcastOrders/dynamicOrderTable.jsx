import React, { Component } from "react";

class DynamicOrderTable extends Component {
  state = {};
  render() {
    return (
      <div className="dynamic-table border">
        <table className="table table-orders">
          <thead>
            <tr>
              <th colSpan="6"></th>
              <th colSpan="8">01 Ene, 2020 a 8 Ene, 2020</th>
              <th colSpan="3"></th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th>CAMPAÑA</th>
              <th>SECCIÓN</th>
              <th>PRODUCTO</th>
              <th>TIEMPO</th>
              <th>
                <small>VIE</small>
                <h5>01</h5>
              </th>
              <th>
                <small>SÁB</small>
                <h5>02</h5>
              </th>
              <th>
                <small>DOM</small>
                <h5>03</h5>
              </th>
              <th>
                <small>LUN</small>
                <h5>04</h5>
              </th>
              <th>
                <small>MAR</small>
                <h5>05</h5>
              </th>
              <th>
                <small>MIE</small>
                <h5>06</h5>
              </th>
              <th>
                <small>JUE</small>
                <h5>07</h5>
              </th>
              <th>
                <small>VIE</small>
                <h5>08</h5>
              </th>
              <th>TOTAL</th>
              <th>
                <select className="form-control" style={{ width: 110 + "px" }}>
                  <option>Tarifa 2019</option>
                </select>
              </th>
              <th>
                <small>IMPORTE</small>
                <h5>(SIN IVA)</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ verticalAlign: "middle" }}>
                <a href="#/">
                  <i class="far fa-trash-alt fa-lg"></i>
                </a>
              </td>
              <td style={{ verticalAlign: "middle" }}>
                <a href="#/">
                  <i class="far fa-clone fa-lg"></i>
                </a>
              </td>
              <td>
                <select className="form-control" style={{ width: 160 + "px" }}>
                  <option>Informe de gobierno</option>
                  <option>Predial</option>
                </select>
              </td>
              <td>
                <select className="form-control" style={{ width: 160 + "px" }}>
                  <option>Informe de gobierno</option>
                  <option>Predial</option>
                </select>
              </td>
              <td>
                <select className="form-control" style={{ width: 160 + "px" }}>
                  <option>Informe de gobierno</option>
                  <option>Predial</option>
                </select>
              </td>
              <td>
                <ul
                  className="list-inline d-flex"
                  style={{ width: 200 + "px" }}
                >
                  <li className="list-inline-item">
                    <input type="text" className="form-control" />
                  </li>
                  <li className="list-inline-item m-auto">
                    <span className="mr-2">A</span>
                  </li>
                  <li className="list-inline-item">
                    <input type="text" className="form-control" />
                  </li>
                </ul>
              </td>
              <td>
                <input type="text" className="form-control" placeholder="0" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="0" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="0" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="0" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="0" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="0" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="0" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="0" />
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DynamicOrderTable;
