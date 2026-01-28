import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import Hero from '../components/ui/Hero';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';
import SEO from '../components/ui/SEO';
import { FaSearch, FaUserTie, FaChartLine, FaHandshake, FaFileContract, FaSitemap } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    // Scroll reveal variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 100 }, // More dramatic entry
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className="page-home">
            <SEO
                title="Consultoria em RH e Recrutamento | Especialistas em Telecom"
                description="Soluções completas em RH: recrutamento e seleção, assessment, hunting executivo e consultoria. Especialistas no setor de telecom com atendimento em todo Brasil."
                keywords="consultoria rh, recrutamento, seleção, telecom, assessment, rondonia"
            />

            {/* Hero Section */}
            <Hero
                title="O talento certo para sua empresa crescer"
                subtitle="Especialistas em RH com experiência consolidada no setor de telecomunicações. Atendemos todo o Brasil com metodologia própria de assessment."
                actions={
                    <>
                        <Link to="/contato">
                            <Button variant="primary">Solicitar Orçamento</Button>
                        </Link>
                        <Link to="/servicos">
                            <Button variant="secondary">Conheça Nossos Serviços</Button>
                        </Link>
                    </>
                }
            />

            {/* Services Section */}
            <motion.section
                className="section section-services"
                id="servicos"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <div className="container">
                    <div className="section-header">
                        <h2>Nossos Serviços</h2>
                        <p>Soluções completas para gestão de pessoas e negócios.</p>
                    </div>

                    <div className="services-grid">
                        <ServiceCard
                            icon={<FaSearch />}
                            title="Recrutamento e Seleção"
                            description="Processo estruturado que combina análise comportamental e técnica para encontrar o fit ideal."
                            linkTo="/servicos"
                        />
                        <ServiceCard
                            icon={<FaUserTie />}
                            title="Assessment"
                            description="Avaliação psicológica e comportamental para promoções, liderança e contratações estratégicas."
                            linkTo="/servicos"
                        />
                        <ServiceCard
                            icon={<FaChartLine />}
                            title="Hunting Executivo"
                            description="Busca ativa de profissionais de alta performance para posições de liderança e especialistas."
                            linkTo="/servicos"
                        />
                        <ServiceCard
                            icon={<FaHandshake />}
                            title="Treinamento e Desenvolvimento"
                            description="Programas customizados para capacitação de equipes e desenvolvimento de lideranças."
                            linkTo="/servicos"
                        />
                        <ServiceCard
                            icon={<FaFileContract />}
                            title="Consultoria em RH"
                            description="Estruturação de políticas, cargos e salários, pormenorização e adequação à LGPD."
                            linkTo="/servicos"
                        />
                        <ServiceCard
                            icon={<FaSitemap />}
                            title="Mapeamento de Processos"
                            description="Análise e otimização de fluxos de trabalho para aumentar a eficiência organizacional."
                            linkTo="/servicos"
                        />
                    </div>
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section
                className="section section-about bg-light"
                id="sobre"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container about-container">
                    <div className="about-content">
                        <h2>Sobre a Recruta+</h2>
                        <p>
                            Nascemos da experiência prática em telecomunicações, entendendo a urgência e a especificidade
                            que o setor exige. Com sede em Rondônia e atuação nacional, unimos tecnologia e humanização.
                        </p>
                        <p>
                            Nosso compromisso é conectar as pessoas certas aos lugares certos, transformando
                            cada contratação em uma vantagem competitiva para o seu negócio.
                        </p>
                        <Link to="/contato">
                            <Button variant="outline">Saiba Mais Sobre Nós</Button>
                        </Link>
                    </div>
                    <motion.div
                        className="about-image"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Equipe reunida" />
                    </motion.div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="section section-cta"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={sectionVariants}
            >
                <div className="container cta-grid">
                    <motion.div className="cta-box business" whileHover={{ y: -5 }}>
                        <h3>Para Empresas</h3>
                        <p>Precisa contratar ou estruturar seu RH?</p>
                        <Link to="/contato">
                            <Button variant="primary">Fale com um Especialista</Button>
                        </Link>
                    </motion.div>
                    <motion.div className="cta-box candidate" whileHover={{ y: -5 }}>
                        <h3>Para Candidatos</h3>
                        <p>Busca uma nova oportunidade profissional?</p>
                        <Link to="/candidatos">
                            <Button variant="secondary">Cadastre seu Currículo</Button>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;
