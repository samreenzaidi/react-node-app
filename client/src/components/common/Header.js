import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../../scss/header.scss'
import { useSelector } from "react-redux";
import MiniCart from "../containers/MiniCart"

const Header = () => {
  const totalCartQty = useSelector((state) => state.CartItems.totalCartQty);
  const [showMiniCart, setShowMiniCart] = useState(false)

  useEffect(() => { 
		if(totalCartQty > 0) {
      setShowMiniCart(true)
    }
    setTimeout(() => { 
      setShowMiniCart(false)
    }, 3000);  
	}, [totalCartQty]) 
  
  return ( 
    <>
      <div className="header-container bg-light">
        <div className="container">
          <div className="row">
            <div className="col-6 heading">
              <h1>Website Development</h1>
            </div>
            <div className="col-6 cart-icon" onMouseEnter={() => setShowMiniCart(totalCartQty > 0 ? true : false)} onMouseLeave={() => setShowMiniCart(false)} >
              <h3><FontAwesomeIcon icon={faCartShopping} /></h3>
              {totalCartQty > 0 
              ?  
              <span className='cart-qty-cricle'>{totalCartQty}</span>
              : 
              ""}
            </div>
            <MiniCart showMiniCart={showMiniCart}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;