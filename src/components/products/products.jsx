import React, { useState } from "react";
import { AiFillFacebook } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Description } from './description';
import { CardDestque } from '../card/destaqueCard';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export function Products({ product }) {
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct; //Aqui esta dando Undefined
  console.log(selectedProduct)
  
//   const { productId } = useParams();

  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0); 

  const handleQuantityChange = (option) => {
    const newQuantity = quantity + option;
    setQuantity(newQuantity);
    setTotal((newQuantity * 0.04).toFixed(2));
  };
  
  return (
    
    <>
      {product ? (
        <CardDestque
          productImg={product.image}
          productName={product.name}
          productDescription={product.description}
        />
      ) : (
        <CardDestque
          productImg={"URL da imagem padrão"}
          productName="Nome do Produto Padrão"
          productDescription="Descrição do Produto Padrão"
        />
      )}

      <div className="information_container">
        <div className="price_product">
          <p className="body">POR APENAS <span className="title3">R$ 0,04</span> </p>
        </div>
        <div className="section_information">
          <p className='body'>Sorteio <span className='title3'>04/10/23 ás 19h00</span></p>
          <div>
            <AiFillFacebook className='Fa' size={30} />
            <FaWhatsappSquare className='Whats' size={30}/>
            <FaInstagramSquare className='Insta' size={30}/>
            <FaTwitterSquare className='Tw' size={30}/>
          </div>
        </div>
        <div className="select_value">
          <div className='qunatity_Select'>
            <div className='quantity_continer'>
              <span className='body desc'>Quanto mais produtos comprar, maiores são as suas chances de ganhar!</span>
              <div className="left-column">
                <button className='button_quantity title3' onClick={() => handleQuantityChange(40)}>
                  +40
                  <span className='body'>SELECIONAR</span>
                </button>
                <div className='button_quantity title3' onClick={() => handleQuantityChange(60)}>
                  +60
                  <span className='body'>SELECIONAR</span>
                </div>
                <div className='button_quantity title3' onClick={() => handleQuantityChange(60)}>
                  +60
                  <span className='body'>SELECIONAR</span>
                </div>
              </div>
              <div className="right-column">
                <button className='button_quantity title3' onClick={() => handleQuantityChange(200)}>
                  +200
                  <span className='body'>SELECIONAR</span>
                </button>
                <button className='button_quantity title3' onClick={() => handleQuantityChange(300)}>
                  +300
                  <span className='body'>SELECIONAR</span>
                </button>
                <button className='button_quantity title3' onClick={() => handleQuantityChange(500)}>
                  +500
                  <span className='body'>SELECIONAR</span>
                </button>
              </div>
              <div className="input_value_section">
                <button className="body" onClick={() => handleQuantityChange(-1)}><i className="gg-remove"></i></button>
                <input disabled className="input_value" value={quantity} />
                <button className="body" onClick={() => handleQuantityChange(1)}><i className="gg-add"></i></button>
              </div>
            </div>
            <div className='button_container'>
                <button className='button_checkout'>
                    <i className="gg-check-o"></i> 
                    <span className='title3 sec'>Quero Participar</span>
                </button>
                <span className='body total_value'>R$ {total}</span>
            </div>
          </div>
        </div>
        <Description/>
      </div>
    </>
  );
}
