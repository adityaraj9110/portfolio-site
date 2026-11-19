import { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Stack,
    IconButton,
    Divider,
    Button,
    Tooltip,
    Snackbar,
    Alert,
    useTheme
} from '@mui/material';
import { Mail, ContentCopy, Check } from '@mui/icons-material';
import { Github, Linkedin, Package } from 'lucide-react';
import { styles } from './Footer.styles';

const Footer = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('adityasrivastav0853@gmail.com');
        setCopiedEmail(true);
    };

    return (
        <Box sx={{ ...styles.container, py: { xs: 8, md: 10 } }}>
            <Container maxWidth="md">
                <Stack spacing={4} alignItems="center" textAlign="center">
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 2 }}>
                        Let's Connect
                    </Typography>

                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            fontSize: { xs: '1.85rem', md: '2.5rem' },
                            maxWidth: 700
                        }}
                    >
                        Let's talk frontend architecture, web performance, or AI interfaces.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, lineHeight: 1.7 }}>
                        Always happy to connect with engineers, founders, and technical leaders building
                        scalable web products, published developer tools, or AI-native systems.
                    </Typography>

                    {/* Action buttons */}
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<Mail />}
                            component="a"
                            href="mailto:adityasrivastav0853@gmail.com"
                            sx={{ px: 4, py: 1.3, fontWeight: 700, borderRadius: 2.5 }}
                        >
                            adityasrivastav0853@gmail.com
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={copiedEmail ? <Check sx={{ color: '#10B981' }} /> : <ContentCopy />}
                            onClick={handleCopyEmail}
                            sx={{ px: 3, py: 1.3, fontWeight: 600, borderRadius: 2.5, textTransform: 'none' }}
                        >
                            {copiedEmail ? 'Email Copied!' : 'Copy Email'}
                        </Button>
                    </Stack>

                    {/* Social links row */}
                    <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
                        <Tooltip title="GitHub (@adityaraj9110)">
                            <IconButton
                                color="inherit"
                                component="a"
                                href="https://github.com/adityaraj9110"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)' }}
                            >
                                <Github size={20} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="LinkedIn Profile">
                            <IconButton
                                color="inherit"
                                component="a"
                                href="https://www.linkedin.com/in/aditya-raj-9b2165227/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)' }}
                            >
                                <Linkedin size={20} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="@frankieone/one-sdk npm Package">
                            <IconButton
                                color="inherit"
                                component="a"
                                href="https://www.npmjs.com/package/@frankieone/one-sdk"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)' }}
                            >
                                <Package size={20} />
                            </IconButton>
                        </Tooltip>
                    </Stack>

                    <Divider sx={{ ...styles.divider, width: '100%', my: 3 }} />

                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Aditya Raj • Software Engineer • Noida, UP, India. Built with React &amp; TypeScript.
                    </Typography>
                </Stack>
            </Container>

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
        </Box>
    );
};

export default Footer;
