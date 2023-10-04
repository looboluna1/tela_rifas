import { Cards } from "../card/card";
import { CardDestque } from "../card/destaqueCard";
import { Link } from "react-router-dom";

export function Home (){
    const productsArray = [
        // Produto 1
        {
          productId: 1,
          image: "../../src/assets/20231001_6519910aaafbb.jpeg",
          name: "1 SAVEIRO CROSS 2014 + 1 BMW G310 GS 2023 (513)",
          description: "Imagina ganhar 1 SAVEIRO CROSS 2014 + 1 BMW G310 GS 2023  com apenas 0,27 centavos?",
          link: "Paintings",
        },
       
       
        // Produto 3 (adicione os produtos restantes abaixo)
        {
          productId: 2,
          image: "../../src/assets/20231001_6519910aaafbb.jpeg",
          name: "1 SAVEIRO CROSS 2014 + 1 BMW G310 GS 2023 (513)",
          description: "Imagina ganhar 1 SAVEIRO CROSS 2014 + 1 BMW G310 GS 2023  com apenas 0,27 centavos?",
          link: "Paintings"
        },
        // Produto 4
        {
          productId: 3,
          image: "../../src/assets/20231001_6519910aaafbb.jpeg",
          name: "1 SAVEIRO CROSS 2014 + 1 BMW G310 GS 2023 (513)",
          description: "Imagina ganhar 1 SAVEIRO CROSS 2014 + 1 BMW G310 GS 2023  com apenas 0,27 centavos?",
          link: "Paintings"
        },
        // Produto 5
        {
          productId: 4,
          image: "../../src/assets/20231001_6519910aaafbb.jpeg",
          name: "1 SAVEIRO CROSS 2014 + 1 BMW G310 GS 2023 (513)",
          description: "Imagina ganhar 1 SAVEIRO CROSS 2014 + 1 BMW G310 GS 2023  com apenas 0,27 centavos?",
          link: "Paintings"
        },
        // Produto 6
        {
          productId: 5,
          image: "../../src/assets/20231001_6519910aaafbb.jpeg",
          name: "1 SAVEIRO CROSS 2014 + 1 BMW G310 GS 2023 (513)",
          description: "Imagina ganhar 1 SAVEIRO CROSS 2014 + 1 BMW G310 GS 2023  com apenas 0,27 centavos?",
          link: "Paintings"
        },
        // Produto 7
    
        // Produto 8
        
      ];
    return(
      <div className="home">
      <h2 className="title2">
        ⚡ Campanhas <span className="body sorte">Escolha sua sorte</span>
      </h2>
      <ul>
      {productsArray.map((product, productId) => (
          // <Link to={`/product/${product.productId}`} key={index}>
            <Cards
              productImg={product.image}
              productName={product.name}
              productDescription={product.description}
              productLink={product.link} // Certifique-se de passar a prop productLink
            />
          // </Link>
        ))}
      </ul>
    </div>
    )
}