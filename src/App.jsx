// Import Dependencies
import React from "react";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { Offline } from "react-detect-offline";
// Import Context
import AuthProvider from "./context/Authentication";
import { CartContextProvider } from "./context/CartContext";
// Import Redux Dependencies
import { Provider } from "react-redux";
import { store } from "./redux/store";
// Import Components
import NotFound from "./components/00NotFound/NotFound";
import Layout from "./components/01Layout/Layout";
import SignUp from "./components/04SignUp/SignUp";
import SignIn from "./components/05SignIn/SignIn";
import ProtectedRoute from "./components/06ProtectedRoute/ProtectedRoute";
import ForgotPassword from "./components/07ForgotPassword/ForgotPassword";
import VerifyCode from "./components/08VerifyCode/VerifyCode";
import ResetPassword from "./components/09ResetPassword/ResetPassword";
import Profile from "./components/10Profile/Profile";
import Settings from "./components/11Settings/Settings";
import Products from "./components/14Products/Products";
import ProductDetails from "./components/15ProductDetails/ProductDetails";
import Home from "./components/16Home/Home";
import Categories from "./components/17Categories/Categories";
import CategoryDetails from "./components/18CategoryDetails/CategoryDetails";
import SubCategoryDetails from "./components/19SubCategoryDetails/SubCategoryDetails";
import Brands from "./components/20Brands/Brands";
import BrandDetails from "./components/21BrandDetails/BrandDetails";
import Cart from "./components/22Cart/Cart";
import Payment from "./components/23Payment/Payment";
import Orders from "./components/24Orders/Orders";
import WishList from "./components/25WishList/WishList";

function App() {
  // React Query
  const clientQuery = new QueryClient();
  // React Router
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "home",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        { path: "*", element: <NotFound /> },
        { path: "signup", element: <SignUp /> },
        { path: "signin", element: <SignIn /> },
        {
          path: "forgotPassword",
          element: <ForgotPassword />,
        },
        {
          path: "resetPassword",
          element: <ResetPassword />,
        },
        {
          path: "verifyCode",
          element: <VerifyCode />,
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "settings",
          element: (
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          ),
        },
        {
          path: "productDetails/:id",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          ),
        },
        {
          path: "categoryDetails/:id",
          element: (
            <ProtectedRoute>
              <CategoryDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "subCategoryDetails/:id",
          element: (
            <ProtectedRoute>
              <SubCategoryDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoute>
              <Brands />
            </ProtectedRoute>
          ),
        },
        {
          path: "brandDetails/:id",
          element: (
            <ProtectedRoute>
              <BrandDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "payment",
          element: (
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },
        {
          path: "wishList",
          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={clientQuery}>
          <CartContextProvider>
            <AuthProvider>
              <RouterProvider router={routes} />
              <Toaster
                containerStyle={{
                  top: 58.5,
                }}
              />
            </AuthProvider>
          </CartContextProvider>
        </QueryClientProvider>

        <Offline>
          <div className="offlineMsg bg-dark text-white p-3">
            Oops! It seems like you're currently offline
          </div>
        </Offline>
      </Provider>
    </>
  );
}

export default App;
