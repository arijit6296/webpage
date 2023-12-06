import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BannerFirst from './component/BannerFirst/BannerFirst';
import BannerSecond from './component/BannerSecond/BannerSecond';
import ShopBotton from './component/ShopBannerBottom/ShopBannerBottom';
import ShopProduct from './component/ShopProduct/ShopProduct';
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import CartPage from './component/ShopProduct/Cart';
import Contact from './component/contact/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element:<><BannerSecond/></>,
        children:[]
      },
      {
        path: "/shop",
        element:<> <ShopProduct/> </>,
      },
      {
        path: "/about",
        element: <BannerFirst/>,
      },
      {
        path: "/blog",
        element: <BannerFirst/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/cart",
        element:  <CartPage/>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
