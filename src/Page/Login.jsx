import { useState } from "react";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Page Login</h1>
    </div>  
  );
}

export default Login;
