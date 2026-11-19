'use client';

import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Chip,
  useTheme
} from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
  Search,
  Mail
} from '@mui/icons-material';
import { ColorModeContext } from '../../app/providers';
import CommandPalette from './CommandPalette';

const navLinks = [
  { label: 'Work', path: '/work' },
  { label: 'Playground', path: '/playground' },
  { label: 'Writing', path: '/writing' },
  { label: 'About', path: '/about' },
];

export const Navbar: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const colorMode = useContext(ColorModeContext);
  const pathname = usePathname() || '';

  const [mobileOpen, setMobileOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  // Keyboard shortcut listener for ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 3 }}>
      <Typography
        component={Link}
        href="/"
        variant="h6"
        sx={{
          fontWeight: 800,
          textDecoration: 'none',
          color: 'text.primary',
          letterSpacing: '-0.02em',
          display: 'block',
          mb: 0.5
        }}
      >
        ADITYA RAJ
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
        Frontend &amp; AI-Native Full Stack
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/"
            selected={pathname === '/'}
            sx={{ textAlign: 'center', borderRadius: 1.5 }}
          >
            <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItemButton>
        </ListItem>
        {navLinks.map((link) => (
          <ListItem key={link.path} disablePadding>
            <ListItemButton
              component={Link}
              href={link.path}
              selected={pathname.startsWith(link.path)}
              sx={{ textAlign: 'center', borderRadius: 1.5 }}
            >
              <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Button
        variant="outlined"
        fullWidth
        startIcon={<Search sx={{ fontSize: 18 }} />}
        onClick={(e) => {
          e.stopPropagation();
          setCommandOpen(true);
        }}
        sx={{
          mb: 1.5,
          fontWeight: 600,
          fontSize: '0.85rem',
          borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'
        }}
      >
        Command Menu (⌘K)
      </Button>

      <Button
        variant="contained"
        fullWidth
        component="a"
        href="mailto:adityasrivastav0853@gmail.com"
        startIcon={<Mail sx={{ fontSize: 18 }} />}
        sx={{ fontWeight: 600, fontSize: '0.85rem' }}
      >
        Contact Aditya
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          bgcolor: isDark ? 'rgba(12, 12, 13, 0.85)' : 'rgba(250, 250, 249, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 64, display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Typography
              component={Link}
              href="/"
              variant="h6"
              sx={{
                fontWeight: 800,
                letterSpacing: '-0.03em',
                textDecoration: 'none',
                color: 'text.primary',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5
              }}
            >
              ADITYA RAJ
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.path || pathname.startsWith(link.path + '/');
                return (
                  <Button
                    key={link.path}
                    component={Link}
                    href={link.path}
                    sx={{
                      color: isActive ? 'text.primary' : 'text.secondary',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.88rem',
                      px: 1.5,
                      py: 0.8,
                      borderRadius: 1.5,
                      '&:hover': {
                        color: 'text.primary',
                        bgcolor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                      }
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}

              {/* ⌘K Trigger Button */}
              <Box
                onClick={() => setCommandOpen(true)}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 1.5,
                  py: 0.6,
                  ml: 1,
                  cursor: 'pointer',
                  borderRadius: 1.5,
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
                  color: 'text.secondary',
                  transition: 'all 150ms ease',
                  '&:hover': {
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                    color: 'text.primary'
                  }
                }}
              >
                <Search sx={{ fontSize: 16 }} />
                <Typography variant="caption" sx={{ fontFamily: 'monospace', fontSize: '0.75rem' }}>
                  Search...
                </Typography>
                <Chip
                  label="⌘K"
                  size="small"
                  sx={{
                    height: 18,
                    fontSize: '0.65rem',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    bgcolor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                    color: 'text.primary'
                  }}
                />
              </Box>

              {/* Theme Toggle */}
              <IconButton
                onClick={colorMode.toggleColorMode}
                size="small"
                aria-label="toggle light/dark theme"
                sx={{
                  ml: 0.5,
                  color: 'text.secondary',
                  '&:hover': { color: 'text.primary' }
                }}
              >
                {theme.palette.mode === 'dark' ? <Brightness7 fontSize="small" /> : <Brightness4 fontSize="small" />}
              </IconButton>
            </Box>

            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
              <IconButton
                onClick={colorMode.toggleColorMode}
                size="small"
                sx={{ color: 'text.secondary' }}
              >
                {theme.palette.mode === 'dark' ? <Brightness7 fontSize="small" /> : <Brightness4 fontSize="small" />}
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: isDark ? '#0C0C0D' : '#FAFAF9',
          }
        }}
      >
        {drawer}
      </Drawer>

      {/* Command Palette Modal */}
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
    </>
  );
};

export default Navbar;
