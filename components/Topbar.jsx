// components/Topbar.jsx
import {
  AppBar, Toolbar, Button, Menu, MenuItem,
  Box, Container, IconButton, Drawer, List, ListItem, ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { useRouter } from 'next/router';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Clientes', path: '/clientes' },
  { label: 'Reglas de acumulación', path: '/reglas' }
];

export default function Topbar() {
  const router = useRouter();
  const [userMenu, setUserMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleUserMenu = (event) => setUserMenu(event.currentTarget);
  const closeUserMenu = () => setUserMenu(null);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const isActive = (path) => router.pathname === path;

  const handleNav = (path) => {
    router.push(path);
    setMobileOpen(false); // cerrar drawer si es mobile
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: '56px' }}>
          
          {/* Mobile icon */}
          <IconButton
            edge="start"
            onClick={toggleMobile}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop nav center */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, flex: 1, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => handleNav(item.path)}
                variant={isActive(item.path) ? 'contained' : 'text'}
                sx={{
                  borderRadius: 8,
                  backgroundColor: isActive(item.path) ? '#6d28d9' : 'transparent',
                  color: isActive(item.path) ? 'white' : '#6d28d9',
                  fontSize: '0.75rem',
                  padding: '6px 12px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: isActive(item.path) ? '#5b21b6' : '#f3e8ff'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Usuario */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={handleUserMenu}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.8rem',
                color: '#000',
                padding: '6px 10px'
              }}
            >
              Pamela Rojas Gonzalez
            </Button>
            <Menu
              anchorEl={userMenu}
              open={Boolean(userMenu)}
              onClose={closeUserMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={closeUserMenu}>Editar perfil</MenuItem>
              <MenuItem onClick={closeUserMenu}>Cerrar sesión</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer mobile */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleMobile} sx={{ display: { md: 'none' } }}>
        <Box sx={{ width: 240, p: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.path} onClick={() => handleNav(item.path)}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
