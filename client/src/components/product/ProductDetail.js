
import axios from "axios"; 
import React, { useEffect, useState } from "react"; 
import { useParams } from 'react-router-dom';

function ProductDetail() { 
    const [productdetails, setProductdetails] = useState([]); 
    const { productId } = useParams();
    useEffect(() => { 
		axios.get(`http://localhost:3001/getProductDetails/${productId}`) 
			.then(result => { 
				setProductdetails(result.data) 
			}) 
			.catch(err => console.log(err)) 
	}, []) 

	return ( 
		<div className="product-detail container mt-5"> 
			
		</div> 
	) 
} 
export default ProductDetail;
