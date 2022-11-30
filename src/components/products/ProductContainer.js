import { useState } from "react"
import { ProductSearch } from "../products/ProductSearch"
import { ProductList } from "../products/ProductList"

export const ProductContainer = () => { 

    const [searchTerms, setSearchTerms] = useState("")

    return (
        <>
        < ProductSearch setterFunction={setSearchTerms}/> 
        < ProductList searchTermState={searchTerms}/> 
        </>
    )
}