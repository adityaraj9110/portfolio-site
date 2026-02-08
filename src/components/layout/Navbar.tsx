import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon, Download } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { ColorModeContext } from '../../App';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { styles } from './Navbar.styles';

const Navbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = ['Projects', 'Reviews', 'AI-Insights', 'Experience'];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={styles.drawerTitle}>
                ADITYA
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} component="a" href={`#${item.toLowerCase()}`}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ my: 1 }} />
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
                        <Typography variant="h6" sx={styles.logo}>
                            ADITYA
                        </Typography>
                    </motion.div>

                    <Box sx={styles.desktopNav}>
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Button color="inherit" href={`#${item.toLowerCase()}`} sx={styles.navButton}>
                                    {item}
                                </Button>
                            </motion.div>
                        ))}
                        <IconButton onClick={colorMode.toggleColorMode} color="inherit" sx={styles.themeToggle}>
                            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Box sx={styles.resumeButtonOuter}>
                                {/* Rotating Border */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={styles.resumeRotatingBorder(theme)}
                                />
                                {/* Inner Button */}
                                <Button
                                    variant="text"
                                    color="inherit"
                                    sx={styles.resumeButtonInner(theme)}
                                    startIcon={<Download />}
                                    component="a"
                                    href="/resume.pdf"
                                    download="Aditya_Raj_Resume.pdf"
                                >
                                    Resume
                                </Button>
                            </Box>
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
        </AppBar>
    );
};

export default Navbar;
