import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../../scss/header.scss'
import { useSelector } from 'react-redux'
import MiniCart from '../containers/MiniCart'


const Header = () => {
  const totalCartQty = useSelector((state) => state.CartData.totalCartQty)
  const cartItems = useSelector((state) => state.CartData.cartItems)
  const [showMiniCart, setShowMiniCart] = useState(false)

  useEffect(() => { 
		if(totalCartQty > 0) {
      setShowMiniCart(true)
    }
    setTimeout(() => { 
      setShowMiniCart(false)
    }, 3000)  
	}, [totalCartQty]) 
  
  return ( 
    <>
      <div className='header-container bg-light'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 heading'>
              <h1>Website Development</h1>
            </div>
            
            <div className='col-6 cart-icon' onMouseEnter={() => setShowMiniCart(totalCartQty > 0 ? true : false)} onMouseLeave={() =>setShowMiniCart(false)} >
              <Link to={{ pathname: '/cart' }}>
                <h3><FontAwesomeIcon icon={faCartShopping} /></h3>
                {totalCartQty > 0 
                ?  
                <span className='cart-qty-cricle'>{totalCartQty}</span>
                : 
                ''}
                </Link>
                <MiniCart showMiniCart={showMiniCart} cartItems={cartItems}/>
              
            </div>
          </div>  
        </div>
      </div>
    </>
  )
}

export default Header