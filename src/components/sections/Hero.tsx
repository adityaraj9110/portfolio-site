import React, { Suspense, useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    Stack,
    Avatar,
    useTheme,
    Chip,
    IconButton,
    Snackbar,
    Alert,
    Tooltip
} from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowDownward, OpenInNew, ContentCopy, Check } from '@mui/icons-material';
import { Github, Linkedin, Package } from 'lucide-react';
import { styles } from './Hero.styles';
import content from '../../data/content.json';

// Lazy-load Three.js canvas so it does not block initial LCP render
const Hero3D = React.lazy(() => import('../3d/Hero3D'));

const Hero = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('adityasrivastav0853@gmail.com');
        setCopiedEmail(true);
    };

    return (
        <Box id="hero" sx={styles.container}>
            {/* Suspense-loaded 3D Background */}
            <Suspense fallback={null}>
                <Hero3D />
            </Suspense>

            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    spacing={5}
                    alignItems="center"
                    justifyContent="space-between"
                    sx={styles.mainStack}
                >
                    <Box sx={styles.textSection}>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* Eyebrow Badge */}
                            <Box sx={{ mb: 2 }}>
                                <Chip
                                    label={content.hero.eyebrow}
                                    size="small"
                                    sx={{
                                        fontWeight: 700,
                                        bgcolor: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.1)',
                                        color: 'primary.main',
                                        border: '1px solid',
                                        borderColor: isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.25)',
                                        letterSpacing: 0.5,
                                        fontSize: '0.75rem',
                                        py: 1.5,
                                    }}
                                />
                            </Box>

                            {/* Name Title */}
                            <Typography variant="h1" sx={{ ...styles.title, fontWeight: 900, mb: 1.5 }}>
                                {content.hero.title}
                            </Typography>

                            {/* Headline */}
                            <Typography
                                variant="h4"
                                component="h2"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '1.4rem', sm: '1.75rem', md: '2rem' },
                                    lineHeight: 1.25,
                                    mb: 2.5,
                                    color: isDark ? '#F1F5F9' : '#0F172A',
                                }}
                            >
                                {content.hero.headline}
                            </Typography>

                            {/* Subheadline / Description */}
                            <Typography variant="body1" sx={styles.description}>
                                {content.hero.description}
                            </Typography>

                            {/* CTAs */}
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={2}
                                justifyContent={{ xs: 'center', md: 'flex-start' }}
                                sx={styles.buttonStack}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    component="a"
                                    href="#case-studies"
                                    endIcon={<ArrowDownward />}
                                    sx={{
                                        ...styles.primaryButton,
                                        fontWeight: 700,
                                        borderRadius: 2.5
                                    }}
                                >
                                    Read Case Studies
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    component="a"
                                    href="https://www.npmjs.com/package/@frankieone/one-sdk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    endIcon={<OpenInNew />}
                                    sx={{
                                        ...styles.secondaryButton,
                                        fontWeight: 600,
                                        borderRadius: 2.5
                                    }}
                                >
                                    Explore @frankieone/one-sdk
                                </Button>
                            </Stack>

                            {/* Social Links & Quick Contact Bar */}
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                                justifyContent={{ xs: 'center', md: 'flex-start' }}
                                sx={{ mb: 4 }}
                            >
                                <Tooltip title="GitHub (@adityaraj9110)">
                                    <IconButton
                                        component="a"
                                        href="https://github.com/adityaraj9110"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="inherit"
                                        sx={{ bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)' }}
                                    >
                                        <Github size={20} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="LinkedIn Profile">
                                    <IconButton
                                        component="a"
                                        href="https://www.linkedin.com/in/aditya-raj-9b2165227/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="inherit"
                                        sx={{ bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)' }}
                                    >
                                        <Linkedin size={20} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="@frankieone/one-sdk on npm (4.5k+ weekly)">
                                    <IconButton
                                        component="a"
                                        href="https://www.npmjs.com/package/@frankieone/one-sdk"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="inherit"
                                        sx={{ bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)' }}
                                    >
                                        <Package size={20} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title={copiedEmail ? "Copied!" : "Copy Email Address"}>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        onClick={handleCopyEmail}
                                        startIcon={copiedEmail ? <Check sx={{ color: '#10B981' }} /> : <ContentCopy />}
                                        sx={{
                                            borderRadius: 2,
                                            fontWeight: 600,
                                            textTransform: 'none',
                                            fontSize: '0.8rem',
                                            py: 0.6
                                        }}
                                    >
                                        {copiedEmail ? 'Email Copied!' : 'Copy Email'}
                                    </Button>
                                </Tooltip>
                            </Stack>

                            {/* Tags */}
                            <Box sx={styles.tagsContainer}>
                                {content.hero.tags.map((tag: string, index: number) => (
                                    <motion.div
                                        key={tag}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + (index * 0.1) }}
                                    >
                                        <Box sx={styles.tagOuterBox}>
                                            <Box sx={styles.tagInnerBox(theme)}>
                                                <Box sx={styles.tagDot(theme)} />
                                                <Typography variant="caption" sx={{ ...styles.tagText(theme), fontWeight: 700 }}>
                                                    {tag}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>
                    </Box>

                    {/* Right Avatar */}
                    <Box sx={styles.avatarContainer}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Avatar
                                src="https://github.com/adityaraj9110.png"
                                alt="Aditya Raj"
                                sx={styles.avatar}
                            />
                        </motion.div>
                    </Box>
                </Stack>
            </Container>

            {/* Copy Feedback Snackbar */}
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

export default Hero;
