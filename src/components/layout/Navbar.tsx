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
    Snackbar,
    Alert
} from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon, Mail, ContentCopy, Check } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { ColorModeContext } from '../../App';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { styles } from './Navbar.styles';

const navItems = [
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Playground', href: '#playground' },
    { label: 'Writing', href: '#writing' },
    { label: 'Stack', href: '#tech-stack' },
    { label: 'Experience', href: '#experience' }
];

const Navbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('adityasrivastav0853@gmail.com');
        setCopiedEmail(true);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
            <Typography variant="h6" sx={{ ...styles.drawerTitle, fontWeight: 800, letterSpacing: 1 }}>
                ADITYA RAJ
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                Frontend &amp; AI-Native Full Stack
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', borderRadius: 2 }} component="a" href={item.href}>
                            <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ my: 2 }} />
            <Button
                variant="contained"
                fullWidth
                startIcon={<Mail />}
                component="a"
                href="mailto:adityasrivastav0853@gmail.com"
                sx={{ mb: 1.5, fontWeight: 700 }}
            >
                Get in Touch
            </Button>
            <Button
                variant="outlined"
                fullWidth
                size="small"
                startIcon={copiedEmail ? <Check sx={{ color: '#10B981' }} /> : <ContentCopy />}
                onClick={(e) => {
                    e.stopPropagation();
                    handleCopyEmail();
                }}
                sx={{ mb: 2, fontWeight: 600, textTransform: 'none' }}
            >
                {copiedEmail ? 'Copied!' : 'Copy Email'}
            </Button>
            <Box sx={styles.drawerThemeToggleContainer}>
                <IconButton onClick={(e) => { e.stopPropagation(); colorMode.toggleColorMode(); }} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Box>
        </Box>
    );

    return (
        <AppBar position="fixed" color="transparent" elevation={0} sx={styles.appBar(theme)}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={styles.toolbar}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography
                            variant="h6"
                            component="a"
                            href="#hero"
                            sx={{
                                ...styles.logo,
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5,
                                fontWeight: 900
                            }}
                        >
                            ADITYA<span style={{ color: theme.palette.primary.main }}>.</span>
                        </Typography>
                    </motion.div>

                    <Box sx={styles.desktopNav}>
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                            >
                                <Button
                                    color="inherit"
                                    href={item.href}
                                    sx={{
                                        ...styles.navButton,
                                        fontWeight: 600,
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    {item.label}
                                </Button>
                            </motion.div>
                        ))}

                        <IconButton onClick={colorMode.toggleColorMode} color="inherit" sx={styles.themeToggle} aria-label="toggle light/dark theme">
                            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>

                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            {/* HR-Safe Get In Touch / Connect Button */}
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<Mail />}
                                component="a"
                                href="mailto:adityasrivastav0853@gmail.com"
                                sx={{
                                    fontWeight: 700,
                                    borderRadius: 2.5,
                                    px: 2.5,
                                    py: 0.9,
                                    textTransform: 'none',
                                    fontSize: '0.88rem'
                                }}
                            >
                                Get in Touch
                            </Button>
                        </motion.div>
                    </Box>

                    <Box sx={styles.mobileMenuContainer}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>

            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={styles.drawer}
                >
                    {drawer}
                </Drawer>
            </Box>

            <Snackbar
                open={copiedEmail}
                autoHideDuration={3000}
                onClose={() => setCopiedEmail(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity="success" sx={{ width: '100%', fontWeight: 600 }}>
                    Email copied: adityasrivastav0853@gmail.com
                </Alert>
            </Snackbar>
        </AppBar>
    );
};

export default Navbar;
