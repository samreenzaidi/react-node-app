
import axios from "axios"; 
import React, { useEffect, useState } from "react"; 
import { useParams } from 'react-router-dom';

function ProductDetails() { 
    const [product, setProduct] = useState([]); 
    const { productId } = useParams();
    useEffect(() => { 
		axios.get(`http://localhost:5000/getProductDetails/${productId}`) 
			.then(result => { 
				setProduct(result.data) 
			}) 
			.catch(err => console.log(err)) 
	}, []) 

	return ( 
		<div className="product-details container mt-5"> 
			<div className="row">
				<div className="col-md-6">
					<div className="card-image">
						<img src={product?.images} alt="" style={{width: "100%", height: "100%"}}/>
					</div>
				</div>
				<div className="col-md-6">
					<h5 className="product-name">{product.title}</h5>
					<p className="product-desc">{product.description}</p>
					<p className="product-price"><b>${product.price}.00</b></p>
					<button type="button" class="btn btn-dark" data-mdb-ripple-init>Add to cart</button>
				</div>
			</div>
			
		</div> 
	) 
} 
export default ProductDetails;


