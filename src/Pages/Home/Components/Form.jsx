import React from "react";
import Input from "../../../Components/Input";

function Form() {
    return (
        <form className="search">
            <fieldset>
                <Input
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
