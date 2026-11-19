import { Box, Container, Typography, Grid, Paper, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Layers, Monitor, Database, Cloud } from 'lucide-react';
import { styles } from './Services.styles';
import content from '../../data/content.json';

const iconMap: { [key: string]: React.ReactNode } = {
    Layers: <Layers size={32} />,
    Monitor: <Monitor size={32} />,
    Database: <Database size={32} />,
    Cloud: <Cloud size={32} />,
};

const Services = () => {
    return (
        <Box id="services" sx={styles.container}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    {/* Left Side: Header and Description */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="h2" sx={styles.sectionTitle}>
                                Services
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={styles.sectionDescription}>
                                We provide end-to-end development services, specializing in front-end and back-end development,
                                as well as DevOps solutions. Our expertise includes React, Next.js, Node.js, databases, and cloud deployments.
                            </Typography>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={styles.primaryButton}
                                    href='https://www.linkedin.com/in/aditya-raj-9b2165227/'
                                    target="_blank"
                                >
                                    Explore More
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    component="a"
                                    href="mailto:adityasrivastav0853@gmail.com"
                                    sx={styles.secondaryButton}
                                >
                                    Get in Touch
                                </Button>
                            </Stack>
                        </motion.div>
                    </Grid>

                    {/* Right Side: Services Grid */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Grid
                            container
                            spacing={3}
                            component={motion.div}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {((content as any).services || []).map((service: any, index: number) => (
                                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 50 },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: { duration: 0.6, ease: "easeOut" }
                                            }
                                        }}
                                    >
                                        <Paper elevation={0} sx={styles.serviceCard}>
                                            <Box sx={styles.serviceIcon}>
                                                {iconMap[service.icon]}
                                            </Box>
                                            <Typography variant="h5" sx={styles.serviceTitle}>
                                                {service.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={styles.serviceDescription}>
                                                {service.description}
                                            </Typography>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
