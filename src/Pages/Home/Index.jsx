import React from "react";
<<<<<<< HEAD
import Form from "./Components/Form/Index";
import Wrapper from "./Components/Wrapper/Index";
import datas from "../../data/index.json";

import styles from "./home.module.css";

function Home() {

    return (
        <main id="home">
            <header className={styles.ctn}>
=======
import Form from "./Components/Form";
import Wrapper from "./Components/Wrapper";


function Home() {
    return (
        <main id="home">
            <header className="sub-header">
>>>>>>> ce62308c7498ecb4f3ddeff11257fe4ff964f8d4
                <h1>L'hébergement à prix libre</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum impedit dignissimos qui rem earum beatae natus pariatur
                    reiciendis harum praesentium?
                </p>
            </header>

            <Form />
<<<<<<< HEAD
            
            {Object.values(datas).map(d => <Wrapper key={Math.random()} data={d} />)}

=======

            <Wrapper />
            
>>>>>>> ce62308c7498ecb4f3ddeff11257fe4ff964f8d4
        </main>
    );
}

export default Home;
