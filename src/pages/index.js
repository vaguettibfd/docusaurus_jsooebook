import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="JavaScript e Orientado a Objetos"
      description="Série Didática: Pensando Software com JavaScript — Uma abordagem progressiva de desenvolvimento"
    >
      <main style={{ padding: '72px 0' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 16px' }}>
          
          <header style={{ textAlign: 'center', marginBottom: 40 }}>
            
            {/* LOGO DO E-BOOK */}
            <img
              src="/img/ebook1-logo.svg"
              alt="Logo do e-book JavaScript e Orientação a Objetos"
              style={{
                maxWidth: 220,
                marginBottom: 24
              }}
            />

            <h1 style={{ fontSize: '2.4rem', lineHeight: 1.15, marginBottom: 12 }}>
              JavaScript e Orientação a Objetos
            </h1>

            <p style={{ fontSize: '1.15rem', margin: 0, opacity: 0.9 }}>
              Série Didática: Pensando Software com JavaScript
            </p>

            <p style={{ fontSize: '1.05rem', marginTop: 10, opacity: 0.85 }}>
              “Uma abordagem progressiva de desenvolvimento”
            </p>
          </header>

          <section
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap'
            }}
          >
            <Link
              className="button button--primary button--lg"
              to="/docs/indice"
            >
              📘 Acessar o E-Book
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="https://github.com/vaguettibfd/docusaurus_jsooebook"
            >
              💻 Ver no GitHub
            </Link>
          </section>

          <section style={{ marginTop: 40, textAlign: 'center', opacity: 0.85 }}>
            <p style={{ margin: 0 }}>
              Conteúdo organizado em capítulos progressivos, exemplos executáveis
              e atividades práticas para aprendizagem ativa em JavaScript.
            </p>
          </section>

        </div>
      </main>
    </Layout>
  );
}