import { Box, Typography, Card, CardContent, CardMedia, Button, Stack, Chip, useTheme } from '@mui/material';
import { ExternalLink, Github, Activity } from 'lucide-react';
import { useRef } from 'react';
import { styles } from './ProjectCard.styles';

// Helper to resolve images
import { publicImages } from '../assets';
const getImage = (imagePath: string) => {
    if (imagePath.startsWith('http') || imagePath.startsWith('/')) {
        return imagePath;
    }
    const keys = imagePath.split('.');
    let current: any = publicImages;
    for (const key of keys) {
        if (current[key]) {
            current = current[key];
        } else {
            return '';
        }
    }
    return imagePath;
};

interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    categories: string[];
    link?: string;
    github?: string;
    stats?: {
        value: string;
        label: string;
    };
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const theme = useTheme();
    const cardRef = useRef<HTMLDivElement>(null);

    const handleCardClick = () => {
        if (project.link) {
            window.open(project.link, '_blank', 'noopener,noreferrer');
        }
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Card
            elevation={0}
            ref={cardRef}
            onClick={handleCardClick}
            sx={styles.card(theme, !!project.link)}
        >
            {/* Image Section */}
            <Box sx={styles.imageContainer(theme)}>
                <CardMedia
                    className="project-image"
                    component="img"
                    image={getImage(project.image)}
                    alt={project.title}
                    sx={styles.cardMedia}
                />

                {/* Categories Overlay */}
                <Stack direction="row" spacing={1} sx={styles.categoryOverlay}>
                    {project.categories.slice(0, 1).map((cat: string) => (
                        <Chip
                            key={cat}
                            label={cat}
                            size="small"
                            sx={styles.categoryChip}
                        />
                    ))}
                </Stack>
            </Box>

            {/* Content Section */}
            <CardContent sx={styles.cardContent}>
                <Box>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                        {project.title}
                    </Typography>

                    {/* Stats Section */}
                    {project.stats && (
                        <Box sx={styles.statsContainer(theme)}>
                            <Box sx={styles.statsIconBox}>
                                <Activity size={20} />
                            </Box>
                            <Box>
                                <Typography
                                    component="span"
                                    variant="h3"
                                    fontWeight={800}
                                    color="primary"
                                    sx={styles.statsValue}
                                >
                                    {project.stats.value}
                                </Typography>
                                <Typography variant="caption" display="block" color="text.secondary" fontWeight={500}>
                                    {project.stats.label}
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Typography variant="body2" color="text.secondary" sx={styles.description}>
                        {project.description}
                    </Typography>
                </Box>

                <Box sx={styles.tagsContainer}>
                    {project.tags.slice(0, 4).map((tag: string) => (
                        <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            variant="outlined"
                            sx={styles.tagChip(theme)}
                        />
                    ))}
                    {project.tags.length > 4 && (
                        <Chip
                            label={`+${project.tags.length - 4}`}
                            size="small"
                            variant="outlined"
                            sx={styles.moreTagsChip}
                        />
                    )}
                </Box>

                <Stack direction="row" spacing={2}>
                    {project.link && (
                        <Button
                            variant="contained"
                            fullWidth
                            startIcon={<ExternalLink size={18} />}
                            component="a"
                            href={project.link}
                            target="_blank"
                            onClick={handleButtonClick}
                            sx={styles.demoButton(theme)}
                        >
                            Live Demo
                        </Button>
                    )}
                    {project.github && (
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={<Github size={18} />}
                            component="a"
                            href={project.github}
                            target="_blank"
                            onClick={handleButtonClick}
                            sx={styles.codeButton(theme)}
                        >
                            Code
                        </Button>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
