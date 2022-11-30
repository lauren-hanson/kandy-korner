import { ProductSearch } from "./ProductSearch"
import "./FindProduct.css"

export const FindProduct = () => {

    return (
        <>
            <div className="findProduct">
                <h2>What candy are you looking for?</h2>

                < ProductSearch /> 

            </div>
        </>
    )
}