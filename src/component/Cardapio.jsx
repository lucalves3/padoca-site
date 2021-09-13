import React from 'react';
import Esfirras from '../CardapioItems/Esfirras';
import Pizzas from '../CardapioItems/Pizzas';
import ProductsData from '../ProductsData';
import pizzas from '../ProductsPizzaData';

class Cardapio extends React.Component {
  render() {
    return(
      <section>
        <h2>Esfirras</h2>
        <div className="Cardapio-items">
          <Esfirras products={ ProductsData }/>
          <h2>Pizzas</h2>
          <Pizzas products={ pizzas }/>
        </div>
        
      </section>
    )
  }
}

export default Cardapio;
