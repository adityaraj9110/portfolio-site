import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Stack,
    Chip,
    useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Storage, Speed } from '@mui/icons-material';
import content from '../../data/content.json';

const layerIcons = [Code, Storage, Speed];

const TechStackMatrix = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box id="tech-stack" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            letterSpacing: 2,
                            display: 'block',
                            mb: 1
                        }}
                    >
                        System Capabilities
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            fontSize: { xs: '2rem', md: '2.75rem' },
                            mb: 2
                        }}
                    >
                        Architecture-Grouped Tech Matrix
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400, lineHeight: 1.6 }}
                    >
                        Technologies, frameworks, and testing layers battle-tested across high-scale
                        production systems.
                    </Typography>
                </Box>

                <Grid container spacing={3.5}>
                    {content.techStackLayers.map((layer, index) => {
                        const Icon = layerIcons[index] || Code;
                        return (
                            <Grid size={{ xs: 12, md: 4 }} key={layer.category}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                    style={{ height: '100%' }}
                                >
                                    <Card
                                        elevation={0}
                                        sx={{
                                            height: '100%',
                                            borderRadius: 3.5,
                                            p: 3,
                                            bgcolor: isDark ? 'rgba(15, 23, 42, 0.65)' : '#FFFFFF',
                                            border: '1px solid',
                                            borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                height: '3px',
                                                background: index === 0
                                                    ? 'linear-gradient(90deg, #3B82F6, #60A5FA)'
                                                    : index === 1
                                                    ? 'linear-gradient(90deg, #8B5CF6, #A78BFA)'
                                                    : 'linear-gradient(90deg, #10B981, #34D399)',
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: 0 }}>
                                            <Box
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: 2.5,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    bgcolor: isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.08)',
                                                    color: 'primary.main',
                                                    mb: 2.5
                                                }}
                                            >
                                                <Icon sx={{ fontSize: 26 }} />
                                            </Box>

                                            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                                                {layer.category}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ mb: 3, lineHeight: 1.6, minHeight: 44 }}
                                            >
                                                {layer.description}
                                            </Typography>

                                            <Stack spacing={1}>
                                                {layer.skills.map((skill) => (
                                                    <Box
                                                        key={skill}
                                                        sx={{
                                                            p: 1.2,
                                                            px: 1.8,
                                                            borderRadius: 2,
                                                            bgcolor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                                                            border: '1px solid',
                                                            borderColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            transition: 'all 0.2s ease',
                                                            '&:hover': {
                                                                bgcolor: isDark ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.05)',
                                                                borderColor: 'primary.main',
                                                                transform: 'translateX(4px)'
                                                            }
                                                        }}
                                                    >
                                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                                            {skill}
                                                        </Typography>
                                                        <Chip
                                                            label="PROD"
                                                            size="small"
                                                            sx={{
                                                                fontSize: '0.65rem',
                                                                height: 20,
                                                                fontWeight: 700,
                                                                bgcolor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)',
                                                                color: 'text.secondary'
                                                            }}
                                                        />
                                                    </Box>
                                                ))}
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default TechStackMatrix;
