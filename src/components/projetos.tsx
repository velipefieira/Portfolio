import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ProjetosModal from "./projetosModal";
import { TbCodeDots } from "react-icons/tb";


export interface Projeto {
  titulo: string;
  subtitulo: string;
  desc: string;
  img: string;
  link: string;
  tec: string[]
}

export default function Projetos({ tema }: any) {

  const [state, setState] = useState({
    show: false,
    projetoSelecionado: null as Projeto | null,
  });

  const projetosAcademicos: Projeto[] = [
    {
      titulo: "API 1° Semestre",
      subtitulo: "Site para consulta de dados relacionados à Covid Longa no Vale do Paraíba.",
      desc: "Minha contribuição como Scrum Master para a API(Aprendizagem por Projeto Integrado) do 1° semestre. Desenvolvido entre Mar-Jun/23.",
      link: "https://github.com/Equipe-CodeLand/API-2023.1",
      img: "/imagens/capas/api.gif",
      tec: ["https://cdn-icons-png.flaticon.com/128/5968/5968267.png", "https://cdn-icons-png.flaticon.com/128/5968/5968242.png","https://cdn-icons-png.flaticon.com/128/5968/5968350.png", "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png", "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"]
    },
    {
      titulo: "API 2° Semestre",
      subtitulo: "Sistema gerenciador de chamadas de serviço para uma fornecedora de Internet Fixa.",
      desc: "Minha contribuição como Product Owner/Product Manager para a API(Aprendizagem por Projeto Integrado) do 2° semestre. Desenvolvido entre Ago-Nov/23.",
      link: "https://github.com/Equipe-CodeLand/API-2023.2",
      img: "https://raw.githubusercontent.com/Equipe-CodeLand/API-2023.2/main/docs/cliente_mvp.gif",
      tec: ["https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg", "https://cdn-icons-png.flaticon.com/128/5968/5968242.png", "https://www.svgrepo.com/show/376337/node-js.svg",  "https://cdn-icons-png.flaticon.com/512/5968/5968381.png", "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png", "https://avatars.githubusercontent.com/u/20165699?s=200&v=4"]
    },
    {
      titulo: "Pet Lovers",
      subtitulo: "Sistema de gerenciamento para um Pet Shop",
      desc: "Projeto desenvolvido em dupla ao decorrer de 5 atividades práticas para a disciplina Tecnicas de Programação I, utilizando conceitos de Programação orientada a objetos e arquitetura em camadas com React. Desenvolvido entre Out-Dez/23.",
      link: "https://github.com/velipefieira/Ativ-PetLovers",
      img: "/imagens/capas/petlovers.gif",
      tec: ["https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg", "https://cdn-icons-png.flaticon.com/128/5968/5968242.png", "https://www.svgrepo.com/show/376337/node-js.svg",  "https://cdn-icons-png.flaticon.com/512/5968/5968381.png", "https://cdn-icons-png.flaticon.com/512/5968/5968282.png"]
    },
    {
      titulo: "Portfólio",
      subtitulo: "Portfólio pessoal contendo dados pessoais, interesses, hobbies e projetos desenvolvidos",
      desc: "Projeto desenvolvido inicialmente para disciplina Design Digital, o qual será periodicamente atualizado com novos projetos e incrementados com novas tecnologias que forem aprendidas por mim ao decorrer do tempo. Iniciado em Mar/23",
      link: "https://github.com/velipefieira/Portfolio",
      img: "/imagens/capas/portfolio.gif",
      tec: ["https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg", "https://cdn-icons-png.flaticon.com/128/5968/5968242.png", "https://www.svgrepo.com/show/376337/node-js.svg",  "https://www.svgrepo.com/show/354512/vercel.svg"]
    },
    {
      titulo: "Desafio Unes",
      subtitulo: "Site de uma universidade fictícia.",
      desc: "Site de uma universidade fictícia desenvolvido utilizando conceitos básicos de HTML, CSS, Flask e MYSQL, para desafio da disciplina Desenvolvimento WEB I. Desenvolvido entre Mar-Jun/23",
      link: "https://github.com/velipefieira/DesafioUnes",
      img: "/imagens/capas/unes.gif",
      tec: ["https://cdn-icons-png.flaticon.com/128/5968/5968267.png", "https://cdn-icons-png.flaticon.com/128/5968/5968242.png","https://cdn-icons-png.flaticon.com/128/5968/5968350.png","https://static-00.iconduck.com/assets.00/programming-language-flask-icon-2048x1826-wf5k5ugs.png", "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png"]
    }
  ];

  const projetosPessoais: Projeto[] = [
    {
      titulo: "Space Defender",
      subtitulo: "Jogo desenvolvido para praticar programação em Python.",
      desc: "Jogo criado no estilo Space Invaders, para praticar programação em Python. Desenvolvido durante Jun/23.",
      link: "https://github.com/velipefieira/SpaceDefender",
      img: "/imagens/capas/space.gif",
      tec: ["https://cdn-icons-png.flaticon.com/128/5968/5968350.png"]
    }
  ];

  const handleClose = () => {
    setState((prevState) => ({
      ...prevState,
      show: false,
    }));
  };

  const handleShow = (projeto: Projeto) => {
    setState((prevState) => ({
      ...prevState,
      show: true,
      projetoSelecionado: projeto,
    }));
  };

  return (
    <div>
    {state.show && (
          <ProjetosModal projeto={state.projetoSelecionado} handleClose={handleClose} />
    )}
      <h3 className="sub"> Projetos Acadêmicos: </h3>
      <div className="proj-container">
        {projetosAcademicos.map((projeto) => (
          <div>
            <a
              href="#"
              className="list-group-item-action custom-link"
              onClick={() => handleShow(projeto)}
            >
                <img src={projeto.img} alt="Gif do site" />
              <h4> {projeto.titulo} </h4>
              <h6> {projeto.subtitulo} </h6>
            </a>
          </div>
        ))}
      </div>
      <h3 className="sub"> Projetos Pessoais: </h3>
      <div className="proj-container">
        {projetosPessoais.map((projeto) => (
          <div>
            <a
              href="#"
              className="list-group-item-action custom-link"
              onClick={() => handleShow(projeto)}
            >
                <img src={projeto.img} alt="Gif do site" />
              <h4> {projeto.titulo} </h4>
              <h6> {projeto.subtitulo} </h6>
            </a>
          </div>
        ))}
      </div>
      <h3 className="sub"> Projetos Profissionais: </h3>
        <div className="center">
        <TbCodeDots size={75}/>
        <h4> Ainda não há projetos para serem mostrados  aqui. </h4>
        </div>
    </div>
  );
}
