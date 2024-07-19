import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToogleContext } from "./context/ToogleContext";
import { MenuContext } from "./context/MenuContext";
import { SearchResultContext } from "./context/SearchResultContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Toaster } from "react-hot-toast";
import { OrderContext } from "./context/OrderContext";
import { DarkmodeContext } from "./context/DarkmodeContext";
import Preloader from "./ui/Preloader";
import ProtectedRoute from "./ui/ProtectedRoute";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Customer = lazy(() => import("./pages/Customer"));
const Event = lazy(() => import("./pages/Event"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./features/authLayout/Login"));
const Signup = lazy(() => import("./features/authLayout/Signup"));
const ForgottenPasswordEmail = lazy(() =>
  import("./features/authLayout/ForgottenPasswordEmail")
);
const PasswordUpdate = lazy(() =>
  import("./features/authLayout/PasswordUpdate")
);
const Auth = lazy(() => import("./pages/Auth"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AppLayout = lazy(() => import("./ui/AppLayout"));
const Settings = lazy(() => import("./pages/Settings"));
const Bookmarks = lazy(() => import("./pages/Bookmarks"));
const RecipeData = lazy(() => import("./features/recipeInfo/RecipeData"));
const Cart = lazy(() => import("./pages/Cart"));
const Order = lazy(() => import("./pages/Order"));
const FinalOrder = lazy(() => import("./pages/FinalOrder"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Orders = lazy(() => import("./pages/Orders"));

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
      <DarkmodeContext>
        <OrderContext>
          <ToogleContext>
            <MenuContext>
              <SearchResultContext>
                <GlobalStyle />
                <BrowserRouter>
                  <Suspense fallback={<Preloader />}>
                    <Routes>
                      <Route index element={<Home />} />
                      <Route path="about" element={<About />} />
                      <Route path="customer" element={<Customer />} />
                      <Route path="contact" element={<Contact />} />
                      <Route path="events" element={<Event />} />

                      <Route index path="*" element={<PageNotFound />} />

                      <Route element={<Auth />}>
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route
                          path="passwordrecovery"
                          element={<ForgottenPasswordEmail />}
                        />
                        <Route
                          path="passwordupdate"
                          element={<PasswordUpdate />}
                        />
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
                  </Suspense>
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
