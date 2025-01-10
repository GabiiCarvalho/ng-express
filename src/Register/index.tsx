import React from 'react';

const Register: React.FC = () => {
  return (
    <div className="container-screen">
      <div className='container-group'>
      <h1>Cadastro</h1>
      <form>
        <div className="input-group">
          <label htmlFor="username">Nome Completo</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Telefone</label>
          <input type="phone" id="phone" name="phone" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="btn">Cadastrar</button>
      </form>
      <p>Já tem conta? <a href="/Login">Entrar</a></p>
    </div>
    </div>
  );
};

export default Register;
