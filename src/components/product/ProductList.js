import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { CustomerCandyContext } from "../customerCandy/CustomerCandyProvider";
import "./Product.css"

export const ProductList = () => {

  const { products, getProducts } = useContext(ProductContext)
  const { addCustomerCandy } = useContext(CustomerCandyContext)

  useEffect(() => {
    console.log("ProductList: useEffect - getProducts")
    getProducts()
  }, [])


  return (
    <>
      <h2>Products</h2>
      <section className="products">
        {console.log("ProductList: Render", products)}
        {
          products.map(product => {
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