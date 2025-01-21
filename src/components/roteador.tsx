import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Home from "./home";
import Projetos from "./projects";
import Certificacoes from "./technologies";
import "./static/style.css";

const Roteador = () => {
  const cor = "#366391";
  const corSecundaria = "#ECF0F1";

  // Obtém a tela atual da URL
  const telaAtual = window.location.pathname;

  let conteudo;
  switch (telaAtual) {
    case "/projetos":
      conteudo = <Projetos tema={cor} />;
      break;
    case "/certificacoes":
      conteudo = <Certificacoes tema={cor} />;
      break;
    case "/":
    default:
      conteudo = <Home tema={cor} />;
      break;
  }

  return (
    <>
      <Navbar
        tema={cor}
        botoes={[
          { nome: "Home", link: "/" },
          { nome: "Projetos", link: "/projetos" },
          { nome: "Certificações", link: "/certificacoes" },
        ]}
      />
      <div style={{ marginBottom: 100 }}></div>
      {conteudo}
      <Footer tema={corSecundaria} />
    </>
  );
};

export default Roteador;
