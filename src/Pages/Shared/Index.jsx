import React from 'react';
import datas from "../../data/index.json";
import Card from '../Components/Card';

function Shared({id}) {
    
  return (
    <main id="shared">

        <h2>Notre offre pour les serveurs mutualisé</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veritatis ullam magni voluptatem repellendus debitis natus totam? Facilis, deserunt assumenda fugiat neque incidunt illo? Libero et consequatur deserunt iste inventore. Asperiores expedita similique autem perferendis cum ea! Maiores officia aliquid corrupti sunt iure magni nihil quae neque doloribus id. Quo!</p>

        <Card data={datas.hoisting.card[id]} />

    </main>
  )
}

export default Shared