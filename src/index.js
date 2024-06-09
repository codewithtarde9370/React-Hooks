import ReactDOM from "react-dom/client";
import Home from "./views/home/home";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router =createBrowserRouter ([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "",
    element:<Home/>
  }
])

root.render(<RouterProvider router={router}/>)