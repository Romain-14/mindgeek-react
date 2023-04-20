import React, { useState } from "react";
import styles from "./form.module.css";

function Form() {
    const [inputs, setInputs] = useState({
        firstname: "",
        message: "",
        newsLetter: "no",
    });
    function onChangeInputs(e) {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
    function onSubmitHandler(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler} className={styles.contact}>
            <div>
                <label htmlFor="firstname">Your firstname : </label>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    aria-placeholder="Enter your firstname"
                    value={inputs.firstname}
                    onChange={onChangeInputs}
                />
            </div>

            <div>
                <label htmlFor="message">Your message : </label>
                <textarea
                    name="message"
                    id="message"
                    value={inputs.message}
                    onChange={onChangeInputs}
                ></textarea>
            </div>

            <fieldset>
                <legend>Do you want a newsletter :</legend>

                <div>
                    <label htmlFor="yes"><input
                        type="radio"
                        name="newsLetter"
                        id="yes"
                        value="yes"
                        checked={inputs.newsLetter === "yes"}
                        onChange={onChangeInputs}
                    />: yes </label>
                    
                </div>
                <div>
                    <label htmlFor="no"><input
                        type="radio"
                        name="newsLetter"
                        id="no"
                        value="no"
                        checked={inputs.newsLetter === "no"}
                        onChange={onChangeInputs}
                    />: no </label>
                    
                </div>
            </fieldset>

            <input type="submit" value="send" />
        </form>
    );
}

export default Form;
