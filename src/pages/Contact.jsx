import React from 'react';
import Hero from '../components/ui/Hero';
import ContactForm from '../components/forms/ContactForm';
import SEO from '../components/ui/SEO';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="page-contact">
            <SEO
                title="Fale Conosco | Orçamento"
                description="Entre em contato com a Recruta+ para solicitar um orçamento de recrutamento, assessment ou consultoria em RH."
            />

            <Hero
                title="Fale com a Recruta+"
                subtitle="Estamos prontos para entender sua necessidade e oferecer a melhor solução em RH."
                className="hero-contact"
            />

            <div className="container contact-container">
                <div className="contact-info">
                    <h2>Entre em Contato</h2>
                    <p>Utilize o formulário ou nossos canais de atendimento direto.</p>

                    <div className="info-item">
                        <FaWhatsapp className="info-icon" />
                        <div>
                            <h3>WhatsApp</h3>
                            <p>(69) 99999-9999</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FaEnvelope className="info-icon" />
                        <div>
                            <h3>E-mail</h3>
                            <p>contato@recrutamais.com.br</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <div>
                            <h3>Localização</h3>
                            <p>Porto Velho - RO<br />Atendimento em todo o Brasil</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;
