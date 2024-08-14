import { Link } from "react-router-dom";
import './Home.css'

function Home() {
  return (
    <div className="home">
      <h1>Welcome to RealFakeStore, a e-commerce site that is totally real!</h1>
      <p>Here we have a vast array of items to fulfull your shopping needs!</p>
      <h1>What are you waiting for?!</h1>
      <Link to="/shop"><button>Explore now</button></Link>
    </div>
  )
}

export default Home;