import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe Routes em vez de Switch
import { Home } from "./components/home";
import { Products } from "./components/products/products";


export function AppRoutes (){
    return(
        <Router>
        <Routes> {/* Use Routes em vez de Switch */}
          <Route path="/" element={Home} /> {/* Use element em vez de component */}
          <Route path="/product/:productId" element={Products} />
        </Routes>
      </Router>
    )
}