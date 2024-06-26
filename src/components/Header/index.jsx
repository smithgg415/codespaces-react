import React from "react";
import "./styles.css";


import { BrowserRouter as Router, Link } from "react-router-dom";




import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
    return (
            <header className="header">

                <h3>Navegando</h3>
                <nav>
                    <ul>
                        <li>
                            <Link to="/tiktok">TikTok</Link>
                        </li>
                        <li>
                            <Link to="/whatsapp">Whatsapp</Link>
                        </li>
                        <li>
                            <Link to="/facebook">Facebook</Link>
                        </li>
                        <li>
                            <Link to="/instagram">Instagram</Link>
                        </li>
                    </ul>
                </nav>
            </header>
    );
}