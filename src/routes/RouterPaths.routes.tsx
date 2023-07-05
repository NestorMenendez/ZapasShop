import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { CartPage } from '../pages/CartPage';
import ProfilePage from '../pages/ProfilePage';
import LogoutPage from '../pages/LogoutPage';
import LoginPage from '../pages/LoginPage';
import PublicRoute from '../components/router/PublicRoute';
import PrivateRoute from '../components/router/PrivateRoute';



export const RouterPaths = () => {
  return (
    <>

            <Routes>
              <Route path='/' element={ <PublicRoute/> }>
                <Route index element= { <HomePage/> } />
                <Route path='/login' element= { <LoginPage/> }/>
                <Route path="/productdetail/:id" element= { <ProductDetailPage/> } />
                <Route path="/Cart" element= { <CartPage/> } />
              </Route>
              <Route path='/private' element= { <PrivateRoute/> }>
                <Route path='/private/profile' element= { <ProfilePage/> } />
                <Route path='/private/logout' element= { <LogoutPage/> } />
              </Route>
            </Routes>

    </>
  );
};
