import { Box, Container, Grid, Typography, Stack, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

import content from '../../data/content.json';

const About = () => {
    const theme = useTheme();
    const [titleMain, titleSub] = content.about.title.split('\n');

    return (
        <Box id="about" sx={{ py: 15, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center" justifyContent={"space-between"}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="h2" gutterBottom sx={{ fontWeight: 800 }}>
                                {titleMain} <br />
                                <Box
                                    component={motion.span}
                                    initial={{ backgroundPosition: '200% center' }}
                                    whileInView={{ backgroundPosition: '-200% center' }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 3,
                                        ease: "linear"
                                    }}
                                    sx={{
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
                                    {titleSub}
                                </Box>
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'text.secondary', mb: 4, whiteSpace: 'pre-wrap' }}>
                                {content.about.description}
                            </Typography>

                            <Stack direction="row" flexWrap="wrap" gap={1}>
                                {content.about.skills.map((skill) => (
                                    <Paper
                                        key={skill}
                                        elevation={0}
                                        sx={{
                                            px: 2,
                                            py: 1,
                                            borderRadius: 2,
                                            bgcolor: 'background.default',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            fontSize: '0.9rem',
                                            fontWeight: 600
                                        }}
                                    >
                                        {skill}
                                    </Paper>
                                ))}
                            </Stack>
                        </motion.div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Box
                                component="img"
                                src="https://github.com/adityaraj9110.png"
                                sx={{
                                    width: '100%',
                                    borderRadius: 4,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    filter: 'grayscale(20%) kontrast(110%)',
                                    '&:hover': {
                                        filter: 'grayscale(0%)',
                                        transition: 'filter 0.5s ease'
                                    }
                                }}
                                alt="Aditya Raj Profile"
                            />
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
