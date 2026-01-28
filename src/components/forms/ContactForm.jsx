import React, { useState } from 'react';
import Button from '../ui/Button';
import './Forms.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        empresa: '',
        cnpj: '',
        nomeContato: '',
        email: '',
        telefone: '',
        servicos: [],
        mensagem: ''
    });

    const servicesOptions = [
        'Recrutamento e Seleção',
        'Assessment',
        'Hunting Executivo',
        'Treinamento e Desenvolvimento',
        'Consultoria em RH',
        'Mapeamento de Processos'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            if (checked) {
                return { ...prev, servicos: [...prev.servicos, value] };
            } else {
                return { ...prev, servicos: prev.servicos.filter(item => item !== value) };
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact submitted:', formData);
        alert('Solicitação enviada com sucesso! Entraremos em contato em breve.');
    };

    return (
        <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="empresa">Nome da Empresa *</label>
                <input type="text" id="empresa" name="empresa" required value={formData.empresa} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="cnpj">CNPJ</label>
                <input type="text" id="cnpj" name="cnpj" value={formData.cnpj} onChange={handleChange} placeholder="00.000.000/0000-00" />
            </div>

            <div className="form-group">
                <label htmlFor="nomeContato">Nome do Responsável *</label>
                <input type="text" id="nomeContato" name="nomeContato" required value={formData.nomeContato} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="cargo">Cargo</label>
                <input type="text" id="cargo" name="cargo" onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="email">E-mail Corporativo *</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="telefone">Telefone *</label>
                <input type="tel" id="telefone" name="telefone" required value={formData.telefone} onChange={handleChange} placeholder="(XX) XXXXX-XXXX" />
            </div>

            <div className="form-group full-width">
                <label>Serviços de Interesse *</label>
                <div className="checkbox-grid">
                    {servicesOptions.map(service => (
                        <label key={service} className="checkbox-label">
                            <input
                                type="checkbox"
                                value={service}
                                checked={formData.servicos.includes(service)}
                                onChange={handleCheckboxChange}
                            />
                            {service}
                        </label>
                    ))}
                </div>
            </div>

            <div className="form-group full-width">
                <label htmlFor="mensagem">Descreva sua necessidade *</label>
                <textarea id="mensagem" name="mensagem" required rows="4" value={formData.mensagem} onChange={handleChange}></textarea>
            </div>

            <div className="form-group full-width checkbox-group">
                <label>
                    <input type="checkbox" required />
                    Concordo com a Política de Privacidade.
                </label>
            </div>

            <div className="form-actions full-width">
                <Button variant="primary" type="submit">Solicitar Orçamento</Button>
            </div>
        </form>
    );
};

export default ContactForm;
