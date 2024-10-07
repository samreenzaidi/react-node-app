import axios from "axios"; 
import { useEffect, useState } from "react"; 
import { CartAction } from "../redux/action/CartAction"
import { useDispatch } from "react-redux"

const useAddItemToCart = ({product, closeQuickBuyModalEventCall}) => {
    const dispatch = useDispatch()
    const [qty, setQty] = useState(0)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = () => {
        const {sku, title, description, category, price, images, thumbnail} = product
        axios.post('http://localhost:5000/addToCart', { sku, title, description, category, price, images, thumbnail }) 
			.then(result => { 
				setCartItems({...cartItems, qty}) 
                dispatch(CartAction({...cartItems, qty}))
                closeQuickBuyModalEventCall()
			}) 
			.catch(err => console.log(err)) 
    }

    const decrementItemQty = () => {
        setQty(qty - 1)
    }

    const incrementItemQty = () => {
        setQty(qty + 1)
    }
    return (
        <div className="add-to-bag-container">
            <div className="quantity-selector__wrapper">
                <div className="quantity-selector__controls">
                    <div tabIndex="0" role="button" aria-label="decrement quantity" className={"quantity-selector__button" + " " + ((qty == 0) ? "quantity-selector__disabled" : "")} aria-hidden="true" onClick={decrementItemQty}>-</div>
                    <div className="quantity-selector__field">
                        <input aria-label="Current quantity is ,1," type="text" value={qty}/>
                    </div>
                    <div tabIndex="0" role="button" aria-label="increment quantity" className="quantity-selector__button" aria-hidden="false" onClick={incrementItemQty}>+</div>
                </div>
            </div>
            <div className="add-to-bag-button-wrapper">
                <button aria-label="Add to cart" aria-controls="" aria-setsize="" aria-posinset="" aria-hidden="false" role="button" tabIndex="0" type="button" className={"btn btn-primary btn-default add-to add-to-bag" + " " + ((qty == 0) ? "add-to-bag__disabled" : "")} onClick={addItemToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default useAddItemToCart