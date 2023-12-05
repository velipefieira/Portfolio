import { useState } from "react";
import { FaHourglassHalf } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

export default function Certificacoes( {tema}:any ) {
    const Tema = useState(tema);

    const outros = [
        {
            desc: "Front-End Básico, 240 horas de duração. FATEC São José dos Campos - Prof. Jessen Vidal",
            data: "(2023)"
        },
        {
            desc: "2 vezes classificado para a 2° fase da OBMEP",
            data: "(2017 e 2019)"
        },
        {
            desc: "Aprovado em Análise e Desenvolvimento de Sistemas (UTFPR)",
            data: "(2023)"
        }
    ]

    const tec = [
        {
            nome: "MySQL",
            img: "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png"
        },
        {
            nome: "Python",
            img: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
        },
        {
            nome: "JavaScript",
            img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
        },
        {
            nome: "TypeScript",
            img: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
        },
        {
            nome: "React",
            img: "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
        },
        {
            nome: "Java",
            img: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
        },
        {
            nome: "MongoDB",
            img: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
        },

    ]

    return(
        <div>
        <h4 className="sub"> Certificações: </h4>
        <div className="proj-container">
            <div>
                <h5> Colégio Crescer </h5>
                <FaGraduationCap size={'4em'}/>
                <p> Ensino Fundamental completo </p>
                <p> (2011 - 2019) </p>
            </div>
            <div>
                <h5> Anglo Cassiano Ricardo </h5>
                <FaGraduationCap size={'4em'}/>
                <p> Ensino Médio completo </p>
                <p> (2020 - 2022)</p>
            </div>
            <div>
                <h5> FATEC São José dos Campos - Prof. Jessen Vidal</h5>
                <FaHourglassHalf size={'4em'}/>
                <p> Cursando Desenvolvimento de Software Multiplataforma </p>
                <p> (2023 - 2025) </p>
            </div>
        </div>
            <h5 className="sub">Outras informações e microcertificações: </h5>
        <div className="proj-container">
            { outros.map( cert => (
                <div>
                    <h5> {cert.desc} </h5>
                    <FaMedal size={'4em'}/>
                    <p> {cert.data}</p>
                </div>
            ))}
        </div>
            <h5 className="sub"> Tecnologias que estou estudando atualmente: </h5>
            <div className="tec-container">
            { tec.map( tec => (
                <div>
                    <h5> {tec.nome} </h5>
                    <img src={tec.img} alt={tec.nome} />
                </div>
            ))}
                </div>
        </div>
    )
}