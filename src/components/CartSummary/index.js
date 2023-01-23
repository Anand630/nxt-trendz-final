import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      console.log(cartList)
      const getTotalAmount = () => {
        let totalAmount = 0
        cartList.forEach(eachProduct => {
          totalAmount += eachProduct.price * eachProduct.quantity
          console.log(totalAmount)
        })
        return totalAmount
      }
      return (
        <div className="summary-container">
          <h1 className="order-total-heading">
            Order Total:
            <span className="total-amount-text">Rs {getTotalAmount()}/-</span>
          </h1>
          <p className="items-count-description">
            {cartList.length} Items in cart
          </p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
