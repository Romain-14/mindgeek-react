import React from "react";
import styles from "./form.module.css";

function Form() {
    return (
        <form className={styles.search}>
            <fieldset>
                <input
                    type="search"
                    placeholder="Que recherchez-vous ?"
                    aria-placeholder="Recherche"
                />
                <input type="submit" value="Ok" />
            </fieldset>
        </form>
    );
}

export default Form;
