import { Box, Fab, Tooltip, Zoom, useTheme } from '@mui/material';
import { Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { styles } from './FloatingActions.styles';

const FloatingActions = () => {
    const theme = useTheme();

    return (
        <Box sx={styles.container}>
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
                        sx={styles.linkWrapper}
                    >
                        <Fab color="secondary" aria-label="hire-me" sx={styles.hireMeFab}>
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
                        sx={styles.linkWrapper}
                    >
                        <Fab aria-label="download-cv" sx={styles.resumeFab(theme)}>
                            <Download size={24} />
                        </Fab>
                    </Box>
                </motion.div>
            </Tooltip>
        </Box>
    );
};

export default FloatingActions;
