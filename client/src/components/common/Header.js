import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../../scss/header.scss'

function Header() { 
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;