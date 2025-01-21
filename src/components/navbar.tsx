/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type Botao = {
  nome: string;
  link: string;
};

type Props = {
  tema: string;
  botoes: Botao[];
};

export default function BarraNavegacao(props: Props) {
  const gerarListaBotoes = () => {
    if (props.botoes.length <= 0) {
      return <></>;
    } else {
      return props.botoes.map((botao) => (
        <li key={botao.nome} className="nav-item">
          <a
            className="nav-link"
            href={botao.link}
            style={{ color: "#FAFAFA", fontWeight: "bold" }}
          >
            {botao.nome}
          </a>
        </li>
      ));
    }
  };

  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg"
        data-bs-theme="dark"
        style={{ backgroundColor: props.tema, marginBottom: 10 }}
      >
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img
              src="../imagens/icons/logo.png"
              alt="Logo"
              style={{ width: "50px" }}
            />
          </span>
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
            <ul className="navbar-nav">{gerarListaBotoes()}</ul>
          </div>
        </div>
      </nav>
    </>
  );
}
