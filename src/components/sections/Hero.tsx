import { Box, Typography, Button, Container, Stack, Avatar } from '@mui/material';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { ArrowForward, Download } from '@mui/icons-material';
import { useEffect, useRef } from 'react';

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
            }}
        >
            {/* Background Decorative Elements */}
            <Box
                component={motion.div}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(100,100,255,0.15) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    zIndex: -1,
                }}
            />

            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    spacing={4}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Box sx={{ maxWidth: '700px', textAlign: { xs: 'center', md: 'left' } }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 600,
                                    letterSpacing: 3,
                                    textTransform: 'uppercase',
                                    color: 'secondary.main',
                                    mb: 2,
                                }}
                            >
                                Full Stack Developer & AI Enthusiast
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '3rem', md: '5rem' },
                                    lineHeight: 1.1,
                                    mb: 3,
                                }}
                            >
                                Aditya <span style={{ fontStyle: 'italic' }}>Raj</span>
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
                                Software Engineer at Bigoh Notations.
                                I specialize in building highly scalable AI-powered platforms and complex SDKs with a focus on premium UX/UI.
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
