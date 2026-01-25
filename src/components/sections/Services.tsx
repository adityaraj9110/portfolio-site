import { Box, Container, Typography, Grid, Paper, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Layers, Monitor, Database, Cloud, Download } from 'lucide-react';

import content from '../../data/content.json';

const iconMap: { [key: string]: React.ReactNode } = {
    Layers: <Layers size={32} />,
    Monitor: <Monitor size={32} />,
    Database: <Database size={32} />,
    Cloud: <Cloud size={32} />,
};

const Services = () => {
    return (
        <Box id="services" sx={{ py: 15, bgcolor: 'background.default' }}>
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
                            <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, fontSize: { xs: '3rem', md: '4rem' } }}>
                                Services
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ mb: 6, lineHeight: 1.6, fontWeight: 400 }}>
                                We provide end-to-end development services, specializing in front-end and back-end development,
                                as well as DevOps solutions. Our expertise includes React, Next.js, Node.js, databases, and cloud deployments.
                            </Typography>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{ py: 2, px: 4, borderRadius: 2, fontWeight: 700 }}
                                    href='https://www.linkedin.com/in/aditya-raj-9b2165227/'
                                    target="_blank"
                                >
                                    Explore More
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    startIcon={<Download size={20} />}
                                    component="a"
                                    href="/resume.pdf"
                                    download="Aditya_Raj_Resume.pdf"
                                    sx={{ py: 2, px: 4, borderRadius: 2, fontWeight: 700 }}
                                >
                                    Download Resume
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
                            {content.services.map((service, index) => (
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
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 4,
                                                height: '100%',
                                                bgcolor: 'rgba(255, 255, 255, 0.03)',
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                borderRadius: 4,
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                                                    transform: 'translateY(-5px)',
                                                    borderColor: 'primary.main',
                                                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                                                }
                                            }}
                                        >
                                            <Box sx={{ color: 'primary.main', mb: 3 }}>
                                                {iconMap[service.icon]}
                                            </Box>
                                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                                {service.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
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
