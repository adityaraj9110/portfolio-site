import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container } from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material';
import { useContext } from 'react';
import { ColorModeContext } from '../../App';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const Navbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    const navItems = ['About', 'Services', 'Experience', 'Projects'];

    return (
        <AppBar
            position="fixed"
            color="transparent"
            elevation={0}
            sx={{
                backdropFilter: 'blur(20px)',
                borderBottom: `1px solid ${theme.palette.divider}`,
                zIndex: theme.zIndex.drawer + 1
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -1, fontFamily: 'Outfit' }}>
                            ADITYA
                        </Typography>
                    </motion.div>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Button
                                    color="inherit"
                                    href={`#${item.toLowerCase()}`}
                                    sx={{
                                        fontWeight: 500,
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            opacity: 0.7
                                        }
                                    }}
                                >
                                    {item}
                                </Button>
                            </motion.div>
                        ))}
                        <IconButton onClick={colorMode.toggleColorMode} color="inherit" sx={{ ml: 1 }}>
                            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ ml: 2, px: 3 }}
                            component="a"
                            href="mailto:adityasrivastav0853@gmail.com"
                        >
                            Hire Me
                        </Button>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
