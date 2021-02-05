import React from "react";
import Form from "../components//common/form";
import Joi from "joi-browser";

import { Link } from "react-router-dom";
import "../assets/css/login.css";
import logo from "../assets/img/logo.svg";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

// TODO - Agregar patron redex para login con firebase

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // const username = this.username.current.value;
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <div className="row justify-content-md-center">
          <div className="col-4 mt-5">
            <img src={logo} className="logo mb-5" alt="Logo" />
            <h4 className="mb-1 text-center">
              ¡Te damos la bienvenida de nuevo!
            </h4>
            <p className="mb-4 text-center">
              Inicia sesión para estar al día de tu entorno profesional.
            </p>
            <form onSubmit={this.handleSubmit} className="form-label-hide">
              {this.renderInput(
                "username",
                "",
                "form-control-lg",
                "",
                "",
                "Correo electrónico"
              )}
              {this.renderInput(
                "password",
                "",
                "form-control-lg",
                "",
                "password",
                "Contraseña"
              )}
              {/* {this.renderButton("Login")} */}
              <Link
                className="btn btn-lg btn-block btn-primary"
                to="/dashboard"
              >
                Ingresar
              </Link>
              <Link
                className="btn btn-block btn-link mt-4"
                to="/recoverPassword"
              >
                ¿Has olvidado tu contraseña?
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
