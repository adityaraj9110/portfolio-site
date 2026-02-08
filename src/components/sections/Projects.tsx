import { useState, useMemo } from 'react';
import { Box, Container, Typography, ToggleButton, ToggleButtonGroup, useTheme, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';
import { Button } from '@mui/material';
import ProjectCard from '../ProjectCard';
import { styles } from './Projects.styles';
import content from '../../data/content.json';

const Projects = () => {
    const theme = useTheme();
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Extract unique categories
    const categories = useMemo(() => {
        const allCats = content.projects.flatMap(p => p.categories);
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
        <Box id="projects" sx={styles.container}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" gutterBottom align="center" sx={styles.sectionTitle}>
                        Selected Projects
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={styles.sectionSubtitle}>
                        A showcase of my recent work, featuring complex web applications and AI-powered solutions.
                    </Typography>
                </motion.div>

                <Box sx={styles.filterContainer}>
                    <ToggleButtonGroup
                        value={selectedCategory}
                        exclusive
                        onChange={handleCategoryChange}
                        aria-label="project category"
                        sx={styles.toggleButtonGroup(theme)}
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
                                    <ProjectCard project={project} />
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
                    <Box sx={styles.moreProjectsContainer}>
                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<Github size={20} />}
                            component="a"
                            href="https://github.com/adityaraj9110"
                            target="_blank"
                            sx={styles.moreProjectsButton}
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
