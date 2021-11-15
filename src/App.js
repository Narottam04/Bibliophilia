import './App.css';
import {Route,Routes} from 'react-router-dom'
import {Commerce} from './lib/commerce'
import Home from './Pages/Home'
import SignUp from './Pages/Sign Up'
import Login from './Pages/Login'
import ContactUs from './Pages/ContactUs'
import SellBook from './Pages/Sell Book'
import ViewAllBooks from './Pages/ViewAllBooks'
import ProductOverview from './Components/ProductOverview'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/signup"  element = {<SignUp />} />
        <Route path = "/login"  element = {<Login />} />
        <Route path = "/contact"  element = {<ContactUs />} />
        <Route path = "/sellbook"  element = {<SellBook />} />
        <Route path = "/allbooks"  element = {<ViewAllBooks />} />
        <Route path = "/products/:productId" element = {<ProductOverview />} />
      </Routes>
    </div>
  );
}

export default App;
