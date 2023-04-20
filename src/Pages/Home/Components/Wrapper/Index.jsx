import React from "react";
import Card from "../../../Components/Card";

import styles from "./wrapper.module.css";

function Wrapper({ data }) {
    return (
        <section className={styles.ctn}>
            <h2>{data.title}</h2>
            {data.card.map((d) => (
                <Card key={Math.random()} data={d} />
            ))}
        </section>
    );
}

export default Wrapper;
