import React from 'react';

class Header extends React.Component {
  render() {
    const { imageLogo } = this.props;
    const { id, text, src } = imageLogo;
    console.log(imageLogo[0].src)
      return(
        <header>
          <img src={ imageLogo[0].src } alt={ imageLogo[0].text } key={ imageLogo[0].id } />
        </header>
    )
  }
}

export default Header;
