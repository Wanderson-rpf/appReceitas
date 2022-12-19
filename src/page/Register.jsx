import React, { useState } from "react";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Register</h1>
      <form>
        <label htmlFor="input__password">
          <input
            type="text"
            name="input-name"
            id="input__name"
            placeholder="Name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="input__email">
          <input
            type="text"
            name="input-email"
            id="input__email"
            placeholder="email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="input__password">
          <input
            type="text"
            name="input-password"
            id="input__password"
            placeholder="password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
      </form>
    </div>
  );
}

export default Register;
