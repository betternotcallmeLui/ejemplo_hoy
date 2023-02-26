import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
    return (
        <header className='homeHeader'>
            <div className="header">
                <div className="header_container">
                    <p className='header_logo'>T-Chain</p>
                    <div className="header_links">
                        <Link className='link header_link'>Product</Link>
                        <Link className='link header_link'>Product</Link>
                        <Link className='link header_link'>Product</Link>
                    </div>
                    <div className="header_buttons">
                        <Link className='link header_button login' to="/login">Iniciar Sesión</Link>
                        <Link className='link header_button signup' to="signup">Registrarse</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;