import React, { useState } from 'react';


export function Header (){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
      return (
        <header>
          <figure>
            <img className="logo" src="../../src/assets/pngtree-golden-lucky-clover-png-image_822741-removebg-preview.png" alt="" />
          </figure>
    
          <div className="menu_container">
            <button className="menu" onClick={toggleMenu}> <i className="gg-menu"></i> </button>
          </div>
    
          <div className={`fullscreen_menu ${menuOpen ? 'open' : ''}`}>
            <button className="close_button" onClick={toggleMenu}><i class="gg-close"></i></button>
            {/* Adicione os itens do menu aqui */}
            <ul className='ul_menu'>
              <li className='li_menu title2'> <a>Inicio</a></li>
              <li className='li_menu title2'><a>Camapnhas</a></li>
              <li className='li_menu title2'><a>Contato</a></li>
              {/* ... */}
            </ul>
          </div>
        </header>
      );
}
