import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../feature/user/userSlice";
import logoPrincipal from "../img/logo_principal_branca.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const validateEmail = () => {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regexEmail.test(email);
  }

  const validatePassword = () => {
    const minCharacters = 7;
    return password.length >= minCharacters;
  };

  const handleClickLogin = () => {
    navigate('/meals');
  };

  useEffect(() => {
    if (validateEmail() && validatePassword()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  return (
    <div className="login-container">
      <img src={logoPrincipal} alt="logo branca" />
      <form className="form-container">
        <label htmlFor="input__email">
          <input
            className="input-login"
            id="input__email"
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            autoComplete="off"
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
        </label>
        <label htmlFor="input__password">
          <input
            className="input-login"
            id="input__password"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
        </label>
        <button 
          className="btn-login"
          type="button" 
          disabled={ isDisabled }
          onClick={handleClickLogin}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
