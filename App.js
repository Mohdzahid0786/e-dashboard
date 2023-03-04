import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import AddProduct from './pages/AddProduct';
import ListProducts from './pages/ListProducts';
import Login from './pages/Login';
import Register from './pages/Register';
import UpdateProduct from './pages/UpdateProduct';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>

          <Route element={<PrivateRoute />} >
            <Route path="/" element={<ListProducts />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route path="/logout" element={<h1>Logout</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
          </Route>

          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
