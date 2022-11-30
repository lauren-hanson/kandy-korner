import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/LocationList"
import { ProductList } from "../products/ProductList"
import { NewProductForm } from "../products/NewProductForm"
import { EmployeeList } from "../employees/EmployeeList"
import { NewEmployeeForm } from "../employees/NewEmployeeForm"
import "./ApplicationViews.css"

export const EmployeeViews = () => {
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
				<Route path="products" element={<ProductList />} />
				<Route path="products/addproduct" element={<NewProductForm />} />
				<Route path="employees" element={< EmployeeList />} />
				<Route path="employees/newhire" element={< NewEmployeeForm />} />



			</Route>

		</Routes>

	)
}

