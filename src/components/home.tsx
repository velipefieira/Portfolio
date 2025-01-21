import { useEffect, useState } from "react";
import "./static/home.css"

export default function Home({ tema }: any) {
  const Tema = useState(tema);
  const [idade, setIdade] = useState(0);

  useEffect(() => {
    const idadeCalc = calcIdade("2005,09,27");
    setIdade(idadeCalc);
  }, []);

  function calcIdade(dataNasc: string) {
    const hoje = new Date();
    const nascDate = new Date(dataNasc);

    let idade = hoje.getFullYear() - nascDate.getFullYear();

    if (
      hoje.getMonth() < nascDate.getMonth() ||
      (hoje.getMonth() === nascDate.getMonth() &&
        hoje.getDate() < nascDate.getDate())
    ) {
      idade--;
    }

    return idade;
  }
  return (
    <>
      <div className="intro-container">
        <div className="image-content">
          <img src="/imagens/fotos/perfil.jpeg" alt="Imagem de perfil" className="profile-image" />
        </div>
        <div className="text-content">
          <p className="intro-title">
            Olá! Meu nome é Felipe, bem-vindo ao meu portfólio!
          </p>
          <p className="intro-text">
            Sou um Desenvolvedor dedicado e versátil. Durante minha trajetória, atuei em projetos como
            {(<b> Product Owner </b>)}e
            {(<b> Desenvolvedor</b>)}, me permitindo adquirir sólidas experiências tanto em desenvolvimento web e mobile, com domínio de tecnologias como
            {(<b> React</b>)},
            {(<b> Node.js</b>)},
            {(<b> Python</b>)},
            {(<b> Flask</b>)} e
            {(<b> Spring Boot</b>)}, quanto em soft skills, como
            {(<b> comunicação eficaz</b>)},
            {(<b> trabalho em equipe</b>)},
            {(<b> liderança</b>)},
            {(<b> adaptabilidade</b>)} e
            {(<b> organização</b>)}, para otimizar minha produtividade e gestão de demandas.
          </p>
          <p className="intro-text">
            Entre os projetos de destaque estão:
          </p>
          <ul className="project-list">
            <li className="project-item">
              Desenvolvimento de sistemas para gestão de ativos, chamados de serviço e dados meteorológicos, utilizando metodologias ágeis para garantir entregas de qualidade e alinhadas aos objetivos do cliente.
            </li>
            <li className="project-item">
              Criação de um aplicativo mobile para reporte de problemas urbanos, buscando agilizar o processo de reporte de problemas urbanos e permitir o usuário relatar um problema de forma rápida e detalhada.
            </li>
            <li className="project-item">
              Produção de um sistema para gerenciamento de um petshop, aplicando conceitos de programação orientada a objetos (POO) e arquitetura em camadas.
            </li>
          </ul>

          <p className="goal-text">
            Tenho como objetivo continuar aprendendo e aplicando novas tecnologias para resolver problemas reais, entregando soluções eficientes e de qualidade. Estou sempre em busca de desafios que me permitam crescer e desenvolver minhas capacidades.
          </p>
        </div>
      </div>
    </>
  );
}
