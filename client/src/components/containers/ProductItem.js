import axios from "axios"; 
import React from "react"; 
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import '../../scss/product.scss'

const ProductList = ({product, addToCart}) => {
	return ( 
		<li className="col-md-3 product-mini-outer-container" id={`productId-${product._id}`}>
			<Link to={{ pathname: `/product/${product._id}` }}>
			<div className="product-mini">
				<div className="mini-container">
					<div className="mini-image-container">
						<div className="product-image-slider-outer-container">
							<picture>
								<source srcSet={product.images[0]} type="image/webp"/>
								<img className="primary-image" src={product.images[0]} alt="Blue Striped Lemon Fresh Start T-Shirt" title="Blue Striped Lemon Fresh Start T-Shirt" width="" height="305"/>
							</picture>
						</div>
						<div className="add-to-bag-plp" focusable="true" tabIndex="0" onClick={addToCart}>
							<div aria-label={"Add to cart" + " " + product.title} tabIndex="0" role="button" className="atb-initial atb-clickable">
								<div className="atb-standard"><img src="https://global.direct.asda.com/on/demandware.static/-/Library-Sites-ASDAShared/default/v1721359331266/CommonSVG/quick-buy.svg" width="40" height="40" alt="Quick Buy Icon"/></div>
							</div>
						</div>
					</div>
					<div role="button" tabIndex="0" aria-label="Add product to save for later" className="save-for-later">
						<span className="icon hover-sfl">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 33 33">
								<g id="V2_Desktop_PDP" data-name="V2 Desktop PDP" transform="translate(-569 -942)">
									<circle id="Ellipse_1" data-name="Ellipse 1" cx="16.5" cy="16.5" r="16.5" transform="translate(569 942)" fill="#fff"></circle>
									<path id="Web" d="M12.707,5.75A4.789,4.789,0,0,1,13.943,3.5a5.448,5.448,0,0,1,4.235-1.667c3.265,0,5.471,2.417,5.471,6.417,0,8.833-11.029,13.583-11.029,13.583S1.59,17.083,1.59,8.25C1.59,4.667,3.8,1.833,7.06,1.833A5.24,5.24,0,0,1,11.207,3.5a5.916,5.916,0,0,1,1.324,2.25,1.254,1.254,0,0,1,.088.333A1.252,1.252,0,0,1,12.707,5.75Z" transform="translate(572.881 947.667)" fill="#da291c"></path>
								</g>
							</svg>
						</span>
						<span className="icon status-sfl">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 33 33">
								<g id="V2_Desktop_PDP" data-name="V2 Desktop PDP" transform="translate(-369 -942)">
									<circle id="Ellipse_1" data-name="Ellipse 1" cx="16.5" cy="16.5" r="16.5" transform="translate(369 942)" fill="#fff"></circle>
									<path id="Web" d="M16.678,16.75c3-2.5,4.765-5.333,4.765-8.417C21.443,5.417,20.207,4,18.09,4c-2.206,0-4.059,2.167-5.559,6.417C11.031,6.167,9.266,4,7.06,4,5.119,4,3.707,5.667,3.707,8.333c0,3.083,1.765,5.917,4.765,8.417a25.756,25.756,0,0,0,4.059,2.667A29.045,29.045,0,0,0,16.678,16.75Zm-3.971-11A4.789,4.789,0,0,1,13.943,3.5a5.448,5.448,0,0,1,4.235-1.667c3.265,0,5.471,2.417,5.471,6.417,0,8.833-11.029,13.583-11.029,13.583S1.59,17.083,1.59,8.25C1.59,4.667,3.8,1.833,7.06,1.833A5.24,5.24,0,0,1,11.207,3.5a5.916,5.916,0,0,1,1.324,2.25,1.254,1.254,0,0,1,.088.333A1.252,1.252,0,0,1,12.707,5.75Z" transform="translate(372.881 947.667)" fill="#191919"></path>
								</g>
							</svg>
						</span>
					</div>
					<div className="price__wrapper"><span className="price-simplified"><span className="price"><span> {product.price}</span></span></span></div>
					<div className="product-title">{product.title}</div>
				</div>
			</div>
			</Link>
		</li>
	) 
} 
export default ProductList;
