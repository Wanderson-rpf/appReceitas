import React from "react";

function Register() {
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
          />
        </label>
        <label htmlFor="input__email">
          <input
            type="text"
            name="input-email"
            id="input__email"
            placeholder="email"
          />
        </label>
        <label htmlFor="input__password">
          <input
            type="text"
            name="input-password"
            id="input__password"
            placeholder="password"
          />
        </label>
      </form>
    </div>
  );
}

export default Register;
