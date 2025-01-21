import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ProjetosModal from "./projectsModal";
import { TbCodeDots } from "react-icons/tb";
import "./static/projects.css"

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
      titulo: "Site para consulta de dados sobre Covid longa no Vale do Paraiba.",
      subtitulo: "",
      desc: "Minha contribuição como Scrum Master para a API(Aprendizagem por Projeto Integrado) do 1° semestre. O projeto consiste em um site focado em dados relacionados a Covid-19, seus efeitos e seus sintômas prolongados, ou Covid longa de acordo com a Organização Mundial da Saúde (OMS). Desenvolvido entre Mar-Jun/23.",
      link: "https://github.com/Equipe-CodeLand/API-2023.1",
      img: "/imagens/capas/api.gif",
      tec: [
        "https://cdn-icons-png.flaticon.com/128/5968/5968267.png",
        "https://cdn-icons-png.flaticon.com/128/5968/5968242.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Python_icon_%28black_and_white%29.svg/2048px-Python_icon_%28black_and_white%29.svg.png",
        "https://cdn-icons-png.flaticon.com/512/274/274439.png",
        "https://static-00.iconduck.com/assets.00/logo-js-icon-2048x2048-ptuzd8a3.png"
      ]
    },
    {
      titulo: "Sistema para gestão de chamados para uma fornecedora de Internet Fixa.",
      subtitulo: "",
      desc: "Minha contribuição como Product Owner/Product Manager para a API(Aprendizagem por Projeto Integrado) do 2° semestre. O projeto se refere à um sistema de Gestão de Chamadas de Serviço. A plataforma deve conter informações detalhadas sobre a disponibilização de funcionalidades sobre o planejamento, além do acompanhamento completo e controle no atendimento das chamadas. Desenvolvido entre Ago-Nov/23.",
      link: "https://github.com/Equipe-CodeLand/API-2023.2",
      img: "https://raw.githubusercontent.com/Equipe-CodeLand/API-2023.2/main/docs/cliente_mvp.gif",
      tec: [
        "https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png",
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-black-icon.png",
        "https://cdn-icons-png.freepik.com/512/5968/5968566.png",
        "https://cdn-icons-png.flaticon.com/512/274/274439.png"
      ]
    },
    {
      titulo: "Sistema para o gerenciamento de ativos para um empresa privada.",
      subtitulo: "",
      desc: "Minha contribuição como Product Owner/Product Manager para a API(Aprendizagem por Projeto Integrado) do 3° semestre. O objetivo do projeto é o desenvolvimento de uma solução para o gerenciamento de ativos de uma empresa. A plataforma deve conter informações detalhadas sobre ativos, cadastro e histórico de manutenções dos ativos e dashboard com indicativos relevantes sobre os ativos. Desenvolvido entre Fev-Jun/24.",
      link: "https://github.com/Equipe-CodeLand/API-2024.1",
      img: "/imagens/capas/mvp_api.gif",
      tec: [
        "https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png",
        "https://cdn-icons-png.flaticon.com/128/5968/5968242.png",
        "https://cdn-icons-png.flaticon.com/512/274/274439.png",
        "https://cdn-icons-png.flaticon.com/512/154/154878.png",
        "https://static-00.iconduck.com/assets.00/spring-boot-icon-2048x2046-hlpnsm8r.png"
      ]
    },
    {
      titulo: "Sistema para coleta de dados de um estação metereológica.",
      subtitulo: "",
      desc: "Minha contribuição como Desenvolvedor para a API(Aprendizagem por Projeto Integrador) do 4° semestre. O objetivo do projeto é o desenvolvimento de um sistema de coleta de dados de estações meteorológicas. A plataforma deve receber as informações da estação metereológica e em caso de emergência mostrar uma notificação alertando a população. Desenvolvido entre Ago-Dez/24.",
      img: "https://github.com/Equipe-CodeLand/API-2024.2/raw/main/docs/mvp-sprint1.gif",
      link: "https://github.com/Equipe-CodeLand/API-2024.2",
      tec: [
        "https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png",
        "https://cdn-icons-png.freepik.com/512/5968/5968566.png",
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-black-icon.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Python_icon_%28black_and_white%29.svg/2048px-Python_icon_%28black_and_white%29.svg.png",
        "https://static-00.iconduck.com/assets.00/programming-language-flask-icon-2048x1826-wf5k5ugs.png",
        "https://iconape.com/wp-content/png_logo_vector/cib-amazon-aws.png",
        "https://cdn.iconscout.com/icon/free/png-256/free-docker-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-2-pack-brand-logos-icons-2878480.png",
        "https://cdn.icon-icons.com/icons2/2389/PNG/512/firebase_logo_icon_145278.png"
      ]
    },
    {
      titulo: "Aplicativo mobile para Reporte de Problemas Urbanos.",
      subtitulo: "",
      desc: "Projeto desenvolvido com o objetivo de simplificar o processo de reporte de problemas urbanos, permitindo o usuário relatar um ocorrido de forma rápida e detalhada, com fotos e localização do ocorrido, além de fornecer um acompanhamento do processo de resolução do problema. Produzido entre Set-Dez/24",
      img: '/imagens/capas/aloprefeito.jpg',
      link: "https://github.com/velipefieira/AloPrefeito",
      tec: [
        "https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png",
        "https://static-00.iconduck.com/assets.00/logo-js-icon-2048x2048-ptuzd8a3.png",
        "https://cdn-icons-png.flaticon.com/512/274/274439.png",
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-black-icon.png"
      ]
    },
    {
      titulo: "Chatbot para atendimento de uma pizzaria fictícia usando IA.",
      subtitulo: "",
      desc: "Projeto desenvolvido com o objetivo de produzir um chatbot para simplificar o atendimento de uma pizzaria, utilizando modelos de IA para identificar a intenção do usuário e agilizar o atendimento. Produzido entre Fev-Jun/24",
      img: "/imagens/capas/telegrambot.jpg",
      link: "",
      tec: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Python_icon_%28black_and_white%29.svg/2048px-Python_icon_%28black_and_white%29.svg.png"
      ]
    },
    {
      titulo: "Sistema para o gerenciamento de um Petshop.",
      subtitulo: "",
      desc: "Projeto desenvolvido o decorrer de 5 atividades práticas para a disciplina Tecnicas de Programação I, utilizando conceitos de Programação orientada a objetos e arquitetura em camadas com React. Desenvolvido entre Out-Dez/23.",
      link: "https://github.com/velipefieira/Ativ-PetLovers",
      img: "/imagens/capas/petlovers.gif",
      tec: [
        "https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png",
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-black-icon.png",
        "https://cdn-icons-png.freepik.com/512/5968/5968566.png",
        "https://cdn-icons-png.flaticon.com/512/154/154878.png"
      ]
    },
    {
      titulo: "Portfólio",
      subtitulo: "",
      desc: "Projeto desenvolvido inicialmente para disciplina Design Digital, o qual será periodicamente atualizado com novos projetos e incrementados com novas tecnologias que forem aprendidas por mim ao decorrer do tempo. Iniciado em Mar/23",
      link: "https://github.com/velipefieira/Portfolio",
      img: "/imagens/capas/portfolio.gif",
      tec: [
        "https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png",
        "https://www.svgrepo.com/show/354512/vercel.svg"
      ]
    },
    {
      titulo: "Site de uma universidade fictícia.",
      subtitulo: "",
      desc: "Site de uma universidade fictícia desenvolvido utilizando conceitos básicos de HTML, CSS, Flask e MYSQL, para desafio da disciplina Desenvolvimento WEB I. Desenvolvido entre Mar-Jun/23",
      link: "https://github.com/velipefieira/DesafioUnes",
      img: "/imagens/capas/unes.gif",
      tec: [
        "https://cdn-icons-png.flaticon.com/128/5968/5968267.png",
        "https://cdn-icons-png.flaticon.com/128/5968/5968242.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Python_icon_%28black_and_white%29.svg/2048px-Python_icon_%28black_and_white%29.svg.png",
        "https://static-00.iconduck.com/assets.00/programming-language-flask-icon-2048x1826-wf5k5ugs.png",
        "https://cdn-icons-png.flaticon.com/512/274/274439.png"
      ]
    }
  ];

  const projetosPessoais: Projeto[] = [
    {
      titulo: "Space Defender",
      subtitulo: "Jogo desenvolvido para praticar programação em Python.",
      desc: "Jogo criado no estilo Space Invaders, para praticar programação em Python. Desenvolvido durante Jun/23.",
      link: "https://github.com/velipefieira/SpaceDefender",
      img: "/imagens/capas/space.gif",
      tec: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Python_icon_%28black_and_white%29.svg/2048px-Python_icon_%28black_and_white%29.svg.png"
      ]
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
      <h3 className="page-title"> Projetos Acadêmicos: </h3>
      <div className="proj-container">
        {projetosAcademicos.map((projeto, index) => (
          <div key={index}>
            <a
              href="#"
              className="list-group-item-action custom-link"
              onClick={() => handleShow(projeto)}
            >
              <img src={projeto.img} alt="Gif do site" />
              <h5> {projeto.titulo} </h5>
              <h6> {projeto.subtitulo} </h6>
            </a>
          </div>
        ))}
      </div>
      <h3 className="page-title"> Projetos Pessoais: </h3>
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
      <h3 className="page-title"> Projetos Profissionais: </h3>
      <div className="center">
        <TbCodeDots size={75} />
        <h4> Ainda não há projetos para serem mostrados  aqui. </h4>
      </div>
    </div>
  );
}
