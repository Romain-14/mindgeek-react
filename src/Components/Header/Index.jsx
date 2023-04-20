import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";
import logo from "../../assets/img/logo.png";
import Icon from "../icon/Index";

import { faUser, faCloud } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <header>
            <Link to={"/"} title="Retour à la page d'accueil">
                <img src={logo} alt="Logo du site" className={styles.logo} />
            </Link>
            <nav className={styles.nav}>
                <Link to={"shared"}>
                    <Icon icon={faUser} /><br/>
                    Serveur mutualisé
                </Link>

                <Link to={"dedicated"}>
                    <Icon icon={faUser} /><br/>
                    Serveur Dédié
                </Link>
                <Link to={"cloud"}>
                    <Icon icon={faCloud} /><br/>
                    Service "Cloud"
                </Link>
                <Link to={"contact"}>
                    <Icon icon={faUser} /><br/>
                    Contact
                </Link>
            </nav>
        </header>
    );
}

export default Header;
