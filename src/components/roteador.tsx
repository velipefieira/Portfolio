import React, { Component, MouseEvent } from "react";
import Hobbies from "./hobbies";
import Projetos from "./projetos";
import Navbar from "./navbar";
import Home from "./home";
import Footer from "./footer";
import "./static/style.css"
import Certificacoes from "./certificacoes";

type State = {
  tela: string;
};

export default class Roteador extends Component<{}, State> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      tela: "Home",
    };
    this.selecionarView = this.selecionarView.bind(this);
  }

  selecionarView(novaTela: string, evento: MouseEvent) {
    evento.preventDefault();
    console.log(novaTela);
    this.setState({
      tela: novaTela,
    });
  }

  render() {
    let barraNavegacao = (
      <Navbar
        seletorView={this.selecionarView}
        tema="#9dd2d8"
        botoes={["Home", "Certificações", "Hobbies", "Projetos"]}
      />
    );
    let footer = (
      <Footer
        tema="#9dd2d8"
      />
    );

    return (
      <>
        {barraNavegacao}
        {this.state.tela === "Home" && <Home tema="#9dd2d8" />}
        {this.state.tela === "Certificações" && <Certificacoes tema="#9dd2d8"/>}
        {this.state.tela === "Hobbies" && <Hobbies tema="#9dd2d8"/>}
        {this.state.tela === "Projetos" && <Projetos tema="#9dd2d8"/>}
        {footer}
      </>
    );
  }
}