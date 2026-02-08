import { Box, Container, Grid, Typography, Stack, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { styles } from './About.styles';
import content from '../../data/content.json';

const About = () => {
    const theme = useTheme();
    const [titleMain, titleSub] = content.about.title.split('\n');

    return (
        <Box id="about" sx={styles.container}>
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
                                    sx={styles.animatedTitle(theme)}
                                >
                                    {titleSub}
                                </Box>
                            </Typography>
                            <Typography variant="body1" sx={styles.description}>
                                {content.about.description}
                            </Typography>

                            <Stack direction="row" flexWrap="wrap" gap={1}>
                                {content.about.skills.map((skill) => (
                                    <Paper key={skill} elevation={0} sx={styles.skillChip}>
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
                                sx={styles.profileImage}
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
