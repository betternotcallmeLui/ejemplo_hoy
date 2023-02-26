import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import './SignupContainer.css'

function SignupContainer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:3000/auth/register', { name, email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/app');
        } catch (error) {
            console.error(error);
            setError('Ocurrió un error al crear la cuenta. Inténtalo de nuevo más tarde.');
        }
    };
    return (
        <div className='SignupContainer'>
            <div className="SignupFlex">
                <p className='SignupHeader'>Crea tu cuenta de T-Chain</p>
                <form onSubmit={handleSubmit}>
                    <p className='nameSignup_text'>Nombre completo:</p>
                    <input type="text" placeholder='Ingresa tu nombre completo' className='nameSignup' value={name} onChange={(event) => setName(event.target.value)} />
                    <p className='emailSignup_text'>Correo electrónico:</p>
                    <input type="email" placeholder='Ingresa tu correo electrónico' className='emailSignup' value={email} onChange={(event) => setEmail(event.target.value)} />
                    <p className='passwordSignup_text'>Contraseña:</p>
                    <input type="password" placeholder='Ingresa tu contraseña' className='passwordSignup' value={password} onChange={(event) => setPassword(event.target.value)} />
                    {error && <p className='signupError'>{error}</p>}
                    <button className='buttonSignup' type='submit'>Continuar</button>
                </form>
            </div>
        </div>
    )
}

export default SignupContainer;