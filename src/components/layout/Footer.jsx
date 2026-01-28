import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h2>Recruta<span className="logo-accent">+</span></h2>
                    <p>Assessoria em RH & Recrutamento</p>
                </div>
                <div className="footer-links">
                    <p>&copy; {new Date().getFullYear()} Recruta+. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
