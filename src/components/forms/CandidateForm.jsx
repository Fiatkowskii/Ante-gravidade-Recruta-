import React, { useState } from 'react';
import Button from '../ui/Button';
import './Forms.css';

const CandidateForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        cidade: '',
        area: '',
        cargo: '',
        pretensao: '',
        experiencia: '',
        nivel: '',
        linkedin: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Cadastro realizado com sucesso! (Simulação)');
    };

    return (
        <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nome">Nome Completo *</label>
                <input type="text" id="nome" name="nome" required value={formData.nome} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="telefone">Telefone/WhatsApp *</label>
                <input type="tel" id="telefone" name="telefone" required value={formData.telefone} onChange={handleChange} placeholder="(XX) XXXXX-XXXX" />
            </div>

            <div className="form-group">
                <label htmlFor="cidade">Cidade/Estado *</label>
                <input type="text" id="cidade" name="cidade" required value={formData.cidade} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="area">Área de Atuação *</label>
                <select id="area" name="area" required value={formData.area} onChange={handleChange}>
                    <option value="">Selecione...</option>
                    <option value="Administrativo">Administrativo</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Financeiro">Financeiro</option>
                    <option value="RH">Recursos Humanos</option>
                    <option value="TI">Tecnologia da Informação</option>
                    <option value="Operacional">Operacional</option>
                    <option value="Telecom">Telecomunicações</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="cargo">Cargo Pretendido</label>
                <input type="text" id="cargo" name="cargo" value={formData.cargo} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="pretensao">Pretensão Salarial</label>
                <input type="text" id="pretensao" name="pretensao" value={formData.pretensao} onChange={handleChange} placeholder="R$ 0,00" />
            </div>

            <div className="form-group">
                <label htmlFor="nivel">Nível Profissional</label>
                <select id="nivel" name="nivel" value={formData.nivel} onChange={handleChange}>
                    <option value="">Selecione...</option>
                    <option value="Estagiario">Estagiário</option>
                    <option value="Junior">Júnior</option>
                    <option value="Pleno">Pleno</option>
                    <option value="Senior">Sênior</option>
                    <option value="Especialista">Especialista</option>
                    <option value="Gerencia">Gerência</option>
                </select>
            </div>

            <div className="form-group full-width">
                <label htmlFor="linkedin">LinkedIn (URL)</label>
                <input type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/seu-perfil" />
            </div>

            <div className="form-group full-width">
                <label htmlFor="curriculo">Anexar Currículo (PDF ou DOC)</label>
                <input type="file" id="curriculo" name="curriculo" accept=".pdf,.doc,.docx" className="file-input" />
            </div>

            <div className="form-group full-width checkbox-group">
                <label>
                    <input type="checkbox" required />
                    Concordo com a Política de Privacidade e o tratamento dos meus dados para fins de recrutamento.
                </label>
            </div>

            <div className="form-actions full-width">
                <Button variant="primary" type="submit">Cadastrar Currículo</Button>
            </div>
        </form>
    );
};

export default CandidateForm;
