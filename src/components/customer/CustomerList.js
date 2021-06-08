import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCandyContext } from "../customerCandy/CustomerCandyProvider";
import "./Customer.css"

export const CustomerList = () => {

    const { customers, getCustomers } = useContext(CustomerContext)
    const { customerCandys, getCustomerCandys } = useContext(CustomerCandyContext)

    useEffect(() => {
        getCustomers().then(getCustomerCandys)
    }, [])

    const customerCandyPurchases = []

    customers.forEach(c => {
        let candiesPurchased = 0
        for (const order of customerCandys) {
            if (c.id === order.customerId) {
                candiesPurchased += 1
            }
        }
        const customerCandyPurchase = {
            name: c.name,
            candiesPurchased: candiesPurchased
        }
        customerCandyPurchases.push(customerCandyPurchase)
    });

    customerCandyPurchases.sort((a, b) => {
        return b.candiesPurchased - a.candiesPurchased
    })

    return (
        <>

            <h2>Customers</h2>
            <div className="customers">
                {customerCandyPurchases.map(c => {
                    return (
                        <div className="customer">
                            <h3 className="customer__name">{c.name}</h3>
                            <div className="customer__candys">Candies Bought: {c.candiesPurchased}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}