import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './LoginContainer.css'

function LoginContainer() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3000/auth/login`, { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/app');
        } catch (error) {
            console.error(error);
            setError('El correo electrónico o la contraseña son incorrectos.');
        }
    };

    return (
        <div className='loginContainer'>
            <div className="loginFlex">
                <form onSubmit={handleSubmit}>
                    <p className='loginHeader'>Inicia sesión en tu cuenta</p>
                    <p className='emailLogin_text'>Correo Electrónico:</p>
                    <input type="email" placeholder='Ingresa tu correo electrónico' className='emailLogin' value={email} onChange={(event) => setEmail(event.target.value)} />
                    <div className='passwordContainerLogin'>
                        <p className='passwordLogin_text'>Contraseña:</p>
                        <Link className="link forgotPasswordLogin" to="/forgot">¿Olvidaste tu contraseña?</Link>
                    </div>
                    <input type="password" placeholder='Ingresa tu contraseña' className='passwordLogin' value={password} onChange={(event) => setPassword(event.target.value)} />
                    {error && <p className='loginError'>{error}</p>}
                    <button className='buttonLogin' type='submit'>Continuar</button>
                </form>
            </div>
        </div>
    )
}

export default LoginContainer;