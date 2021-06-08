import React, { useState, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getProducts = () => {
        return fetch("http://localhost:8088/products?_expand=productType")
        .then(res => res.json())
        .then(setProducts)
    }

    const addProduct = ProductObj => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ProductObj)
        })
        .then(getProducts)
    }

    return (
        <ProductContext.Provider value={{
            products, getProducts, addProduct, searchTerms, setSearchTerms
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}