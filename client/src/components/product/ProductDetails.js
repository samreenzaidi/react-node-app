
import axios from "axios"; 
import React, { useEffect, useState } from "react"; 
import { useParams } from 'react-router-dom';

function ProductDetail() { 
    const [product, setProductdetails] = useState([]); 
    const { productId } = useParams();
    useEffect(() => { 
		axios.get(`http://localhost:3001/getProductDetails/${productId}`) 
			.then(result => { 
				setProductdetails(result.data) 
			}) 
			.catch(err => console.log(err)) 
	}, []) 

	return ( 
		<div className="product-details container mt-5"> 
			<div className="row">
				<div className="col-md-6">
				<div className="card-image">
					<img src={product.productImage} alt="" style={{width: "100%", height: "100%"}}/>
				</div>
				</div>
				<div className="col-md-6">
					<h5 className="product-name">{product.productName}</h5>
					<p className="product-desc">{product.productDescription}</p>
					<p className="product-price"><b>${product.productPrice}.00</b></p>
					<button className="btn-add"><b>ADD TO CART</b></button>
				</div>
			</div>
			
		</div> 
	) 
} 
export default ProductDetail;


