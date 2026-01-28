import React from 'react';
import Hero from '../components/ui/Hero';
import SEO from '../components/ui/SEO';
import { FaSearch, FaUserTie, FaChartLine, FaHandshake, FaFileContract, FaSitemap } from 'react-icons/fa';
import './Services.css';

const servicesData = [
    {
        id: 'recrutamento',
        title: 'Recrutamento e Seleção',
        icon: <FaSearch />,
        description: 'Encontramos os profissionais ideais para sua empresa através de um processo estruturado que combina análise de perfil comportamental, avaliação técnica e fit cultural. Nossa metodologia reduz o turnover e acelera a produtividade dos novos colaboradores.'
    },
    {
        id: 'assessment',
        title: 'Assessment e Avaliação Psicológica',
        icon: <FaUserTie />,
        description: 'Utilizamos ferramentas validadas cientificamente como HTP, Escalas Comrey e PROFILER para avaliar competências, potencial de liderança e adequação ao cargo. Ideal para promoções internas, desenvolvimento de líderes e tomada de decisão em contratações estratégicas.'
    },
    {
        id: 'hunting',
        title: 'Hunting Executivo',
        icon: <FaChartLine />,
        description: 'Buscamos ativamente profissionais de alta performance no mercado para posições estratégicas e de liderança. Nosso processo discreto e consultivo garante acesso a talentos que não estão em busca ativa, mas são perfeitos para sua organização.'
    },
    {
        id: 'treinamento',
        title: 'Treinamento e Desenvolvimento',
        icon: <FaHandshake />,
        description: 'Desenvolvemos programas customizados de capacitação para equipes e lideranças, desde onboarding estruturado até trilhas de desenvolvimento de carreira. Transformamos conhecimento em resultados mensuráveis para sua empresa.'
    },
    {
        id: 'consultoria',
        title: 'Consultoria em Políticas de RH',
        icon: <FaFileContract />,
        description: 'Estruturamos e documentamos suas políticas de recursos humanos: cargos e salários, avaliação de desempenho, planos de carreira, regulamentos internos e adequação à LGPD. Compliance e boas práticas para sua empresa crescer com segurança.'
    },
    {
        id: 'mapeamento',
        title: 'Mapeamento de Processos',
        icon: <FaSitemap />,
        description: 'Analisamos e otimizamos os processos de RH da sua empresa, identificando gargalos, redundâncias e oportunidades de melhoria. Entregamos documentação completa e recomendações práticas para aumentar a eficiência do seu departamento.'
    }
];

const Services = () => {
    return (
        <div className="page-services">
            <SEO
                title="Nossos Serviços"
                description="Conheça nossas soluções em Recrutamento e Seleção, Assessment, Hunting Executivo e Consultoria de RH."
            />

            <Hero
                title="Nossas Soluções"
                subtitle="Construímos estratégias de RH personalizadas para o tamanho e a necessidade do seu negócio."
                className="hero-services"
            />

            <div className="container services-container">
                {servicesData.map(service => (
                    <div key={service.id} id={service.id} className="service-detail-card">
                        <div className="service-detail-icon">{service.icon}</div>
                        <div className="service-detail-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
