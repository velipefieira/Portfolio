import { useState } from "react";

export default function({tema}:any){
    const Tema = useState(tema);
    return (
        <>
        <footer>
            <div style={{ textAlign:'center'}}>
                <p> © 2023 </p>
                <p> Todos os direitos reservados </p>
            </div>
            <div className="footer">
                <a href="https://www.instagram.com/velipefieira" target="_blank"> <img srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png 300w, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png 600w" sizes="(max-width: 700px) 4px, 6px" alt=""/> </a> 
                <a href="https://www.instagram.com/velipefieira"  target="_blank"> @velipefieira  </a>
                |
                <a href="https://github.com/velipefieira" target="_blank" style={{ paddingLeft: "5px"}} > <img srcSet="https://cdn-icons-png.flaticon.com/512/25/25231.png 70w, https://cdn-icons-png.flaticon.com/512/25/25231.png 140w" sizes="(max-width: 700px) 4px, 6px" alt=""/> </a>
                <a href="https://github.com/velipefieira" target="_blank"> @velipefieira</a>
                |
                <a href="https://www.linkedin.com/in/velipefieira/" style={{ paddingLeft: "5px"}} target="_blank"> <img srcSet="https://cdn-icons-png.flaticon.com/512/174/174857.png 70w, https://cdn-icons-png.flaticon.com/512/174/174857.png 140w" sizes="(max-width: 700px) 4px, 6px" alt=""/></a>
                <a href="https://www.linkedin.com/in/velipefieira/" target="_blank"> @velipefieira </a>
            </div>
        </footer>
        </>
        )
}