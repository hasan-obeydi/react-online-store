import { createBrowserRouter } from "react-router";

import AppLayout from "../../components/layouts/AppLayout";
import Home from "../../pages/Home/Home";
import Users from "../../pages/Users/Users";
import AboutUs from "../../pages/AboutUs/AboutUs";
import ContactUs from "../../pages/ContactUs/ContactUs";
import Blog from "../../pages/Blog/Blog";
import Cart from "../../pages/Cart/Cart";
import ProductPage from "../../pages/Product/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
