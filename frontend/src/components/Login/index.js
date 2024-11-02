import './Login.componete.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const redirecionar = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/login', {
        email: email,
        password: password,
      });
       
      // A resposta provavelmente já contém o usuário diretamente
      const usuario = response.data;
      
      // Verifica se o objeto do usuário foi retornado corretamente
      if (usuario && usuario.id && usuario.api_token) {
        setSuccess(usuario.message || 'Login realizado com sucesso!');
        setError('');
        // Armazenar o ID do usuário e nome no localStorage
        
        localStorage.setItem('userId', usuario.id);
        localStorage.setItem('userToken', usuario.api_token);

        // Verifica se a navegação está sendo alcançada
        console.log('Redirecionando para /index');
        redirecionar('/index');


      } else {
        setError('Falha no login. Dados insuficientes.');
        setSuccess('');
      }
    } catch (err) {
      setError('Erro ao tentar fazer login.');
      setSuccess('');
    }
  };
 
    return (
        <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Area de Acesso</h2>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <div className="form-group">
        <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Digite seu email"
          />
        </div>

        <div className="form-group">
        <label htmlFor="senha">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Digite sua senha"
          />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
    
    )
}

export default Login;