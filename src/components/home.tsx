import React, { useEffect, useState } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Home( {tema}:any ) {
    const Tema = useState(tema);
    const [idade, setIdade] = useState(0);

    useEffect(() => {
      const idadeCalc = calcIdade("2005,09,27");
      setIdade(idadeCalc);
    }, []);

    function calcIdade(dataNasc:string) {
      const hoje = new Date();
      const nascDate = new Date(dataNasc);
      
      let idade = hoje.getFullYear() - nascDate.getFullYear();
      
      if (
        hoje.getMonth() < nascDate.getMonth() ||
        (hoje.getMonth() === nascDate.getMonth() &&
          hoje.getDate() < nascDate.getDate())
      ) {
        idade --;
      }
      
      return idade;
    }
  return (
    <>
    <br />
    <div className="home">
      <img src="/imagens/fotos/perfil.jpeg" alt="Foto de perfil"/>
      <div className="homeDesc">
      <h4> Olá, seja bem vindo ao meu portfólio!</h4>
      <h5>
        Meu nome é Felipe, tenho {idade} anos de idade, nascido em São José dos Campos - SP, neste portfólio você poderá encontrar diversas informações sobre meu gostos e hobbies pessoais, minha vida acadêmica, projetos que desenvolvi e formas de entrar em contato comigo.</h5>
      </div>
    </div>
    </>
  );
}
