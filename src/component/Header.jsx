import React from 'react';

class Header extends React.Component {
  render() {
    const { imageLogo } = this.props;
    const { id, text, src } = imageLogo;
    console.log(imageLogo[0].src)
      return(
        <header className="header-container">
          <img id="image-logo" src={ imageLogo[0].src } alt={ imageLogo[0].text } key={ imageLogo[0].id } />
          <h1>Padoca Juá</h1>
          <section>
          <input id="header-button" type='button' value="Cardápio" />
          <input id="header-button" type='button' value="Contato" />
          </section>
        </header>
    )
  }
}

export default Header;
