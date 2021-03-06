import './App.css';
import {Route,Routes} from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext';
import Home from './Pages/Home'
import SignUp from './Pages/Sign Up/Signup'
import Login from './Pages/Login/Login'
import ContactUs from './Pages/ContactUs'
import SellBook from './Pages/Sell Book'
import Wishlist from './Pages/wishlist/Wishlist'
import ViewAllBooks from './Pages/ViewAllBooks/ViewAllBooks'
import ProductOverview from './Components/ProductOverview'
import SellerInfo from './Components/SellerInfo'
import ThankYou from './Pages/Thank You/ThankYou'
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/signup"  element = {<SignUp />} />
          <Route path = "/login"  element = {<Login />} />
          <Route path = "/contact"  element = {<ContactUs />} />
          <Route path = "/sellbook"  element = {<SellBook />} />
          <Route path = "/allbooks"  element = {<ViewAllBooks />} />
          <Route path = "/thankyou"  element = {<ThankYou />} />
          <Route path = "/wishlist"  element = {<Wishlist />} />
          <Route path = "/products/:productId" element = {<ProductOverview />} />
          <Route path = "/sellerinfo/:productId" element = {<SellerInfo />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
