import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {

  return (
    <>
      <nav className="navbar">
        <h1>RealFakeStore</h1>
        <ul>
          <li><Link to="home"><button>Home</button></Link></li>
          <li><Link to="shop"><button>Shop</button></Link></li>
          <li>
            <Link to="cart">
              <img src="/shopping-cart.png" alt="Shopping Cart" />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
