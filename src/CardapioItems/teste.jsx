import React from 'react';

class Teste extends React.Component {
  render() {
    const { products } = this.props;
    console.log(products)
    return(
      <section className="products-section">
        { products.map((element) =>  
        <div className="first-div-products">
          <h1> { element.id } </h1>
          <p>{ element.Text }</p>
          <p>{ element.Acompanhamento }</p>
          <p>{ element.Ingredientes }</p>
          <p>{ element.Aviso }</p>
          <p>{ element.Tag }</p>
          <p>A partir de:</p>
          <p>{ element.Price }</p>
        <div>
          <img className="image-products" src={ element.SourceImage } alt={ element.id } />
        </div>
        </div>
        )}
      </section>
    )
  }
}

export default Teste;
