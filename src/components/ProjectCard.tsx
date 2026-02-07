import { Box, Typography, Card, CardContent, CardMedia, Button, Stack, Chip, useTheme } from '@mui/material';
import { ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';

// Helper to resolve images (copied from original Projects.tsx)
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

    // Animation for stacking effect
    // We can use useScroll to create a parallax or scale effect as it scrolls

    return (
        <Card
            elevation={0}
            ref={cardRef}
            onClick={handleCardClick}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 1.5,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                transition: 'all 0.3s ease',
                cursor: project.link ? 'pointer' : 'default',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                    borderColor: 'primary.main'
                }
            }}
        >
            {/* Image Section */}
            <Box sx={{
                width: '100%',
                height: '240px',
                position: 'relative',
                overflow: 'hidden',
                bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100'
            }}>
                <CardMedia
                    component="img"
                    image={getImage(project.image)}
                    alt={project.title}
                    sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        '&:hover': { transform: 'scale(1.05)' }
                    }}
                />
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 2
                    }}
                >
                    {project.categories.slice(0, 1).map((cat: string) => (
                        <Chip
                            key={cat}
                            label={cat}
                            size="small"
                            sx={{
                                bgcolor: 'rgba(0,0,0,0.7)',
                                color: 'white',
                                backdropFilter: 'blur(4px)',
                                fontWeight: 600,
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}
                        />
                    ))}
                </Stack>
            </Box>

            {/* Content Section */}
            <CardContent sx={{
                p: 3,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Typography variant="h5" fontWeight={700} sx={{ mb: 1.5 }}>
                    {project.title}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        mb: 3,
                        flexGrow: 1,
                        lineHeight: 1.6,
                        // Line clamping for consistent height
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                >
                    {project.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 3 }}>
                    {project.tags.slice(0, 4).map((tag: string) => ( // Limit tags to 4
                        <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            variant="outlined"
                            sx={{
                                borderRadius: 1,
                                fontSize: '0.75rem',
                                height: 24,
                                borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'
                            }}
                        />
                    ))}
                    {project.tags.length > 4 && (
                        <Chip
                            label={`+${project.tags.length - 4}`}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.75rem', height: 24 }}
                        />
                    )}
                </Box>

                <Stack direction="row" spacing={1.5} sx={{ mt: 'auto' }}>
                    {project.link && (
                        <Button
                            variant="contained"
                            size="small"
                            startIcon={<ExternalLink size={16} />}
                            component="a"
                            href={project.link}
                            target="_blank"
                            onClick={handleButtonClick}
                            sx={{ borderRadius: 2, flex: 1 }}
                        >
                            Demo
                        </Button>
                    )}
                    {project.github && (
                        <Button
                            variant="outlined"
                            size="small"
                            startIcon={<Github size={16} />}
                            component="a"
                            href={project.github}
                            target="_blank"
                            onClick={handleButtonClick}
                            sx={{ borderRadius: 2, flex: 1 }}
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
