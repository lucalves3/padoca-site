import React from 'react';

class EsfirraCheddar extends React.Component {
  render() {
    const { products } = this.props;
    console.log(products)
    return(
      <section className="products-section">
        <div className="first-div-products">
          <h1> { products[3].id } </h1>
          <p>{ products[3].Text }</p>
          <p>{ products[3].Acompanhamento }</p>
          <p>{ products[3].Ingredientes }</p>
          <p>{ products[3].Aviso }</p>
          <p>{ products[3].Tag }</p>
          <p>A partir de:</p>
          <p>{ products[3].Price }</p>
        </div>
        <div>
          <img className="image-products" src={ products[3].SourceImage } alt={ products[3].id } />
        </div>
      </section>
    )
  }
}

export default EsfirraCheddar;
