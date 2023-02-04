import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../feature/user/userSlice";
import logoPrincipal from "../img/logo_principal_branca.png";
import { getDataLocalStorage, saveDataLocalStorage } from "../services/localStorage";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const dispacth = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const validateName = () => {
      if (!name) {
        return false;
      } else {
        return true;
      }
    }

    const validateEmail = () => {
      const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return regexEmail.test(email);
    };
  
    const validatePassword = () => {
      const minCharacters = 6;
      return password.length >= minCharacters;
    };

    if (validateName() && validateEmail() && validatePassword()) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  
  }, [name, email, password])

  const handleCrickRegister = () => {
    const registerUserData = getDataLocalStorage("registerUser");
    registerUserData.push({ name, email, password });
    dispacth(saveUser({ name, email, password }));
    saveDataLocalStorage("registerUser", registerUserData)
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
            type="password"
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
          disabled={ isDisable }
          onClick={handleCrickRegister}
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Register;
