import React from 'react';
import Hero from '../components/ui/Hero';
import CandidateForm from '../components/forms/CandidateForm';
import SEO from '../components/ui/SEO';
import './Candidates.css';

const Candidates = () => {
    return (
        <div className="page-candidates">
            <SEO
                title="Área do Candidato | Vagas de Emprego"
                description="Cadastre seu currículo em nosso banco de talentos e confira as vagas disponíveis. Oportunidades em telecom e diversas áreas."
                keywords="emprego, vagas, cadastrar curriculo, banco de talentos, rondonia"
            />

            <Hero
                title="Sua próxima oportunidade começa aqui"
                subtitle="Cadastre seu currículo em nosso banco de talentos e conecte-se com as melhores empresas do mercado."
                className="hero-candidates"
            />

            <div className="container candidates-content">
                <section className="registration-section">
                    <div className="section-header-left">
                        <h2>Cadastre seu Currículo</h2>
                        <p>Preencha os dados abaixo para fazer parte do nosso banco de talentos.</p>
                    </div>
                    <CandidateForm />
                </section>

                <section className="vagas-section">
                    <div className="section-header-left">
                        <h2>Vagas em Aberto</h2>
                        <p>Confira as oportunidades disponíveis no momento.</p>
                    </div>

                    {/* Solides Integration Placeholder */}
                    <div className="solides-widget-placeholder">
                        <p>Carregando vagas da Solides...</p>
                        <div className="vaga-card-preview">
                            <h4>Analista de RH</h4>
                            <span>Porto Velho - RO</span>
                            <span className="badge">Pleno</span>
                        </div>
                        <div className="vaga-card-preview">
                            <h4>Técnico em Telecom</h4>
                            <span>Remoto</span>
                            <span className="badge">Técnico</span>
                        </div>

                        <button className="btn-link">Ver todas as vagas &rarr;</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Candidates;
