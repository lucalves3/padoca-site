import React from 'react';

class Pizzas extends React.Component {
  render() {
    const { products } = this.props;
    return(
      <section className="section-container-products">
        { products.map((element) =>
        <div className="products-section-pizzas">  
        <div className="first-div-products">
          <h1> { element.id } </h1>
          <p>{ element.Text }</p>
          <p><strong className="strong-price">{ element.Price }</strong></p>
        </div>
        <div className="image-addtocart">
          <img className="pizza-image-products" src={ element.SourceImage } alt={ element.id } />
          <button 
          className="button-add-to-cart"
          type="button"
          >
          <svg
          xmlns="http://www.w3.org/2000/svg" 
          width="45" height="45" fill="#f09715"
          class="bi bi-cart-plus-fill" 
          viewBox="0 0 16 16">
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
          </svg>
          </button>
        </div>
        </div>
        )}
      </section>
    )
  }
}

export default Pizzas;
