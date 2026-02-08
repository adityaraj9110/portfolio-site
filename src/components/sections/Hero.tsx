import { Box, Typography, Button, Container, Stack, Avatar, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Download } from '@mui/icons-material';
import Hero3D from '../3d/Hero3D';
import { styles } from './Hero.styles';
import content from '../../data/content.json';

const Hero = () => {
    const theme = useTheme();

    return (
        <Box id="hero" sx={styles.container}>
            {/* 3D Background */}
            <Hero3D />

            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column-reverse', md: 'row' }}
                    spacing={4}
                    alignItems="center"
                    justifyContent="space-between"
                    sx={styles.mainStack}
                >
                    <Box sx={styles.textSection}>
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
                                sx={styles.subtitle(theme)}
                            >
                                {content.hero.subtitle}
                            </Typography>
                            <Typography variant="h1" sx={styles.title}>
                                {content.hero.title}
                            </Typography>
                            <Typography variant="h5" sx={styles.description}>
                                {content.hero.description}
                            </Typography>

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
                                    href="#projects"
                                    endIcon={<ArrowForward />}
                                    sx={styles.primaryButton}
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
                                    sx={styles.secondaryButton}
                                >
                                    Download Resume
                                </Button>
                            </Stack>

                            <Box sx={styles.tagsContainer}>
                                {(content.hero as any).tags?.map((tag: string, index: number) => (
                                    <motion.div
                                        key={tag}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + (index * 0.1) }}
                                        style={{ position: 'relative' }}
                                    >
                                        <Box sx={styles.tagOuterBox}>
                                            {/* Rotating Border */}
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                                style={styles.rotatingBorder(theme)}
                                            />

                                            {/* Inner Content */}
                                            <Box sx={styles.tagInnerBox(theme)}>
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
                                                    style={styles.tagDot(theme)}
                                                />
                                                <Typography variant="body2" fontWeight={600} sx={styles.tagText(theme)}>
                                                    {tag}
                                                </Typography>
                                            </Box>
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
                        <Box sx={styles.avatarContainer}>
                            <Avatar
                                src="https://github.com/adityaraj9110.png"
                                alt="Aditya Raj"
                                sx={styles.avatar}
                            />
                        </Box>
                    </motion.div>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;
