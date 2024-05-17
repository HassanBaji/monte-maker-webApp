import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ChairIcon from '@mui/icons-material/Chair';
import { colors } from '../../helpers/colors';
import { fonts } from '../../helpers/fonts';
import { useNavigate } from 'react-router-dom';

const pages = [
  { name: 'Home', value: 'landing' },
  { name: 'Shop', value: 'shop' },
  { name: 'Community', value: 'community' }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const handleCloseNavMenu = (val) => {
    navigate(`/${val}`);
  };

  const handleCloseUserMenu = () => {};

  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: '#FFFF',
        boxShadow: 0,
        borderRadius: 4
      }}
      style={{ padding: 0 }}>
      <Container maxWidth='xl'>
        <Toolbar sx={{ padding: 0, mr: -12, ml: -12, height: 80 }}>
          <ChairIcon
            sx={{
              display: { xs: 'none', md: 'flex', color: colors.primaryText },
              mr: 1,
              width: 40,
              height: 40
            }}
            color={colors.primaryText}
          />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: colors.primaryText,
              textDecoration: 'none',
              fontFamily: fonts.primary,
              fontSize: 24
            }}>
            Montemaker
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id='menu-appbar'
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
              }}>
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleCloseNavMenu(page.value)}>
                  <Typography
                    textAlign='center'
                    sx={{ fontSize: 40, ml: 4, mr: 4 }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant='h5'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}>
            Montemaker
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              ml: 4,
              mt: 0.5
            }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page.value)}
                sx={{
                  color: colors.primaryText,
                  display: 'block',
                  fontFamily: fonts.primary,
                  fontSize: 16,
                  ml: 6,
                  mr: 6
                }}>
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
