import React from 'react';
import Cardapio from './Cardapio';

class Main extends React.Component {
  render() {
    return(
      <main className="main-container">
        <section>
          <Cardapio />
        </section>
      </main>
    )
  }
}

export default Main;
