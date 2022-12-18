import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "../feature/user/userSlice";
import logoPrincipal from "../img/logo_principal_branca.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispacth = useDispatch();

  const handleClickLogin = () => {
    dispacth(saveUser({ email, password }));
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
          onClick={handleClickLogin}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
