import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "../feature/user/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispacth = useDispatch();

  const handleClickLogin = () => {
    dispacth(saveUser({ email, password }))
  };

  return (
    <div>
      <form>
        <label htmlFor="input__email">
          Email
          <input
            id="input__email"
            type="text"
            name="email"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
        </label>
        <label htmlFor="input__password">
          Senha
          <input
            id="input__password"
            type="password"
            name="password"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
        </label>
        <button type="button" onClick={ handleClickLogin }>
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
