import { Box } from '@mui/material';
import { Header } from '../../components/Header/index';
import { Outlet } from 'react-router-dom';

export const WrapperScreen = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};
