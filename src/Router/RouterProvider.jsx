import { createBrowserRouter, Navigate } from 'react-router-dom'
import { WrapperScreen } from '../views/Wrappers/WrapperScreen'
import { LandingScreen } from '../views/LandingScreen/LandingScreen'
import { ShopScreen } from '../views/ShopScreen/ShopScreen'
import LoginPage from '../views/LoginPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WrapperScreen />,
    children: [
      {
        path: '/',
        element: <Navigate to="/landing" />
      },
      { path: 'landing', element: <LandingScreen /> },
      { path: 'shop', element: <ShopScreen /> },
      { path: 'community', element: <LandingScreen /> },
      { path: 'login', element: <LoginPage /> }
    ]
  }
])
