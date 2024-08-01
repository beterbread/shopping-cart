import './App.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-header">RealFakeStore</h1>
        <ul>
          <button className="navbar-button">Home</button>
          <button className="navbar-button">Shop</button>
          <span className="navbar-span">
            <img src="/shopping-cart.png"></img>
          </span>
        </ul>
      </nav>
    </>
  )
}

export default App;
