import { useState } from 'react';
import { Box, Fab, Tooltip, Zoom, useTheme, Snackbar, Alert } from '@mui/material';
import { Mail, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { styles } from './FloatingActions.styles';

const FloatingActions = () => {
    const theme = useTheme();
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText('adityasrivastav0853@gmail.com');
        setCopiedEmail(true);
    };

    return (
        <Box sx={styles.container}>
            <Tooltip title="Send Email" placement="left" TransitionComponent={Zoom} arrow>
                <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <Box
                        component="a"
                        href="mailto:adityasrivastav0853@gmail.com"
                        sx={styles.linkWrapper}
                    >
                        <Fab color="primary" aria-label="send-email" sx={styles.hireMeFab}>
                            <Mail size={22} color="white" />
                        </Fab>
                    </Box>
                </motion.div>
            </Tooltip>

            <Tooltip title={copiedEmail ? "Copied!" : "Copy Email"} placement="left" TransitionComponent={Zoom} arrow>
                <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                >
                    <Fab
                        aria-label="copy-email"
                        onClick={handleCopy}
                        sx={styles.resumeFab(theme)}
                    >
                        {copiedEmail ? <Check size={22} color="#10B981" /> : <Copy size={20} />}
                    </Fab>
                </motion.div>
            </Tooltip>

            <Snackbar
                open={copiedEmail}
                autoHideDuration={3000}
                onClose={() => setCopiedEmail(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert severity="success" sx={{ width: '100%', fontWeight: 600 }}>
                    Email copied: adityasrivastav0853@gmail.com
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default FloatingActions;
