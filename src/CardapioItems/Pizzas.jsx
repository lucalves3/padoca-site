import React from 'react';

class Pizzas extends React.Component {
  render() {
    const { products } = this.props;
    console.log(products)
    return(
      <section className="section-container-products">
        { products.map((element) =>
        <div className="products-section-pizzas">  
        <div className="first-div-products">
          <h1> { element.id } </h1>
          <p>{ element.Text }</p>
          <p>A partir de:</p>
          <p>{ element.Price }</p>
        </div>
        <div>
          <img className="pizza-image-products" src={ element.SourceImage } alt={ element.id } />
        </div>
        </div>
        )}
      </section>
    )
  }
}

export default Pizzas;
