import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeContainer from './Pages/Home/HomeContainer/HomeContainer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeContainer/>
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
