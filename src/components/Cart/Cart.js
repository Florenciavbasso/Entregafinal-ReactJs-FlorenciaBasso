import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link} from 'react-router-dom'

const Cart = () => {
    const {cart,clearCart, totalQuantity, total, removeItem} = useContext(CartContext)

    if(totalQuantity === 0) {
        return(
            <div>
                <h1>Tu carrito esta vacio</h1>
                <Link to='/' className='Option'> Productos </Link>
            </div>
        )
    }

    return(
        <div>
            { cart.map (p => <CartItem key={p.id} {...p} onRemove={removeItem} />)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart ()} className="Button">Vaciar carrito</button>
            <Link to='/checkout' className='Option'>Pagar</Link>
            <Link to='/' className='Option'>Productos</Link>
        </div>
    )
}

export default Cart