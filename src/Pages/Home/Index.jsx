import React from "react";
import Form from "./Components/Form/Index";
import Wrapper from "./Components/Wrapper/Index";
import datas from "../../data/index.json";

import styles from "./home.module.css";

function Home() {

    return (
        <main id="home">
            <header className={styles.ctn}>
                <h1>L'hébergement à prix libre</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum impedit dignissimos qui rem earum beatae natus pariatur
                    reiciendis harum praesentium?
                </p>
            </header>

            <Form />
            
            {Object.values(datas).map(d => <Wrapper key={Math.random()} data={d} />)}

        </main>
    );
}

export default Home;
