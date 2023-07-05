import './App.css'
import { RouterPaths } from './routes/RouterPaths.routes'
import { Navbar } from "./components/navbar/Navbar"
import { Footer } from "./components/footer/Footer"
import { BrowserRouter} from 'react-router-dom'
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { UserProvider } from './context/UserContext'



function App() {
  return (
    <>
      <BrowserRouter>
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
        <Footer/> 

      </BrowserRouter>
    </>
  )
}

export default App
