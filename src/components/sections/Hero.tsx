import { Box, Typography, Button, Container, Stack, Avatar, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Download } from '@mui/icons-material';
import Hero3D from '../3d/Hero3D';



import content from '../../data/content.json';

const Hero = () => {
    const theme = useTheme();

    return (
        <Box
            id="hero"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                pt: { xs: 15, md: 0 },
                position: 'relative',
                overflow: 'hidden',
                paddingBottom: "24px",
                zIndex: 1
            }}
        >
            {/* 3D Background */}
            <Hero3D />

            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    spacing={4}
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ position: 'relative', zIndex: 1 }}
                >
                    <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography
                                variant="h6"
                                component={motion.div}
                                initial={{ backgroundPosition: '200% center' }}
                                animate={{ backgroundPosition: '-200% center' }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "linear"
                                }}
                                sx={{
                                    fontWeight: 700,
                                    letterSpacing: 2,
                                    textTransform: 'uppercase',
                                    mb: 2,
                                    background: `linear-gradient(to right, ${theme.palette.text.secondary} 20%, ${theme.palette.primary.main} 40%, ${theme.palette.primary.main} 60%, ${theme.palette.text.secondary} 80%)`,
                                    backgroundSize: '200% auto',
                                    color: 'transparent',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-block'
                                }}
                            >
                                {content.hero.subtitle}
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '3rem', md: '3.5rem' },
                                    lineHeight: 1.1,
                                    mb: 3,
                                }}
                            >
                                {content.hero.title}
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'text.secondary',
                                    maxWidth: '600px',
                                    lineHeight: 1.6,
                                    fontWeight: 400,
                                    mb: 4,
                                    mx: { xs: 'auto', md: 0 }
                                }}
                            >
                                {content.hero.description}
                            </Typography>

                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={2}
                                justifyContent={{ xs: 'center', md: 'flex-start' }}
                                sx={{ mb: 6 }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    component="a"
                                    href="#projects"
                                    endIcon={<ArrowForward />}
                                    sx={{
                                        py: 1.5,
                                        px: 4,
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    View My Work
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    startIcon={<Download />}
                                    component="a"
                                    href="/resume.pdf"
                                    download="Aditya_Raj_Resume.pdf"
                                    sx={{
                                        py: 1.5,
                                        px: 4,
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    Download Resume
                                </Button>
                            </Stack>

                            <Box sx={{
                                display: 'flex',
                                gap: 2,
                                flexWrap: 'wrap',
                                justifyContent: { xs: 'center', md: 'flex-start' }
                            }}>
                                {(content.hero as any).tags?.map((tag: string, index: number) => (
                                    <motion.div
                                        key={tag}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + (index * 0.1) }}
                                    >
                                        <Box
                                            sx={{
                                                px: 2,
                                                py: 1,
                                                borderRadius: 'full',
                                                bgcolor: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                backdropFilter: 'blur(10px)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1
                                            }}
                                        >
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.5, 1, 0.5]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                style={{
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    backgroundColor: '#4dabf5'
                                                }}
                                            />
                                            <Typography variant="body2" fontWeight={600} color="text.secondary">
                                                {tag}
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>
                    </Box>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: -10,
                                    left: -10,
                                    right: -10,
                                    bottom: -10,
                                    border: '2px solid',
                                    borderColor: 'primary.main',
                                    borderRadius: '50%',
                                    opacity: 0.2,
                                    zIndex: -1
                                }
                            }}
                        >
                            <Avatar
                                src="https://github.com/adityaraj9110.png"
                                alt="Aditya Raj"
                                sx={{
                                    width: { xs: 200, md: 350 },
                                    height: { xs: 200, md: 350 },
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                    border: '5px solid white'
                                }}
                            />
                        </Box>
                    </motion.div>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;
