import { useState } from "react";
import { FaHeadphones } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { ImCamera } from "react-icons/im";
import FotografiasModal from "./fotoModal";

export default function Hobbies({tema}: any) {
    const [state, setState] = useState({
        show: false,
      });

      const handleClose = () => {
        setState((prevState) => ({
          ...prevState,
          show: false,
        }));
      };
    
      const handleShow = () => {
        setState((prevState) => ({
          ...prevState,
          show: true,
        }));
      };
    
      
    return (
    <>

        {state.show && (
                <FotografiasModal show={state.show} handleClose={handleClose} />
            )}
        <div className="sub">
            <p> Dentre os hobbies favoritos de Felipe estão: </p>
            <h4> Ouvir música </h4>
        </div>
        <div className="hob-container">
            <div>
                <img srcSet="/imagens/capas/musica1.jpg" alt=""/>
                <p> Greenhouse - Miloe </p>
            </div>
            <div>
                <img srcSet="/imagens/capas/musica2.jpg" alt=""/>
                <p> Viva La Vida - Coldplay </p>
            </div>
            <div>
                <a href="https://open.spotify.com/playlist/1k4qjwrIdEqEZXaqDwzOHp?si=19ad8609c0684c44" target="_blank"> 
                <p>
                <FaHeadphones size={'5em'}/>
                </p>
                Veja mais</a>
            </div>
        </div>
            <h4 className="sub"> Ler Livros </h4>
        <div className="hob-container">
            <div>
                <img srcSet="/imagens/capas/livro1.jpg 180w, /imagens/capas/livro1.jpg 100w" sizes="(max-width: 700px) 20px, 90px" alt=""/>
                <p> A Biblioteca da Meia-Noite </p>
            </div>
            <div>
                <img srcSet="/imagens/capas/livro2.jpg 180w, /imagens/capas/livro2.jpg 200w" sizes="(max-width: 700px) 20px, 90px" alt=""/>
                <p> Os Dois Morrem No Final </p>
            </div>
            <div>
                <a href="https://www.skoob.com.br/usuario/9054741" target="_blank">
                <p>
                    <TbBooks size={'5em'}/>
                </p>
                    Veja mais 
                </a>
            </div>
        </div>
            <h4 className="sub"> Tirar fotos </h4>
        <div className="hob-container">
            <div>
                <img srcSet="/imagens/fotos/foto1.jpg 75w, /imagens/fotos/foto1.jpg 300w" sizes="(max-width: 700px) 20px, 90px" alt=""/>
                <p> Foto de manhã pós Lua Cheia </p>
            </div>
            <div>
                <img srcSet="/imagens/fotos/foto8.jpg 75w, /imagens/fotos/foto8.jpg 300w" sizes="(max-width: 700px) 20px, 90px" alt=""/>
                <p> Foto de um restaurante </p>
            </div>
            <div>
            <a href="#"
              className="list-group-item-action custom-link"
              onClick={() => handleShow()}>
                <p>
                    <ImCamera size={'5em'}/>
                </p>
                        Veja mais
                </a>
            </div>
        </div>
    </>
    )
}