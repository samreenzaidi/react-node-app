import axios from "axios"
import React, { useState, useEffect } from "react"
import '../../scss/product.scss'
import { addItemToCartAction } from "../redux/action/CartAction"
import { useDispatch } from "react-redux"

const QuickBuy = ({product, closeQuickBuyModal}) => {
    const [cartItems, setCartItems] = useState([]); 
    const [qty, setQty] = useState(0)
    const {title, description, category, price, stock, sku, images, thumbnail} = product
    const dispatch = useDispatch();

    useEffect(() => { 
        axios.post('http://localhost:5000/addToCart', { title, description, category, price, stock, sku, images, thumbnail }) 
            .then(result => { 
                setCartItems(result.data) 
                dispatch(addItemToCartAction(cartItems))
            }) 
            .catch(err => console.log(err)) 
        }, 
    []) 

    const decrementQty = () => {
        setQty(qty - 1)
    }

    const incrementQty = () => {
        setQty(qty + 1)
    }
       
	return ( 
        <div className="quick-buy-modal" id="modal">
            <div className="quick-buy-modal-content">
                <button className="close" aria-label="close dialog" role="button" type="button" onClick={closeQuickBuyModal}>
                    <span role="button" className="icon">
                        <svg role="presentation" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 511.058 511.058"><path id="XIcon-a" d="M511.058 60.811l-60.039-60.821l-194.083 194.929l-194.243-194.83l-60.519 60.859l194.443 194.993l-194.634 195.075l60.679 61.192l194.78-194.571l194.514 195.067l60.764-60.546l-194.35-194.148z"></path></svg>
                    </span>
                </button>  
                <div className="quick-buy-wrapper">
                    <div className="quick-buy-wrapper-left">
                        <img className="primary-image" src={product.images[0]} alt="Blue Striped Lemon Fresh Start T-Shirt" title="Blue Striped Lemon Fresh Start T-Shirt" width="" height="305"/>
                    </div>
                    <div className="quick-buy-wrapper-right">
                        <div className="quick-buy-header">
                            <div className="product-info-section">
                                <div className="price__wrapper"><span className="price-simplified"><span className="price"><span> AED36</span></span></span></div>
                                <div className="title">Navy Super-Soft Knee High Socks 3 Pack</div>
                                <div className="quick-buy-badges"></div>
                            </div>
                        </div>
                        <div className="quick-buy-footer">
                            <div className="add-to-bag-container">
                                <div className="quantity-selector__wrapper">
                                    <div className="quantity-selector__controls">
                                        <div tabIndex="0" role="button" aria-label="decrement quantity" className={"quantity-selector__button" + " " + ((qty == 0) ? "quantity-selector__disabled" : "")} aria-hidden="true" onClick={decrementQty}>-</div>
                                        <div className="quantity-selector__field">
                                            <input aria-label="Current quantity is ,1," type="text" value={qty}/>
                                        </div>
                                        <div tabIndex="0" role="button" aria-label="increment quantity" className="quantity-selector__button" aria-hidden="false" onClick={incrementQty}>+</div>
                                    </div>
                                </div>
                                <div className="add-to-bag-button-wrapper">
                                    <button aria-label="Add to basket" aria-controls="" aria-setsize="" aria-posinset="" aria-hidden="false" role="button" tabIndex="0" type="button" className={"btn btn-primary btn-default add-to add-to-bag" + " " + ((qty == 0) ? "add-to-bag__disabled" : "")}>Add to basket</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
	) 
} 

export default QuickBuy
