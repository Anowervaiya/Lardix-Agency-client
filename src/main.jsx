import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import HomeContainer from './Pages/Home/HomeContainer/HomeContainer';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import AllServicesContainer from './Pages/Services/AllServicesContainer/AllServicesContainer';
import Contact from './Pages/Contact/Contact';
const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <HomeContainer></HomeContainer>,
      },
      {
        path: '/all-services/:link',
        element:<AllServicesContainer></AllServicesContainer>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      }
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
      
     </QueryClientProvider>
  </StrictMode>
);
