import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="shared">Serveur Mutualisé</Link>
                    <Link to="dedicated">Serveur Dédié</Link>
                    <Link to="cloud">Solution Cloud</Link>
                    <Link to="contact">Contact</Link>
                    <Link to="entry-user">Se connecter</Link>
                </nav>
            </footer>
  )
}

export default Footer