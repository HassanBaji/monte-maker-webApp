import { createBrowserRouter, Navigate } from 'react-router-dom';
import { WrapperScreen } from '../views/Wrappers/WrapperScreen';
import { LandingScreen } from '../views/LandingScreen/LandingScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WrapperScreen />,
    children: [
      {
        path: '/',
        element: <Navigate to='/landing' />
      },
      { path: 'landing', element: <LandingScreen /> }
    ]
  }
]);
