import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./routes/Home/index.tsx";
import Produtos from "./routes/Produtos/index.tsx";
import EditarProdutos from "./routes/EditarProdutos/index.tsx";
import Error from "./routes/Error/index.tsx";

const routes = createBrowserRouter([
  {path: "/" , element:<App/>, errorElement:<Error />, children:[
    {path:"/" , element: <Home/>},
    {path: "produtos",element:<Produtos/>},
    {path:"/editar/produtos/:id", element:<EditarProdutos/>}
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
