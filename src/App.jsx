import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <h1>RealFakeStore.</h1>
        <ul>
          <li><Link to="home"><button>Home</button></Link></li>
          <li><Link to="shop"><button>Shop</button></Link></li>
          <li>
            <Link to="cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z" data-name="Shopping Cart"/>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
