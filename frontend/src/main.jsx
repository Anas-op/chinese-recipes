import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import MainRoute from "./route/MainRoute"
import "./index.css";
import GlobalStyle from "./styles/GlobalStyle";
import { library} from "@fortawesome/fontawesome-svg-core";
import {faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


library.add(faFacebook, faTwitter, faInstagram, faMagnifyingGlass)





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <GlobalStyle /> 
    <RouterProvider router={router} />
  </React.StrictMode>
)
