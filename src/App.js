import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import SignupPage from './pages/SignupPage';
import MenuPage from './pages/MenuPage';

import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import CartPage from './pages/CartPage';
import ConfirmationComp from './components/ConfirmationComp';
function App() {
  return (
   
      <Routes>
       
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/confirmation' element={<ConfirmationComp />} />
        </Route>

       <Route path="*" element={<ErrorPage />} />
      </Routes>
    
  );
}

export default App;
