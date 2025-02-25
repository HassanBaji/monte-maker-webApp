import { Box } from '@mui/material'
import { Header } from '../../components/Header/index'
import { NavBar } from '../../components/NavBar/index'
import { Outlet } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'


export const WrapperScreen = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  )
}
