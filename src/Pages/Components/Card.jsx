import React from "react";

import styles from "./card.module.css";

function Card({ data }) {
    
    return (
        <article className={styles.ctn}>
            <h3>{data.title}</h3>

            {data.content.map((c) => (
                <p key={Math.random()} className={c.classCSS}>
                    {c.text}
                </p>
            ))}
        </article>
    );
}

export default Card;