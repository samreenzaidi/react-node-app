
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import AddItemToCart from "../containers/AddItemToCart"

const ProductDetails = () => {
    const [product, setProduct] = useState([])
    const { productSKU } = useParams()

    useEffect(() => { 
		axios.get(`http://localhost:5000/getProductDetails/${productSKU}`) 
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
					<AddItemToCart product={product} />
				</div>
			</div>
			
		</div> 
	) 
} 
export default ProductDetails;


