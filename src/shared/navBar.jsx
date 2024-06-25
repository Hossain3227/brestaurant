import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/authprovider";
import { FaShoppingCart } from "react-icons/fa";
import UseCart from "../hooks/useCart";


const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [cart] = UseCart();

  const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.log(error));
  }
    
    const navOptions = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/menu'}>Our Menu</NavLink></li>
        <li><NavLink to={'/order/salad'}>Order food</NavLink></li>
        <li>
          <Link to='/'>
          <button className="btn bg-black border-none">
            <FaShoppingCart className="mr-2 text-white"></FaShoppingCart>
            <div className="badge badge-secondary">
              +{cart?.length || 0}
            </div>
          </button>
          </Link>
        </li>
            {
              user ? <>
              <button onClick={handleLogOut} className="btn btn-ghost text-white">LogOut</button>
                  
              </> : <>
                  <li><Link to="/login">Login</Link></li>
              </>
            }

    </>


    
    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-xl bg-black bg-opacity-35 text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">bristo boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;