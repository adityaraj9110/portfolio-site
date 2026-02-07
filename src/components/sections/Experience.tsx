import { Box, Container, Typography, Stack, Divider, Grid } from '@mui/material';
import { motion } from 'framer-motion';

import content from '../../data/content.json';

const Experience = () => {
    return (
        <Box id="experience" sx={{ py: 15 }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4, fontWeight: 800 }}>
                        Experience & Projects
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}>
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
                            <Box sx={{ position: 'relative' }}>
                                <Grid container spacing={4}>
                                    <Grid size={{ xs: 12, md: 3 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 700, opacity: 0.6 }}>
                                            {exp.period}
                                        </Typography>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 9 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                                            {exp.role}
                                        </Typography>
                                        <Typography variant="h6" color="primary" sx={{ mb: 1, fontSize: '1.2rem' }}>
                                            {exp.company}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                                            {exp.description}
                                        </Typography>

                                        <Stack spacing={4}>
                                            {exp.highlights.map((item, i) => (
                                                <Box key={i}>
                                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1.1rem' }}>
                                                        {item.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                        {item.desc}
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'primary.main' }}>
                                                        {item.tech}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                            {index !== content.experience.length - 1 && (
                                <Divider sx={{ mt: 8, opacity: 0.5 }} />
                            )}
                        </motion.div>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default Experience;
