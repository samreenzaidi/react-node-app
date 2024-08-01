import axios from "axios"
import React, { useEffect, useState } from "react"
import '../../scss/product.scss'
import ProductItem from "./ProductItem"

function ProductList() { 
	const [products, setProducts] = useState([])
	const [cartItems, setCartItems] = useState([]); 
	
	useEffect(() => { 
		axios.get('http://localhost:5000/getProductList') 
			.then(result => { 
				setProducts(result.data) 
			}) 
			.catch(err => console.log(err)) 
	}, []) 

	const handleAddToCart = ((e, product) => {
		const {title, description, category, price, stock, sku, images, thumbnail} = product
		e.preventDefault()
		axios.post('http://localhost:5000/addToCart', { title, description, category, price, stock, sku, images, thumbnail }) 
			.then(result => { 
				setCartItems(result.data) 
			}) 
			.catch(err => console.log(err)) 
	})

	return ( 
		<div className="container plp-container mt-5"> 
			{Array.isArray(products) ? ( 
				<ul className="row product-list"> 
					{products.map((product) => ( 
						<ProductItem key={product._id}  product={product} addToCart={(e) => handleAddToCart (e, product)}/>
					))} 
				</ul> 
			) : ( 
				<span>Loading products...</span> 
			)} 
		</div> 
	) 
} 
export default ProductList;
