import React from "react";
import { Link } from 'react-router-dom';

export function Cards ({productImg,productName,productDescription,productLink}) {
    return (
        <>
        <li className="li_card"  >
        {/* <Link to={productLink}> */}
            <img className="img_card" src={productImg} alt="" />
            <div className="container_informations">
                <p className="title3">{productName}</p>
                <span className="body">{productDescription} </span>
                <p className="blinking-text title4">Corre que esta acabando!</p>
            </div>
      {/* </Link> */}
        </li>
        </>
    )
}