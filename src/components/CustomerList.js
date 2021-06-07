import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"

export const CustomerList = () => {

    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <>

            <h2>Customers</h2>
            <div className="customers">
                {customers.map(c => {
                    return (
                        <div className="customer">
                            <h3 className="customer__name">{c.name}</h3>
                        </div>
                    )
                })}
            </div>
        </>
    )
}