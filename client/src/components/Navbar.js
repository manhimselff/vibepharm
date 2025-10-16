import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Menu, 
  MenuItem,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = token ? [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Inventory', icon: <InventoryIcon />, path: '/inventory' },
    { text: 'Sales', icon: <PointOfSaleIcon />, path: '/sales' },
    { text: 'Admin', icon: <AdminPanelSettingsIcon />, path: '/admin' },
  ] : [];

  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            color: 'white',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          VibePharm
        </Typography>

        {token && (
          <>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                  edge="end"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {navItems.map((item) => (
                    <MenuItem
                      key={item.text}
                      onClick={() => {
                        navigate(item.path);
                        handleMenuClose();
                      }}
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        {item.icon}
                        {item.text}
                      </Box>
                    </MenuItem>
                  ))}
                  <MenuItem onClick={handleLogout}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <LogoutIcon />
                      Logout
                    </Box>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    color="inherit"
                    startIcon={item.icon}
                  >
                    {item.text}
                  </Button>
                ))}
                <Button
                  color="inherit"
                  onClick={handleLogout}
                  startIcon={<LogoutIcon />}
                >
                  Logout
                </Button>
              </Box>
            )}
          </>
        )}

        {!token && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              component={RouterLink}
              to="/login"
            >
              Login
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/register"
            >
              Register
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;