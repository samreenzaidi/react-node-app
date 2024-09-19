import axios from "axios"
import React, { useState, useEffect } from "react"
import '../../scss/product.scss'
import { addItemToCartAction } from "../redux/action/CartAction"
import { toggleQBModalAction } from "../redux/action/QBModalAction"
import { useDispatch, connect } from "react-redux"

const QuickBuy = ({product}) => {
    const [cartItems, setCartItems] = useState([]); 
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

    const closeQuickBuyModal = () => {
        dispatch(toggleQBModalAction(false))
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
                        {/* <div className="quick-buy-content">
                            <div className="attribute-group">
                                <div className="attribute-group--title"><span className="bold">Size: </span>4-8</div>
                                <div className="attributes-wrapper">
                                    <div className="product-attribute-selector" data-id="attribute-selector-container" data-cs-override-id="attribute-selector-container">
                                        <span className="selector-name" data-id="attribute-selector-label" data-cs-override-id="attribute-selector-label">Size</span>
                                        <div className="attribute-wrapper grid__list columns-number-4" role="radiogroup">
                                            <div className="attribute selected" data-id="button-attribute-selector-size" data-cs-override-id="button-attribute-selector-size" tabindex="0" role="button" aria-label="Size - 4-8  selected">
                                                <span role="icon" name="tick" className="icon"></span>
                                                <span data-id="attribute-selector-value" data-cs-override-id="attribute-selector-value">4-8</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="quick-buy-footer">
                            <div className="add-to-bag-container">
                                <div className="quantity-selector__wrapper">
                                    <div className="quantity-selector__controls">
                                        <div data-id="button-decrement-quantity-plp-quick-buy" data-cs-override-id="button-decrement-quantity-plp-quick-buy" tabindex="0" role="button" aria-label="decrement quantity" className="quantity-selector__button quantity-selector__disabled" aria-hidden="true">-</div>
                                        <div className="quantity-selector__field">
                                            <input readonly="" aria-label="Current quantity is ,1," type="text" data-id="field-selector-quantity-plp-quick-buy" data-cs-override-id="field-selector-quantity-plp-quick-buy" value="1"/>
                                        </div>
                                        <div data-id="button-increment-quantity-plp-quick-buy" data-cs-override-id="button-increment-quantity-plp-quick-buy" tabindex="0" role="button" aria-label="increment quantity" className="quantity-selector__button" aria-hidden="false">+</div>
                                    </div>
                                </div>
                                <div className="add-to-bag-button-wrapper">
                                    <button data-id="button-addtobag-button-quick-buy-atb" data-cs-override-id="button-addtobag-button-quick-buy-atb" aria-label="Add to basket" aria-controls="" aria-setsize="" aria-posinset="" aria-hidden="false" role="button" tabindex="0" id="zca611vfka" type="button" className="btn btn-primary btn-default add-to add-to-bag">Add to basket</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
	) 
} 

function mapStateToProps(state) {
    const { toggleQBModal } = state
    return toggleQBModal
}
export default connect(mapStateToProps)(QuickBuy)
