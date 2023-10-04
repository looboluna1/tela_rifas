import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Outlet,RouterProvider, Route } from "react-router-dom";
import { Home } from "./components/home";
import { Products } from "./components/products/products";
import { useLocation } from 'react-router-dom';

export function AppRoutes (){

    return(
        <Router>
            <Routes>
                <Route  path="/"
                  element={<Home/>}
                />
                <Route path="/product/:productId" element={<Products />} />
            </Routes>
        </Router>
    )
}