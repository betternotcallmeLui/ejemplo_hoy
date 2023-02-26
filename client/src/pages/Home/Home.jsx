import { Link } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './Home.css'

function Home() {
    return (
        <div className='mainExample'>
            <Header />
            <main className='mainContent'>
                <div className="principalContent">
                    <div className="principalContent_text">
                        <header className='principalContent_textHeader'>Real tickets, real fans</header>
                        <main className='principalContent_textContent'>
                            T-Chain is a decentralized ticketing platform that allows event organizers to create and sell tickets on the blockchain.
                        </main>
                        <Link className='link getStarted' to="/signup">Get Started</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home