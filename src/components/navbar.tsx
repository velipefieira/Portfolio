/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function BarraNavegacao(props:any) {
  const gerarListaBotoes = () => {
    if (props.botoes.length <= 0) {
      return <></>;
    } else {
      let lista = props.botoes.map((valor:string) => (
        <li key={valor} className="nav-item">
          <a
            className="nav-link"
            href="#"
            onClick={(e) => props.seletorView(valor, e)}
          >
            {valor}
          </a>
        </li>
      ));
      return lista;
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="light"
        style={{ backgroundColor: props.tema, marginBottom: 10 }}
      >
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1"> <img src="../imagens/icons/logo.png" style={{ width: '50px'}} /> </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {gerarListaBotoes()}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}