import './App.css';
import { RouterPaths } from './routes/RouterPaths.routes';
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { BrowserRouter } from 'react-router-dom';
import {
  ProductProvider,
  CartProvider,
  AuthProvider,
  UserProvider,
  ItemsProvider
} from './context';

function App() {
  return (
    <>
      <BrowserRouter>
        <ItemsProvider>
        <UserProvider>
        <AuthProvider>
          <CartProvider>

              <Navbar/>
              <ProductProvider>
                  <RouterPaths/>
              </ProductProvider>

          </CartProvider>

        </AuthProvider>
        </UserProvider>
        </ItemsProvider>
        <Footer/> 

      </BrowserRouter>
    </>
  )
}

export default App
