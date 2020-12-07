import React from "react";
import Form from "../components/common/form";
import Joi from "joi-browser";

import { Link } from "react-router-dom";

import logo from "../assets/img/logo.svg";

class RecoverPassword extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
  };

  doSubmit = () => {
    // const username = this.username.current.value;
    console.log("submitted");
  };

  render() {
    return (
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-4 mt-5">
            <img src={logo} className="logo mb-5" alt="Logo" />
            <h4 className="mb-1 text-center">Recuperar tu contraseña</h4>
            <p className="mb-4 text-center">
              Ingresa tu correo para que recibas indicaciones para recuperar tu
              contraseña.
            </p>
            <form onSubmit={this.handleSubmit} className="form-label-hide">
              {this.renderInput(
                "username",
                "Username",
                "form-control-lg",
                "",
                "",
                "Correo electrónico"
              )}
              {/* {this.renderButton("Login")} */}
              <Link
                className="btn btn-lg btn-block btn-primary mb-4"
                to="/login"
              >
                Recuperar contraseña
              </Link>
              <Link className="btn btn-block btn-link" to="/login">
                Regresar a iniciar sesión
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RecoverPassword;
