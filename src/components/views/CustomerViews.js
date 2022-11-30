import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/LocationList"
import { ProductList } from "../products/ProductList"
import { FindProduct } from "../products/FindProduct"
import "./ApplicationViews.css"

export const CustomerViews = () => {
	return (
		<Routes>

			<Route path="/" element={
				<>
					<div className="headerContainer">
						<h1>Kandy Korner</h1>
						<p>You Deserve A Sweet Treat Today.</p>
					</div>

					<Outlet />
				</>
			} >
				<Route path="home" element={ "/" }/>
				<Route path="locations" element={<LocationList />} />
                <Route path="findproduct" element={< FindProduct />} />
				<Route path="products" element={<ProductList />} />
                <Route path="findproduct" element={< FindProduct />} />
               
			</Route>

		</Routes>

	)
}

