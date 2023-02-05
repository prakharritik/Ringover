import React, { useState } from "react";
import "./Register.scss";

const Register = ({ type, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, name });
  };

  return (
    <div className="Register">
      <img src="https://i.ibb.co/mq2yGQh/perfil.png" />
      <form>
        <div>
          <input
            className="name"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="email"
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="submit" type="submit" onClick={handleSubmit}>
            {type}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
