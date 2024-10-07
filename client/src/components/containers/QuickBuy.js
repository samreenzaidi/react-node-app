import '../../scss/product.scss'
import AddItemToCart from "../containers/AddItemToCart"

const QuickBuy = ({product, closeQuickBuyModalEvent}) => {
	return ( 
        <div className="quick-buy-modal" id="modal">
            <div className="quick-buy-modal-content">
                <button className="close" aria-label="close dialog" role="button" type="button" onClick={closeQuickBuyModalEvent}>
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
                            <AddItemToCart product={product} closeQuickBuyModalEventCall={() => closeQuickBuyModalEvent()} />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
	) 
} 

export default QuickBuy
