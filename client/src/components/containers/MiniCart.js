import React from 'react'
import '../../scss/header.scss'

const MiniCart = () => {
  const totalCartQty = useSelector((state) => state.cartData.totalCartQty);
  return ( 
    <>
      <div className="header-container bg-light">
        <div className="container">
          <div className="row">
            <div className="col-6 heading">
              <h1>Website Development</h1>
            </div>
            <div className="col-6 cart-icon">
              <h3><FontAwesomeIcon icon={faCartShopping} /></h3>
              {totalCartQty > 0 
              ?  
              <span className='cart-qty-cricle'>{totalCartQty}</span>
              : 
              ""}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MiniCart;