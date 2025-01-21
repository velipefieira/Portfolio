import { useState } from "react";
import "./static/technologies.css"

export default function Certificacoes({ tema }: any) {
    const Tema = useState(tema);

    const outros = [
        {
            desc: "Oficina de Trabalho BIG/BDC. Geoinformática, bancos de dados geográficos e uso de computação em nuvem.",
            data: "(2024)"
        },
        {
            desc: "Front-End Básico, 240 horas de duração. FATEC São José dos Campos",
            data: "(2023)"
        },
        {
            desc: "2 vezes classificado para a 2° fase da OBMEP",
            data: "(2017 e 2019)"
        },
        {
            desc: "Aprovado em Análise e Desenvolvimento de Sistemas na UTFPR",
            data: "(2023)"
        },
    ]

    const tec = [
        {
            titulo: "Back-End",
            tecnologias: [
                {
                    nome: "Python",
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Python_icon_%28black_and_white%29.svg/2048px-Python_icon_%28black_and_white%29.svg.png"
                },
                {
                    nome: "Node.JS",
                    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-black-icon.png"
                },
                {
                    nome: "Java",
                    img: "https://cdn-icons-png.flaticon.com/512/154/154878.png"
                },
                {
                    nome: "Spring",
                    img: "https://static-00.iconduck.com/assets.00/spring-boot-icon-2048x2046-hlpnsm8r.png"
                },
            ]
        },
        {
            titulo: "Banco de dados",
            tecnologias: [
                {
                    nome: "MySQL",
                    img: "https://cdn-icons-png.flaticon.com/512/274/274439.png"
                },
                {
                    nome: "PostgreSQL",
                    img: "https://cdn.icon-icons.com/icons2/2389/PNG/512/postgresql_logo_icon_144971.png"
                },
                {
                    nome: "MongoDB",
                    img: "https://cdn.icon-icons.com/icons2/2389/PNG/512/mongodb_logo_icon_145054.png"
                },
                {
                    nome: "Neo4J",
                    img: "https://static-00.iconduck.com/assets.00/neo4j-icon-458x512-xx21uago.png"
                }
            ]
        },
        {
            titulo: "Front-End",
            tecnologias: [
                {
                    nome: "React",
                    img: "https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png"
                },
                {
                    nome: "React Native",
                    img: "https://static-00.iconduck.com/assets.00/react-icon-2048x1822-iy7h2x8y.png"
                },
                {
                    nome: "JavaScript",
                    img: "https://static-00.iconduck.com/assets.00/logo-js-icon-2048x2048-ptuzd8a3.png"
                },
                {
                    nome: "TypeScript",
                    img: "https://cdn-icons-png.freepik.com/512/5968/5968566.png"
                }
            ]
        },
        {
            titulo: "Cloud",
            tecnologias: [
                {
                    nome: "AWS",
                    img: "https://iconape.com/wp-content/png_logo_vector/cib-amazon-aws.png"
                },
                {
                    nome: "Docker",
                    img: "https://cdn.iconscout.com/icon/free/png-256/free-docker-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-2-pack-brand-logos-icons-2878480.png"
                },
                {
                    nome: "Vercel",
                    img: "https://raw.githubusercontent.com/detain/svg-logos/master/svg/v/vercel.svg"
                }
            ]
        },
        {
            titulo: "Outras",
            tecnologias: [
                {
                    nome: "Git",
                    img: "https://git-scm.com/images/logos/downloads/Git-Icon-Black.png"
                },
                {
                    nome: "Figma",
                    img: "https://cdn-icons-png.flaticon.com/512/5968/5968704.png"
                },
                {
                    nome: "Jira",
                    img: "https://cdn.icon-icons.com/icons2/2845/PNG/512/jira_logo_icon_181275.png"
                }
            ]
        }
    ]

    return (
        <div>
            <h5 className="tech-title"> Habilidades Profissionais: </h5>
            <div className="tech-container">
                {tec.map(tit => (
                    <div className="tech-fundo">
                        <h5> {tit.titulo} </h5>
                        <div className="technologies">
                            {tit.tecnologias.map((tec, index) => (
                                <div key={index}>
                                    <h6> {tec.nome} </h6>
                                    <img src={tec.img} alt={tec.nome} className="techimg" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <h5 className="tech-title"> Carreira Profissional: </h5>
            <div className="cert-container">
                <div>
                    <h6> Iniciação Científica - INPE </h6>
                    <p> Bolsista de iniciação científica em Desenvolvimento de sistema para disseminação de dados sobre qualidade do ar, voltado ao projeto SISAM. </p>
                    <p> (2024 - Em andamento) </p>
                </div>
            </div>
            <h5 className="tech-title"> Formação Acadêmica: </h5>
            <div className="cert-container">
                <div>
                    <h6> Anglo Cassiano Ricardo </h6>
                    <p> Ensino Médio </p>
                    <p> (2020 - 2022) </p>
                </div>
                <div>
                    <h6> FATEC São José dos Campos</h6>
                    <p> Tecnólogo em Desenvolvimento de Software Multiplataforma </p>
                    <p> (2023 - Em andamento) </p>
                </div>
            </div>
            <h5 className="tech-title">Honras, certificações e prêmios: </h5>
            <div className="cert-container">
                {outros.map(cert => (
                    <div>
                        <h6> {cert.desc} </h6>
                        <p> {cert.data}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}