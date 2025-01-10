import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="container-screen">
      <div className="container-group">
      <h1>Login</h1>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="btn">Entrar</button>
      </form>
      <p>Não tem conta? <a href="/Register">Cadastre-se</a></p>
    </div>
    </div>
  );
};

export default Login;
