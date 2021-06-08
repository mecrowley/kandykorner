import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "./ProductProvider"
import { CustomerCandyContext } from "../customerCandy/CustomerCandyProvider";
import "./Product.css"

export const ProductList = () => {

  const { products, getProducts, searchTerms } = useContext(ProductContext)
  const { addCustomerCandy } = useContext(CustomerCandyContext)
  const [ filteredProducts, setFiltered] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = products.filter(product => product.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      setFiltered(products)
    }
  }, [searchTerms, products])

  return (
    <>
      <h2 className="products__h2">Products</h2>
      <section className="products">
        {
          filteredProducts.map(product => {
            return (
              <div className="product" id={`product--${product.id}`}>
                <div className="product__name">
                  <h3>{product.name}</h3>
                </div>
                <div className="product__info">
                  <div className="product__type">
                    Type: {product.productType.name}
                  </div>
                  <div className="product__price">
                    Price: {product.price}
                  </div>
                </div>
                <button onClick={event => {
                  addCustomerCandy({
                    customerId: parseInt(localStorage.getItem("kandy_customer")),
                    productId: product.id
                  })
                }}>Add to order</button>
              </div>
            )
          })
        }
      </section>
    </>
  )
}