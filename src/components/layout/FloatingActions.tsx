import { Box, Fab, Tooltip, Zoom, useTheme } from '@mui/material';
import { Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingActions = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: { xs: 20, md: 40 },
                right: { xs: 20, md: 40 },
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            <Tooltip title="Hire Me" placement="left" TransitionComponent={Zoom} arrow>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                >
                    <Box
                        component="a"
                        href="mailto:adityasrivastav0853@gmail.com"
                        sx={{ textDecoration: 'none' }}
                    >
                        <Fab
                            color="secondary"
                            aria-label="hire-me"
                            sx={{
                                width: { xs: 50, md: 60 },
                                height: { xs: 50, md: 60 },
                                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                                boxShadow: '0 8px 16px rgba(33, 150, 243, 0.3)',
                                '&:hover': {
                                    boxShadow: '0 12px 20px rgba(33, 150, 243, 0.4)',
                                },
                            }}
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 10, -10, 10, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: 2
                                }}
                            >
                                <Mail size={24} color="white" />
                            </motion.div>
                        </Fab>
                    </Box>
                </motion.div>
            </Tooltip>

            <Tooltip title="Download Resume" placement="left" TransitionComponent={Zoom} arrow>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <Box
                        component="a"
                        href="/resume.pdf"
                        download="Aditya_Raj_Resume.pdf"
                        sx={{ textDecoration: 'none' }}
                    >
                        <Fab
                            aria-label="download-cv"
                            sx={{
                                width: { xs: 50, md: 60 },
                                height: { xs: 50, md: 60 },
                                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'white',
                                color: 'primary.main',
                                border: '2px solid',
                                borderColor: 'primary.main',
                                backdropFilter: 'blur(10px)',
                                '&:hover': {
                                    bgcolor: 'primary.main',
                                    color: 'primary.contrastText',
                                },
                            }}
                        >
                            <Download size={24} />
                        </Fab>
                    </Box>
                </motion.div>
            </Tooltip>
        </Box>
    );
};

export default FloatingActions;
