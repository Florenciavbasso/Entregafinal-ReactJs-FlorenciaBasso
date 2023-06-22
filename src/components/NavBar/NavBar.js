import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>CHARRA</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/remeras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>REMERAS</NavLink>
                <NavLink to={`/category/buzos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>BUZOS</NavLink>
                <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>ACCESORIOS</NavLink>              
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar