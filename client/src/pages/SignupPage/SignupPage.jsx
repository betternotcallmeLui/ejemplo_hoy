import { Link } from 'react-router-dom'

import SignupContainer from '../../components/SignupContainer/SignupContainer'

import './SignupPage.css'

function Signup() {
    return (
        <>
            <header className='signupPage_header'>
                <div className="signupPage_headerContainer">
                    <div className="signupPage_headerContent">
                        <Link className='link signupPage_headerLogo' to="/">T-Chain</Link>
                        <Link to="/" className='link'><box-icon name='arrow-back'></box-icon></Link>
                    </div>
                </div>
            </header>
            <div className='signupPage'>
                <SignupContainer />
            </div>
            <div class="custom-shape-divider-bottom-1677356672">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
                </svg>
            </div>
        </>
    )
}

export default Signup