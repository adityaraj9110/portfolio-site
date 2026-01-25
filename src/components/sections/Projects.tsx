import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { publicImages } from '../../assets';

type Project = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    github?: string;
}

const projects: Project[] = [
    {
        title: 'Costimizer AI',
        description: 'Cloud cost management platform to optimize infrastructure spending and identify cost anomalies.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
        tags: ['React', 'MUI', 'TanStack Query', 'Yup', 'GraphQl'],
        link: 'https://costimizer.ai/',
    },
    {
        title: 'DigiLawyer AI',
        description: 'AI-powered legal-tech platform providing instant legal assxistance and documentation flows.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000',
        tags: ['Next.js', 'React', 'TypeScript', 'AI', 'GraphQl'],
        link: 'https://digilawyer.ai/',
    },
    {
        title: 'FrankieOne One-SDK',
        description: 'Highly customizable JS library for identity verification and anti-fraud onboarding.',
        image: publicImages.fintech,
        tags: ['TypeScript', 'React', 'Redux', 'SDK'],
    },
    {
        title: 'FrankieOne Portal',
        description: 'Built key frontend modules for identity verification and AML fraud checks. Contributed to backend development using Node.js and SQL, and optimized existing APIs to reduce response times, improving overall system performance, operational efficiency, and audit transparency.',
        image: publicImages.fintech,
        tags: ['TypeScript', 'React', 'Redux', 'Node.js', 'SQL', 'TanStack Query', 'Playwright'],
    }
];



const Projects = () => {
    return (
        <Box id="projects" sx={{ py: 15, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" gutterBottom align="center" sx={{ mb: 8 }}>
                        Selected Projects
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                style={{
                                    height: '100%'
                                }}
                            >
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        bgcolor: 'background.default',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={project.image}
                                        alt={project.title}
                                        sx={{ objectFit: 'fill', transition: 'transform 0.5s ease', '&:hover': { transform: 'scale(1.05)' } }}
                                    />
                                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                                        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                                            {project.tags.map(tag => (
                                                <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ borderRadius: 1 }} />
                                            ))}
                                        </Stack>
                                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                            {project.description}
                                        </Typography>
                                        <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
                                            {project?.link && <Button
                                                startIcon={<ExternalLink size={18} />}
                                                sx={{ fontWeight: 700 }}
                                                component="a"
                                                href={project.link}
                                                target="_blank"
                                            >
                                                Live
                                            </Button>}
                                            {project?.github && <Button
                                                startIcon={<Github size={18} />}
                                                color="inherit"
                                                component="a"
                                                href={project.github}
                                                target="_blank"
                                            >
                                                Code
                                            </Button>}
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Box sx={{ mt: 8, textAlign: 'center' }}>
                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<Github size={20} />}
                            component="a"
                            href="https://github.com/adityaraj9110"
                            target="_blank"
                            sx={{
                                py: 1.5,
                                px: 4,
                                borderRadius: 2,
                                fontWeight: 600,
                                textTransform: 'none',
                                fontSize: '1.1rem'
                            }}
                        >
                            Show More Projects
                        </Button>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Projects;
