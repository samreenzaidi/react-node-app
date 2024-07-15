import axios from "axios"; 
import React from "react"; 
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import '../../scss/product.scss'

function ProductList() { 
	const [productList, setProductList] = useState([]); 
	
	useEffect(() => { 
		axios.get('http://localhost:3001/getProductList') 
			.then(result => { 
				setProductList(result.data) 
			}) 
			.catch(err => console.log(err)) 
	}, []) 

	return ( 
		<div className="product-tiles container mt-5"> 
			{Array.isArray(productList) ? ( 
			<ul className="row"> 
				{productList.map((data) => ( 
				<li key={data._id} className="col-md-4">
					<Link to={{ pathname: `/productdetail/${data._id}` }}>
						<div className="container py-5">
							<div className="card text-black">
								<img src={data.productImage} className="card-img-top" alt="" />
								<div className="card-body">
									<div className="text-center mt-1">
										<h4 className="card-title">{data.productName}</h4>
										<h6 className="text-primary mb-1 pb-3">{data.productPrice}</h6>
									</div>
									<div className="d-flex flex-row">
										<button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary flex-fill me-1" data-mdb-ripple-color="dark">
											Add to cart
										</button>
									</div>
								</div>
							</div>
						</div>
					</Link>
				</li>
				))} 
			</ul> 
			) : ( 
				<span>Loading products...</span> 
			)} 
		</div> 
	) 
} 
export default ProductList;
