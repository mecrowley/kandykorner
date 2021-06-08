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

    

    return (
        <>

            <h2>Customers</h2>
            <div className="customers">
                {customers.map(c => {
                    const customerOrders = customerCandys.filter(order => c.id === order.customerId)
                    return (
                        <div className="customer">
                            <h3 className="customer__name">{c.name}</h3>
                            <div className="customer__candys">Candies Bought: {customerOrders.length}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}