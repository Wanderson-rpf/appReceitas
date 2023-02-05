import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveLogin } from "../feature/login/loginSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import logoPrincipal from "../img/logo_principal_branca.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const dispacth = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const validateEmail = () => {
      const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      return regexEmail.test(email);
    }
  
    const validatePassword = () => {
      const minCharacters = 6;
      return password.length >= minCharacters;
    };

    if (validateEmail() && validatePassword()) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const handleClickLogin = () => {
    dispacth(saveLogin({email, password}))
    navigate('/meals');
  };

  const handleShowHidePassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

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
            type={ showPassword ? 'text' : 'password' }
            name="password"
            value={password}
            placeholder="Password"
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
          { showPassword ? (
            <AiOutlineEyeInvisible
              className="icon_password"
              onClick={ handleShowHidePassword }
            />
          ) : (
            <AiOutlineEye
              className="icon_password"
              onClick={ handleShowHidePassword }
            />
          )}
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
