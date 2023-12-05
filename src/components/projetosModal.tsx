import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Projeto } from "./projetos";
import './static/style.css'
import { ModalTitle } from "react-bootstrap";

interface ProjetosModalProps {
    projeto: Projeto | null;
    handleClose: () => void; 
  }

export default function ProjetosModal({ projeto, handleClose }: ProjetosModalProps) {
  return (
    <Modal show={Boolean(projeto)} onHide={handleClose}>
      <Modal.Header closeButton>
        <ModalTitle> Descrição do Projeto </ModalTitle>
      </Modal.Header>
      <Modal.Body>
        {projeto && (
          <>
          <div className="projetoModal">
            <h4>{projeto.titulo}</h4>
            <p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              <img src={projeto.img} alt={projeto.titulo} />
            </a>
            </p>
            <h6>{projeto.desc}</h6>
              <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                Acesse o repositório
              </a>
              <br />
              <h5>
                Tecnologias utilizadas no projeto:
              </h5>
            <div className="tecnologias">
              { projeto.tec.map((img) => (
                <img src={img}/>
              ))}
            </div>
          </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
