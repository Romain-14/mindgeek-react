import React from "react";
import Form from "./Components/Form";
import Wrapper from "./Components/Wrapper";


function Home() {
    return (
        <main id="home">
            <header className="sub-header">
                <h1>L'hébergement à prix libre</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum impedit dignissimos qui rem earum beatae natus pariatur
                    reiciendis harum praesentium?
                </p>
            </header>

            <Form />

            <Wrapper />
            
        </main>
    );
}

export default Home;
