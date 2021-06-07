import React, { useContext, useEffect } from "react";
import { CustomerCandyContext } from "./customerCandy/CustomerCandyProvider";
import "./MyOrder.css"

export const MyOrder = () => {

    const { getCustomerCandys, customerCandys } = useContext(CustomerCandyContext)

    useEffect(() => {
        getCustomerCandys()
    }, [])

    const myOrderedProducts = customerCandys.filter(c => c.customerId === parseInt(localStorage.getItem("kandy_customer")))

    myOrderedProducts.sort((a, b) => {
        return a.productId - b.productId
    })

    const productQuantities = [{ product: {} }]

    myOrderedProducts.forEach(p => {
        const lastProduct = [...productQuantities].pop()
        if (p.productId !== lastProduct.productId) {
            const productObj = {
                productId: p.productId,
                name: p.product.name,
                price: p.product.price,
                quantity: 1
            }
            productQuantities.push(productObj)
        } else {
            lastProduct.quantity += 1
            productQuantities.pop()
            const productObj = {
                productId: p.productId,
                name: p.product.name,
                price: p.product.price,
                quantity: lastProduct.quantity
            }
            productQuantities.push(productObj)
        }
    });

    productQuantities.shift()


    return (
        <>
            <h2>My Order</h2>
            <div className="myOrder">
                <div className="order__header">
                    <div className="candy__header detail">Candy</div>
                    <div className="quantity__header detail">Quantity</div>
                    <div className="price__header detail">Price</div>
                </div>
                {productQuantities.map(p => {
                    return (
                        <div className="customerCandy">
                            <div className="candy__name detail">{p.name}</div>
                            <div className="candy__quantity detail">{p.quantity}</div>
                            <div className="candy__price detail">{
                            (p.quantity * p.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                            }</div>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}