import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PaymentPage from "../pages/PaymentPage";
import ProductInfoPage from "../pages/ProductInfoPage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/product',
    element: <ProductPage />
  },
  {
    path: '/product/:productId',
    element: <ProductInfoPage />
  },
  {
    path: '/payment',
    element: <PaymentPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },

])

export default function Router() {
  return <RouterProvider router={router} />
}