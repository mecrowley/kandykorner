import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { ProductProvider } from "./product/ProductProvider";
import { ProductList } from "./product/ProductList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm";
import { CustomerCandyProvider } from "./customerCandy/CustomerCandyProvider";
import { MyOrder } from "./MyOrder";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <h1>Kandy Korner</h1>
            </Route>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <CustomerCandyProvider>
                    <Route exact path="/products">
                        <ProductList />
                    </Route>
                </CustomerCandyProvider>
            </ProductProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>

            <ProductProvider>
                <CustomerCandyProvider>
                    <Route exact path="/MyOrder">
                        <MyOrder />
                    </Route>
                </CustomerCandyProvider>
            </ProductProvider>
        </>
    )
}