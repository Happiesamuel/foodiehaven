import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <DarkmodeContext>
        <OrderContext>
          <ToogleContext>
            <MenuContext>
              <SearchResultContext>
                <GlobalStyle />
                <BrowserRouter>
                  <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/customer" element={<Customer />} />
                    <Route index path="*" element={<PageNotFound />} />

                    <Route element={<Auth />}>
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                    </Route>
                    <Route element={<AppLayout />}>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/bookmark" element={<Bookmarks />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/order" element={<Order />} />
                      <Route path="/order/:orderId" element={<FinalOrder />} />

                      <Route element={<Settings />} path="/settings" />
                      <Route element={<RecipeData />} path="/recipe/:id" />
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
