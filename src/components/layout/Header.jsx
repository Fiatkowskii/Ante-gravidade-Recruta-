import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../ui/Button';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <Link to="/">
                        Recruta<span className="logo-accent">+</span>
                    </Link>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/" onClick={toggleMenu}>Início</Link></li>
                        <li><Link to="/servicos" onClick={toggleMenu}>Serviços</Link></li>
                        <li><Link to="/candidatos" onClick={toggleMenu}>Vagas</Link></li>
                        <li><Link to="/contato" onClick={toggleMenu}>Sobre</Link></li>
                    </ul>
                    <div className="nav-cta">
                        <Link to="/contato" onClick={toggleMenu}>
                            <Button variant="primary">Fale Conosco</Button>
                        </Link>
                    </div>
                </nav>

                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </header>
    );
};

export default Header;
