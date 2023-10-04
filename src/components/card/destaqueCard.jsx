import React from "react";
// import { IMG } from '../../assets/20231001_6519910aaafbb.jpeg'

export function CardDestque ({productImg,productName,productDescription}) {
    return (
        <>
            <li className="destaque_li li_card">
                <img className="destaque_img" src={productImg} alt="" />
                <div className="destaque_informations">
                    <p className="title3">{productName}</p>
                    <span className="body">{productDescription} </span>
                    <p className=" blinking-text title4">Corre que esta acabando!</p>
                </div>
            </li>
        </>
    )
}