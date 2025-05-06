import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import App from './App';
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Contact from './assets/Pages/Contact';
import Services from './assets/Pages/Services';
import Signup from './assets/Pages/Signup';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout with Navbar
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'services', element: <Services /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
