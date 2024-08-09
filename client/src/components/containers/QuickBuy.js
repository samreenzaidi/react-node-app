import axios from "axios"
import React, { useState, useEffect } from "react"
import '../../scss/product.scss'
import { addItemToCartAction } from "../redux/action/CartAction"
import { toggleQBModalAction } from "../redux/action/QBModalAction"
import { useDispatch } from "react-redux"

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
                        <div className="quick-buy-content">
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
                        </div>
                        <div className="quick-buy-footer">
                            <div className="add-to-bag-container">
                                <div className="quantity-selector__wrapper disable-dropdown">
                                    <div className="quantity-selector__controls">
                                    <div data-id="button-decrement-quantity-plp-quick-buy" data-cs-override-id="button-decrement-quantity-plp-quick-buy" tabindex="0" role="button" aria-label="decrement quantity" className="quantity-selector__button quantity-selector__disabled" aria-hidden="true">-</div>
                                    <div className="quantity-selector__field">
                                        <input readonly="" aria-label="Current quantity is ,1," type="text" data-id="field-selector-quantity-plp-quick-buy" data-cs-override-id="field-selector-quantity-plp-quick-buy" value="1"/>
                                        <div className="dropdown__wrapper">
                                            <select className="form-control" data-id="field-selector-quantity-mobile-plp-quick-buy" data-cs-override-id="field-selector-quantity-mobile-plp-quick-buy">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                            </select>
                                            <span className="dropdown__icon"></span>
                                        </div>
                                    </div>
                                    <div data-id="button-increment-quantity-plp-quick-buy" data-cs-override-id="button-increment-quantity-plp-quick-buy" tabindex="0" role="button" aria-label="increment quantity" className="quantity-selector__button" aria-hidden="false">+</div>
                                    </div>
                                </div>
                                <div className="add-to-bag-button-wrapper">
                                    <div><button data-id="button-addtobag-button-quick-buy-atb" data-cs-override-id="button-addtobag-button-quick-buy-atb" aria-label="Add to basket" aria-controls="" aria-setsize="" aria-posinset="" aria-hidden="false" role="button" tabindex="0" id="zca611vfka" type="button" className="btn btn-primary btn-default add-to add-to-bag">Add to basket</button></div>
                                </div>
                            </div>
                            <div>
                                <a className="text-underline-hover product-link" title="Navy Super-Soft Knee High Socks 3 Pack" target="" data-id="product-link-" data-cs-override-id="product-link-" href="#">
                                    Full product information
                                    <span data-id="" data-cs-override-id="" className="icon"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="close" aria-label="close dialog" role="button" type="button" onClick={closeQuickBuyModal}>
                    <span role="button" className="icon">Ok</span>
                </button>    
            </div>
        </div>
	) 
} 
export default connect(mapStateToProps)(QuickBuy)
