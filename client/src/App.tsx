import "./App.scss";
import "./style/tailwind.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Product from "./pages/product/Product";
import BuildPC from "./pages/buildPC/BuildPC";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/build-pc",
          element: <BuildPC />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
