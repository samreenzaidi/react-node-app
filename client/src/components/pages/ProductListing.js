import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../scss/product.scss'
import ProductItem from '../containers/ProductItem'

const ProductListing = () => {
	const [products, setProducts] = useState([])
	
	useEffect(() => { 
		axios.get('http://localhost:5000/getProductList') 
			.then(result => { 
				setProducts(result.data) 
			}) 
			.catch(err => console.log(err)) 
	}, []) 

	return ( 
		<div className='container plp-container mt-5'> 
			{Array.isArray(products) ? ( 
				<ul className='row product-list'> 
					{products.map((product) => ( 
						<ProductItem key={product._id}  product={product} />
					))} 
				</ul> 
			) : ( 
				<span>Loading products...</span> 
			)} 
		</div> 
	) 
} 
export default ProductListing
