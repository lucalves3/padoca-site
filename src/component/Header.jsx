import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    const { imageLogo } = this.props;
    const { id, text, src } = imageLogo;
    console.log(imageLogo[0].src)
      return(
        <header className="header-container">
          <section className="first-section">
            <section>
            {/* <input className="header-button-left" type='button' value="Sobre" />
            <input className="header-button-left" type='button' value="Home" /> */}
            </section>
            <img id="image-logo" src={ imageLogo[0].src } alt={ imageLogo[0].text }   key={ imageLogo[0].id } />
            <section>
            {/* <input className="header-button" type='button' value="Cardápio" />
            <input className="header-button" type='button' value="Contato" /> */}
            <Link className="header-button" to="/Login">Login</Link>
            <Link cclassName="header-button" to="/Cardápio">Cardápio</Link>
            </section>
          </section>
          <section className="header-part-two">
            {/* <img className="big-image-header" src={imageLogo[4].src} /> */}
          </section>
        </header>
    )
  }
}

export default Header;
