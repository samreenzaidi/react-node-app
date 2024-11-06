const MiniCart = ({showMiniCart, cartItems}) => {
    return (
        <>
            <div className='mini-basket__container-animation-wrapper'>
                <div class='mini-basket__container-wrapper' id='miniBasketContainerWrapper'>
                    <div class='mini-basket-summary-container'>
                        <div class='invisible-scroll'>
                            <div class='scrollbar-view'>
                                <div class='mini-basket-product-container'>
                                {cartItems.map((cartItem) => ( 
                                    <div class='product-box flex-grid'>
                                        <div class='product-container flex-grid'>
                                            <div class='product-image-container'>
                                                <div class='loading product__image' aria-label='' role='button' tabindex='0' focusable='true'>
                                                    <a class='text-underline-hover' title='' target='' href=''>
                                                        <picture>
                                                            <source srcset='' type='image/webp' class=''></source>
                                                            <img class='primary-image' src={cartItem.images[0]} alt='' title='' width='218' height='289' />
                                                        </picture>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class='product-wrapper flex-grid flex-grid--direction-column'>
                                                <div class='product-info-wrapper flex-grid'>
                                                <div class='product-info flex-grid flex-grid--wrap'>
                                                    <div class='product-name'><a class='text-underline-hover' title='The Grinch Christmas Fairisle Matching Family Womens Pyjamas' target='' data-id='product-link-mini-basket' data-cs-override-id='product-link-mini-basket' href='/george/lingerie/nightwear/the-grinch-christmas-fairisle-matching-family-womens-pyjamas/G007983744,default,pd.html?cgid=D27M6G1C1'>The Grinch Christmas Fairisle Matching Family Womens Pyjamas</a></div>
                                                    <div class='attributes-container'>
                                                        <div class='attribute-row'><span class='attribute-name bold'>Colour:</span><span class='attribute-value'>Grey</span></div>
                                                        <div class='attribute-row'><span class='attribute-name bold'>Size:</span><span class='attribute-value'>4-6</span></div>
                                                    </div>
                                                    <div class='product-quantity'><span class='attribute-name bold'>Quantity:</span><span class='attribute-value'>2</span></div>
                                                </div>
                                                <div class='price-container'>
                                                    <div class='product-price bold'> AED182</div>
                                                </div>
                                                </div>
                                                <div class='basket-item-badges'></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                            <div class='horizontal-scrollbar'>
                                <div></div>
                            </div>
                            <div class='vertical-scrollbar'>
                                <div></div>
                            </div>
                        </div>
                        <div class='mini-basket-total-section'>
                            <div class='basket-subtotal'>
                                <div class='subtotal-row flex-grid flex-grid--stretch'><span class='subtotal-label bold'> Subtotal</span><span class='subtotal-amount bold'>AED 261.00</span></div>
                            </div>
                            <div class='mini-basket-total'>
                                <div class='basket-total--links flex-grid flex-grid--stretch'><a data-id='link-mini-basket-summary-edit-bag' data-cs-override-id='link-mini-basket-summary-edit-bag' href='/on/demandware.store/Sites-ASDA-INT-Site/default/Cart-Show'>View your basket</a><a data-id='link-mini-basket-summary-edit-sfl' data-cs-override-id='link-mini-basket-summary-edit-sfl' href='/on/demandware.store/Sites-ASDA-INT-Site/default/SaveForLater-Show'>View wishlist</a></div>
                                <button data-id='button-mini-basket-to-checkout' data-cs-override-id='button-mini-basket-to-checkout' aria-label='' aria-controls='' aria-setsize='' aria-posinset='' aria-hidden='false' role='button' id='xl9imblrj3f' type='button' class='btn btn-primary btn-default full-width continue-checkout' name='checkoutNow'>Checkout now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MiniCart