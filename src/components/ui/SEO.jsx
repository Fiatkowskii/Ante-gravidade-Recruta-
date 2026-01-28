import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical }) => {
    const siteTitle = 'Recruta+ | Assessoria em RH';

    return (
        <Helmet>
            <title>{title ? `${title} | Recruta+` : siteTitle}</title>
            <meta name="description" content={description || "Soluções completas em RH: recrutamento e seleção, assessment, hunting executivo e consultoria. Especialistas no setor de telecom com atendimento em todo Brasil."} />
            <meta name="keywords" content={keywords || "consultoria rh, recrutamento seleção, telecom, vaga emprego, assessment, hunting executivo"} />
            {canonical && <link rel="canonical" href={canonical} />}
            <meta property="og:title" content={title ? `${title} | Recruta+` : siteTitle} />
            <meta property="og:description" content={description || "Soluções completas em RH: recrutamento e seleção, assessment, hunting executivo e consultoria."} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};

export default SEO;
