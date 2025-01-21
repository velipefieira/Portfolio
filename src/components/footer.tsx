import { useState } from "react";

export default function ({ tema }: any) {
    const Tema = useState(tema);
    return (
        <>
            <footer style={{ backgroundColor: tema }} >
                <div style={{ textAlign: 'center' }}>
                    <p> © 2025 </p>
                    <p> Todos os direitos reservados </p>
                </div>
                <div className="footer">
                    <a href="https://www.linkedin.com/in/velipefieira/" style={{ paddingLeft: "5px" }} target="_blank"> <img srcSet="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png 70w, https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png 140w" sizes="(max-width: 700px) 4px, 6px" alt="" /></a>
                    <a href="https://www.linkedin.com/in/velipefieira/" target="_blank"> @velipefieira </a>
                    <a href="https://github.com/velipefieira" target="_blank" style={{ paddingLeft: "5px" }} > <img srcSet="https://cdn-icons-png.flaticon.com/512/25/25231.png 70w, https://cdn-icons-png.flaticon.com/512/25/25231.png 140w" sizes="(max-width: 700px) 4px, 6px" alt="" /> </a>
                    <a href="https://github.com/velipefieira" target="_blank"> @velipefieira</a>
                    <a href="https://www.instagram.com/velipefieira" target="_blank"> <img srcSet="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png 300w, https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png 600w" sizes="(max-width: 700px) 4px, 6px" alt="" /> </a>
                    <a href="https://www.instagram.com/velipefieira" target="_blank"> @velipefieira  </a>
                </div>
            </footer>
        </>
    )
}