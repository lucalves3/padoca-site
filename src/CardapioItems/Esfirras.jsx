import React from 'react';

class Esfirras extends React.Component {
  render() {
    const { products } = this.props;
    console.log(products)
    return(
      <section className="section-container-products">
        { products.map((element) =>
        <div className="products-section">  
        <div className="first-div-products">
          <h1> { element.id } </h1>
          <p>{ element.Text }</p>
          <p>{ element.Acompanhamento }</p>
          <p>{ element.Ingredientes }</p>
          <p>{ element.Aviso }</p>
          <p>{ element.Tag }</p>
          <p>A partir de:</p>
          <p>{ element.Price }</p>
        </div>
        <div>
          <img className="image-products" src={ element.SourceImage } alt={ element.id } />
        </div>
        </div>
        )}
      </section>
    )
  }
}

export default Esfirras;
