import { React } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// COMPONENTS
//import TabFun from './components/TabBar/Tabs.js';
import Footer from "./components/Footer/Footer.js";
import NavOffCanvas from "./components/NavBar/NavOffCanvas";
import NavContext from "./components/NavBar/NavBarContext";
import ContainerFluid from "./components/Banner/Banner";
// PAGES
import WomenCat from "./pages/WomenCategory";
import MenCat from "./pages/MenCategory";
import JeweleryCat from "./pages/JeweleryCategory";
import ErrorPage from "./pages/ErrorPage";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginRequiredAlert from "./pages/LoginRequired";
import ViewChat from "./pages/Chat";
import AccountView from "./pages/AccountView";
import About from "./pages/About";

//context
import { ProductsContextProvider } from "./context/dataContext";
import { AuthContextProvider } from "./context/authContext";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

// FIREBASE
// import {onSnapshot, collection} from "@firebase/firestore";

import ProtectedRoute from "./utilities/protectedRoute";

const App = () => {
  return (
    <Router>
      <ProductsContextProvider>
        <AuthContextProvider>
          <ShoppingCartProvider>
            <div className="App">
              <NavOffCanvas />
              <NavContext />

              <div className="container mb-3">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <ContainerFluid />
                        <AllProducts />
                      </>
                    }
                  />
                  <Route path="/product/:id" element={<ProductDetails />} />

                  <Route path="/women" element={<WomenCat />} />
                  <Route path="/men" element={<MenCat />} />
                  <Route path="/jewelery" element={<JeweleryCat />} />

                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/about" element={<About />} />

                  <Route
                    path="/chat"
                    element={
                      <ProtectedRoute>
                        <ViewChat />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/account"
                    element={
                      <ProtectedRoute>
                        <AccountView />
                      </ProtectedRoute>
                    }
                  />

                  <Route path="/alert" element={<LoginRequiredAlert />} />

                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </div>

              <Footer />
            </div>
          </ShoppingCartProvider>
        </AuthContextProvider>
      </ProductsContextProvider>
    </Router>
  );
};

export default App;
