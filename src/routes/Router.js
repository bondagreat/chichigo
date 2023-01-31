import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PaymentPage from "../pages/PaymentPage";
import ProductInfoPage from "../pages/ProductInfoPage";
import ProductPage from "../pages/ProductPage";


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

])

export default function Router() {
  return <RouterProvider router={router} />
}