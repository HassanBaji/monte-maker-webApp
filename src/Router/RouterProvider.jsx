import { createBrowserRouter, Navigate } from 'react-router-dom'
import { WrapperScreen } from '../views/Wrappers/WrapperScreen'
import { LandingScreen } from '../views/LandingScreen/LandingScreen'
import { ShopScreen } from '../views/ShopScreen/ShopScreen'
import { LoginScreen } from '../views/LoginScreen/LoginScreen'
import { ProfileScreen } from '../views/ProfileScreen/ProfileScreen'
import { CustomizeScreen } from '../views/CustomizeScreen/CustomizeScreen';

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
      { path: 'profile', element: <ProfileScreen /> },
      { path: 'login', element: <LoginScreen /> },
      { path: 'customize', element: <CustomizeScreen /> }
    ]
  }
])
