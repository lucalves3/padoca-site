import React from 'react';

class EsfirraSoja extends React.Component {
  render() {
    const { products } = this.props;
    console.log(products)
    return(
      <section className="products-section">
        <div className="first-div-products">
          <h1> { products[1].id } </h1>
          <p>{ products[1].Text }</p>
          <p>{ products[1].Acompanhamento }</p>
          <p>{ products[1].Ingredientes }</p>
          <p>{ products[1].Aviso }</p>
          <p>{ products[1].Tag }</p>
          <p>A partir de:</p>
          <p>{ products[1].Price }</p>
        </div>
        <div>
          <img className="image-products" src={ products[1].SourceImage } alt={ products[1].id } />
        </div>
      </section>
    )
  }
}

export default EsfirraSoja;
