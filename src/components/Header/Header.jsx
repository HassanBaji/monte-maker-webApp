import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import ChairIcon from '@mui/icons-material/Chair'
import { colors } from '../../helpers/colors'
import { fonts } from '../../helpers/fonts'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.png'

const pages = [
  { name: 'Home', value: 'landing' },
  { name: 'Shop', value: 'shop' },
  { name: 'Profile', value: 'profile' }
  // { name: 'Login', value: 'login' }
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const navigate = useNavigate()
  const handleCloseNavMenu = (val) => {
    navigate(`/${val}`)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: colors.primaryYellow, padding: 0 }}
      style={{ padding: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ padding: 0 }}>
          <div className="logo-wrapper" alt="logo">
            <img
              className="logo"
              src={logo}
              alt="Logo"
              style={{ paddingTop: '12px' }}
            />
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleCloseNavMenu(page.value)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Montemaker
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              ml: 4,
              mt: 0.5
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page.value)}
                sx={{
                  color: colors.primaryText,
                  display: 'block',
                  fontFamily: fonts.primary
                }}
              >
                {page.name}
              </Button>
            ))}
            <Button
              key="login"
              onClick={() => handleCloseNavMenu('login')}
              sx={{
                color: colors.primaryText,
                display: 'block',
                fontFamily: fonts.primary,
                marginLeft: 'auto'
              }}
            >
              {'Login'}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
