import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, linkTo, linkText = 'Saiba mais' }) => {
    return (
        <div className="service-card">
            {icon && <div className="service-icon">{icon}</div>}
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
            {linkTo && (
                <Link to={linkTo} className="service-link">
                    {linkText} &rarr;
                </Link>
            )}
        </div>
    );
};

export default ServiceCard;
