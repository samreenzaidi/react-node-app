import axios from "axios"
import React, { useEffect, useState } from "react"
import '../../scss/product.scss'
import ProductItem from "../containers/ProductItem"
import { addItemToCartAction } from "../redux/action/CartAction"
import { useDispatch } from "react-redux"

const ProductListing = () => {
	const [products, setProducts] = useState([])
	const [cartItems, setCartItems] = useState([]); 
	const dispatch = useDispatch();
	
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
				dispatch(addItemToCartAction(cartItems))
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
export default ProductListing;
