import {BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartPage, HomePage, ProductDetailPage, ProfilePage, LogoutPage, LoginPage } from '../pages/index';

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
