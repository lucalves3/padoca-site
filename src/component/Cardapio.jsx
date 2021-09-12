import React from 'react';
import EsfirraCheddar from '../CardapioItems/EsfirraCheddar';
import EsfirraMarguerita from '../CardapioItems/EsfirraMarguerita';
import EsfirraSoja from '../CardapioItems/EsfirraSoja';
import Teste from '../CardapioItems/teste';
import ProductsData from '../ProductsData';

class Cardapio extends React.Component {
  render() {
    return(
      <section>
        <h2>Esfirras</h2>
        <div className="Cardapio-items">
          <EsfirraSoja products={ ProductsData }/>
          <EsfirraMarguerita products={ ProductsData }/>
          <EsfirraCheddar products={ ProductsData }/>
          {/* <Teste products={ ProductsData }/> */}
        </div>
        
      </section>
    )
  }
}

export default Cardapio;
