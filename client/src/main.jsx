import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './layouts/RootLayout.jsx';
import Homepage from './routes/homepage/Homepage.jsx';
import './index.css';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx';
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx';
import ChatPage from './routes/chatPage/ChatPage.jsx';
import SignUpPage from './routes/signUpPage/SignUpPage.jsx';
import SignInPage from './routes/signInPage/SignInPage.jsx';
import ContactPage from './routes/contactPage/ContactPage.jsx';
import ComingSoon from './routes/comingSoon/ComingSoon.jsx';



const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      {
        element:<DashboardLayout/>,
        children:[{
          path:"/dashboard",
          element:<DashboardPage/>
        },{
          path:"/dashboard/chats/:id",
          element:<ChatPage/>
        }]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);