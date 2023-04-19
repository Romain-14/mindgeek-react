import React from "react";
import Card from "./Card";

function Wrapper() {
    return (
        <>
            <section>
                <h2>Notre solution en 3 points</h2>

                <Card
                    title={"Configuration"}
                    text={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui ipsum maxime architecto illum nam."
                    }
                />
                <Card
                    title={"Monitoring"}
                    text={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    }
                />
                <Card
                    title={"Configuration"}
                    text={[
                        "Lorem ipsum dolor sit amet consecteem ipsum dolor sit amet consecteem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui ipsum maxime architecto illum nam.", "Lorem ipsum dolor sit amet consecteem ipsum dolor sit amet consecteem ipsum dolor sit amet consectetur  dipisicing elit. Facilis qui ipsum maxime architecto illum nam.Lorem ipsum dolor sit amet consecteem ipsum dolor sit amet consecteem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui ipsum maxime architecto illum nam."]}
                />
            </section>

            <section>
                <h2>Choisissez votre style d'hébergement</h2>

                <article>
                    <h3>Serveur mutualisé</h3>
                    <p className="price">9,99€ / mois</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis qui ipsum maxime architecto illum nam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis qui ipsum maxime architecto illum nam.
                    </p>
                </article>

                <article>
                    <h3>Serveur Dédié</h3>
                    <p className="price">19,99€ / mois</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis qui ipsum maxime architecto illum nam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis qui ipsum maxime architecto illum nam.
                    </p>
                </article>

                <article>
                    <h3>Service cloud</h3>
                    <p className="price">29,99€ / mois</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis qui ipsum maxime architecto illum nam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis qui ipsum maxime architecto illum nam.
                    </p>
                </article>
            </section>
        </>
    );
}

export default Wrapper;
