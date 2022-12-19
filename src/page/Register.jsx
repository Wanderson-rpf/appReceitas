import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../feature/user/userSlice";
import logoPrincipal from "../img/logo_principal_branca.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const handleCrickRegister = () => {
    dispacth(saveUser({ name, email, password }));
    navigate('/login');
  };

  return (
    <div className="login-container">
      <img src={logoPrincipal} alt="Logo branca" />
      <form className="form-container">
        <label htmlFor="input__password">
          <input
            className="input-login"
            type="text"
            name="input-name"
            id="input__name"
            placeholder="Name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label htmlFor="input__email">
          <input
            className="input-login"
            type="text"
            name="input-email"
            id="input__email"
            placeholder="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label htmlFor="input__password">
          <input
            className="input-login"
            type="text"
            name="input-password"
            id="input__password"
            placeholder="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <button
          type="button"
          className="btn-login"
          onClick={handleCrickRegister}
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Register;
