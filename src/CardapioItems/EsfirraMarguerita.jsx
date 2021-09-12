import React from 'react';

class EsfirraMarguerita extends React.Component {
  render() {
    const { products } = this.props;
    console.log(products)
    return(
      <section className="products-section">
        <div className="first-div-products">
          <h1> { products[2].id } </h1>
          <p>{ products[2].Text }</p>
          <p>{ products[2].Acompanhamento }</p>
          <p>{ products[2].Ingredientes }</p>
          <p>{ products[2].Aviso }</p>
          <p>{ products[2].Tag }</p>
          <p>A partir de:</p>
          <p>{ products[2].Price }</p>
        </div>
        <div>
          <img className="image-products" src={ products[2].SourceImage } alt={ products[2].id } />
        </div>
      </section>
    )
  }
}

export default EsfirraMarguerita;
