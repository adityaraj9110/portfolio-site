import { useState, useMemo } from 'react';
import { Box, Container, Typography, ToggleButton, ToggleButtonGroup, useTheme, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';
import { Button } from '@mui/material';
import ProjectCard from '../ProjectCard';
import content from '../../data/content.json';

const Projects = () => {
    const theme = useTheme();
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Extract unique categories
    const categories = useMemo(() => {
        const allCats = content.projects.flatMap(p => p.categories); // Flatten array of arrays
        return ['All', ...Array.from(new Set(allCats))];
    }, []);

    const filteredProjects = useMemo(() => {
        if (selectedCategory === 'All') return content.projects;
        return content.projects.filter(p => p.categories.includes(selectedCategory));
    }, [selectedCategory]);

    const handleCategoryChange = (
        _event: React.MouseEvent<HTMLElement>,
        newCategory: string | null,
    ) => {
        if (newCategory !== null) {
            setSelectedCategory(newCategory);
        }
    };

    return (
        <Box id="projects" sx={{ py: 15, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" gutterBottom align="center" sx={{ mb: 2, fontWeight: 800 }}>
                        Selected Projects
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
                        A showcase of my recent work, featuring complex web applications and AI-powered solutions.
                    </Typography>
                </motion.div>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
                    <ToggleButtonGroup
                        value={selectedCategory}
                        exclusive
                        onChange={handleCategoryChange}
                        aria-label="project category"
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: 1,
                            bgcolor: 'transparent',
                            '& .MuiToggleButton-root': {
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: '20px !important',
                                px: 3,
                                py: 1,
                                textTransform: 'capitalize',
                                fontWeight: 600,
                                color: 'text.secondary',
                                bgcolor: 'background.default',
                                '&.Mui-selected': {
                                    bgcolor: 'primary.main',
                                    color: theme.palette.getContrastText(theme.palette.primary.main),
                                    borderColor: 'primary.main',
                                    '&:hover': {
                                        bgcolor: 'primary.dark',
                                    }
                                }
                            }
                        }}
                    >
                        {categories.map((category) => (
                            <ToggleButton key={category} value={category}>
                                {category}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Box>

                <Grid container spacing={4}>
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.title}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProjectCard
                                        project={project}
                                    />
                                </motion.div>
                            </Grid>
                        ))}
                    </AnimatePresence>
                </Grid>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Box sx={{ mt: 12, textAlign: 'center' }}>
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
