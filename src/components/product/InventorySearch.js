import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import "./Product.css"

export const InventorySearch = () => {
    const { setSearchTerms } = useContext(ProductContext)

    return (
        <>
            <div className="productSearch">
                Product search:
      <input type="text"
                    className="input--wide"
                    onKeyUp={(event) => setSearchTerms(event.target.value.toLowerCase())}
                    placeholder="Search for a product... " />
            </div>
        </>
    )
}