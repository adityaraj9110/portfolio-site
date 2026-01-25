import { Box, Container, Typography, Stack, Divider, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const PerspectiveExperience = [
    {
        company: 'Bigoh Notations PVT LTD',
        role: 'Software Engineer',
        period: 'Jan 2024 - Present',
        location: 'Noida, UP',
        description: 'Working on high-impact service-based and product-based projects, focusing on React, TypeScript, and AI-driven solutions.',
        highlights: [
            {
                name: 'FrankieOne / One-SDK (Service)',
                desc: 'Developed a customizable client-side JS library for KYC/IDV onboarding. Improved reliability and reduced integration effort for multiple clients.',
                tech: 'ReactJs, Tailwind, MUI, TypeScript, Redux, React Hook Form'
            },
            {
                name: 'FrankieOne Portal (Service)',
                desc: 'Built key frontend modules for identity verification and AML fraud checks. Contributed to backend development using Node.js and SQL, and optimized existing APIs to reduce response times, improving overall system performance, operational efficiency, and audit transparency.',
                tech: 'React.js, Tailwind, MUI, TypeScript, TanStack Query, Playwright, Node.js, SQL'
            },
            {
                name: 'Costimizer (Product)',
                desc: 'Cloud cost management platform. Built dashboards and optimized API calls to help users identify cost anomalies.',
                tech: 'ReactJs, MUI, TypeScript, TanStack Query, Yup'
            },
            {
                name: 'DigiLawyer (Product)',
                desc: 'AI-powered legal-tech platform. Implemented AI-driven agentic workflows and optimized responsive UI.',
                tech: 'ReactJs, Next.js, TypeScript, MUI, React Hook Form'
            }
        ]
    }
];

const Experience = () => {
    return (
        <Box id="experience" sx={{ py: 15 }}>
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" gutterBottom align="center" sx={{ mb: 10 }}>
                        Experience & Projects
                    </Typography>
                </motion.div>

                <Stack spacing={8}>
                    {PerspectiveExperience.map((exp, index) => (
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
                            {index !== PerspectiveExperience.length - 1 && (
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
