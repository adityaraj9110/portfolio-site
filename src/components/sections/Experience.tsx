import { Box, Container, Typography, Stack, Divider, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styles } from './Experience.styles';
import content from '../../data/content.json';

const Experience = () => {
    return (
        <Box id="experience" sx={styles.container}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" gutterBottom align="center" sx={styles.sectionTitle}>
                        Experience & Projects
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={styles.sectionSubtitle}>
                        My professional journey through various roles and impactful projects.
                    </Typography>
                </motion.div>

                <Stack spacing={8}>
                    {content.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Box sx={styles.experienceContainer}>
                                <Grid container spacing={4}>
                                    <Grid size={{ xs: 12, md: 3 }}>
                                        <Typography variant="h6" sx={styles.period}>
                                            {exp.period}
                                        </Typography>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 9 }}>
                                        <Typography variant="h5" sx={styles.role}>
                                            {exp.role}
                                        </Typography>
                                        <Typography variant="h6" color="primary" sx={styles.company}>
                                            {exp.company}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" sx={styles.description}>
                                            {exp.description}
                                        </Typography>

                                        <Stack spacing={4}>
                                            {exp.highlights.map((item, i) => (
                                                <Box key={i}>
                                                    <Typography variant="h6" sx={styles.highlightName}>
                                                        {item.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={styles.highlightDesc}>
                                                        {item.desc}
                                                    </Typography>
                                                    <Typography variant="caption" sx={styles.highlightTech}>
                                                        {item.tech}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                            {index !== content.experience.length - 1 && (
                                <Divider sx={styles.divider} />
                            )}
                        </motion.div>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default Experience;
