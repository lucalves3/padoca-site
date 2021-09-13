import React from 'react';
import Esfirras from '../CardapioItems/Esfirras';
import Pizzas from '../CardapioItems/Pizzas';
import Sobremesas from '../CardapioItems/Sobremesas';
import ProductsData from '../ProductsData';
import pizzas from '../ProductsPizzaData';
import sobremesas from '../SobremesasData';

class Cardapio extends React.Component {
  render() {
    return(
      <section>
        <h2 className="cardapio-class">Esfirras</h2>
        <div className="Cardapio-items">
          <Esfirras products={ ProductsData }/>
          <h2 className="cardapio-class">Pizzas</h2>
          <Pizzas products={ pizzas }/>
          <h2 className="cardapio-class">Sobremesas</h2>
          <Sobremesas products={ sobremesas } />
        </div>
        
      </section>
    )
  }
}

export default Cardapio;
