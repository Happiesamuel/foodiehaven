import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "./styles/GlobalStyle";
import About from "./pages/About";
import Customer from "./pages/Customer";
import { ToogleContext } from "./context/ToogleContext";
import Login from "./features/authLayout/Login";
import Auth from "./pages/Auth";
import Signup from "./features/authLayout/Signup";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Settings from "./pages/Settings";
import Bookmarks from "./pages/Bookmarks";
import { MenuContext } from "./context/MenuContext";
import { SearchResultContext } from "./context/SearchResultContext";
import RecipeData from "./features/recipeInfo/RecipeData";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import { OrderContext } from "./context/OrderContext";
import FinalOrder from "./pages/FinalOrder";
import { DarkmodeContext } from "./context/DarkmodeContext";
import PageNotFound from "./pages/PageNotFound";
import Orders from "./pages/Orders";
import { useEffect, useState } from "react";
import Preloader from "./ui/Preloader";
import ProtectedRoute from "./ui/ProtectedRoute";
import Contact from "./pages/Contact";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  const [load, setLoad] = useState(true);
  useEffect(function () {
    setTimeout(function () {
      setLoad(false);
    }, 5000);
  }, []);
  if (load) return <Preloader />;
  return (
    <QueryClientProvider client={queryClient}>
      <DarkmodeContext>
        <OrderContext>
          <ToogleContext>
            <MenuContext>
              <SearchResultContext>
                <GlobalStyle />
                <BrowserRouter>
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="customer" element={<Customer />} />
                    <Route path="contact" element={<Contact />} />

                    <Route index path="*" element={<PageNotFound />} />

                    <Route element={<Auth />}>
                      <Route path="login" element={<Login />} />
                      <Route path="signup" element={<Signup />} />
                    </Route>
                    <Route
                      element={
                        <ProtectedRoute>
                          <AppLayout />
                        </ProtectedRoute>
                      }
                    >
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="bookmark" element={<Bookmarks />} />
                      <Route path="cart" element={<Cart />} />
                      <Route path="orders" element={<Orders />} />
                      <Route path="order" element={<Order />} />
                      <Route path="order/:orderId" element={<FinalOrder />} />

                      <Route element={<Settings />} path="settings" />
                      <Route element={<RecipeData />} path="recipe/:id" />
                    </Route>
                  </Routes>
                </BrowserRouter>
                <Toaster
                  toastOptions={{
                    success: {
                      duration: 1000,
                    },
                  }}
                  position="top-center"
                  reverseOrder={false}
                />
              </SearchResultContext>
            </MenuContext>
          </ToogleContext>
        </OrderContext>
      </DarkmodeContext>
    </QueryClientProvider>
  );
}

export default App;
