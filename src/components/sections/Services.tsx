import { Box, Container, Typography, Grid, Paper, Stack, Button, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { Layers, Monitor, Database, Cloud, Download } from 'lucide-react';

const services = [
    {
        title: 'Full Stack Development',
        description: 'Building scalable and efficient applications with expertise in front-end and back-end technologies, ensuring seamless integration and optimal performance.',
        icon: <Layers size={32} />,
    },
    {
        title: 'Front-End Development',
        description: 'Creating responsive and high-performance web applications using React, Next.js, TypeScript, HTML, and CSS.',
        icon: <Monitor size={32} />,
    },
    {
        title: 'Back-End Development',
        description: 'Developing robust and scalable back-end systems using Node.js, Express, SQL, and NoSQL databases, ensuring high availability and security.',
        icon: <Database size={32} />,
    },
    {
        title: 'DevOps & Cloud Solutions',
        description: 'Expertise in Docker, CI/CD pipelines, and cloud management for automated deployments and scalable infrastructure.',
        icon: <Cloud size={32} />,
    }
];

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
                        <Grid container spacing={3}>
                            {services.map((service, index) => (
                                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
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
                                                }
                                            }}
                                        >
                                            <Box sx={{ color: 'primary.main', mb: 3 }}>
                                                {service.icon}
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
