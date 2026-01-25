import { Box, Typography, Button, Container, Stack, Avatar } from '@mui/material';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { ArrowForward, Download } from '@mui/icons-material';
import { useRef, useEffect } from 'react';
import Hero3D from '../3d/Hero3D';

const Counter = ({ value }: { value: number }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, count, value]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

import content from '../../data/content.json';

const Hero = () => {
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
                                sx={{
                                    fontWeight: 700,
                                    letterSpacing: 2,
                                    textTransform: 'uppercase',
                                    color: 'secondary.main',
                                    mb: 2,
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

                            {/* Stats Section */}
                            <Stack
                                direction="row"
                                spacing={{ xs: 2, md: 6 }}
                                sx={{
                                    p: 3,
                                    borderRadius: 4,
                                    bgcolor: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    width: 'fit-content',
                                    mx: { xs: 'auto', md: 0 },
                                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                {[
                                    { label: 'Experience', value: 3 },
                                    { label: 'Projects', value: 25 },
                                    { label: 'Clients', value: 4 }
                                ].map((stat, i) => (
                                    <Box key={i} sx={{ textAlign: 'center' }}>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontWeight: 800,
                                                color: 'primary.main',
                                                fontSize: { xs: '1.8rem', md: '2.5rem' },
                                                mb: 0.5,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Counter value={stat.value} />+
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'text.secondary',
                                                textTransform: 'uppercase',
                                                letterSpacing: 1,
                                                fontSize: { xs: '0.7rem', md: '0.8rem' },
                                                fontWeight: 600
                                            }}
                                        >
                                            {stat.label}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
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
