import React from "react"
import './KandyKorner.css'
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { ProductProvider } from "./product/ProductProvider";
import { ProductList } from "./product/ProductList";

export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <h2>Products</h2>
        <ProductProvider>
            <ProductList />
        </ProductProvider>
    </>
)