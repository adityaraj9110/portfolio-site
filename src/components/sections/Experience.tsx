import {
    Box,
    Container,
    Typography,
    Stack,
    Grid,
    Paper,
    Chip,
    useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { EmojiEvents, Groups, School, Business, ArrowRight } from '@mui/icons-material';
import content from '../../data/content.json';

const Experience = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box id="experience" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
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
                        Track Record &amp; Leadership
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
                        Experience &amp; Career Progression
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400, lineHeight: 1.6 }}
                    >
                        A continuous track record of scaling high-complexity SaaS applications,
                        publishing open-source libraries, and elevating engineering standards.
                    </Typography>
                </Box>

                <Stack spacing={6}>
                    {content.experience.map((exp: any, index: number) => {
                        const isEducation = exp.company.includes('College');
                        return (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: { xs: 3, md: 5 },
                                        borderRadius: 3.5,
                                        bgcolor: isDark ? 'rgba(15, 23, 42, 0.65)' : '#FFFFFF',
                                        border: '1px solid',
                                        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                                    }}
                                >
                                    <Grid container spacing={4}>
                                        {/* Left Column: Metadata */}
                                        <Grid size={{ xs: 12, md: 4 }}>
                                            <Box sx={{ position: 'sticky', top: 100 }}>
                                                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                                                    {isEducation ? (
                                                        <School sx={{ color: 'primary.main', fontSize: 28 }} />
                                                    ) : (
                                                        <Business sx={{ color: 'primary.main', fontSize: 28 }} />
                                                    )}
                                                    <Typography variant="h5" sx={{ fontWeight: 800 }}>
                                                        {exp.company}
                                                    </Typography>
                                                </Stack>

                                                <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 700, mb: 0.5 }}>
                                                    {exp.role}
                                                </Typography>

                                                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 2 }}>
                                                    {exp.period} • {exp.location}
                                                </Typography>

                                                {/* Honors Badge */}
                                                {exp.honors && (
                                                    <Paper
                                                        elevation={0}
                                                        sx={{
                                                            p: 2,
                                                            mb: 2,
                                                            borderRadius: 2,
                                                            bgcolor: isDark ? 'rgba(245, 158, 11, 0.1)' : 'rgba(245, 158, 11, 0.08)',
                                                            border: '1px solid rgba(245, 158, 11, 0.3)',
                                                            display: 'flex',
                                                            alignItems: 'flex-start',
                                                            gap: 1.5
                                                        }}
                                                    >
                                                        <EmojiEvents sx={{ color: '#F59E0B', fontSize: 22, mt: 0.2 }} />
                                                        <Box>
                                                            <Typography variant="caption" sx={{ fontWeight: 800, color: '#F59E0B', display: 'block' }}>
                                                                HONOR &amp; RECOGNITION
                                                            </Typography>
                                                            <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.4 }}>
                                                                {exp.honors}
                                                            </Typography>
                                                        </Box>
                                                    </Paper>
                                                )}

                                                {/* Leadership */}
                                                {exp.leadership && (
                                                    <Paper
                                                        elevation={0}
                                                        sx={{
                                                            p: 2,
                                                            borderRadius: 2,
                                                            bgcolor: isDark ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.05)',
                                                            border: '1px solid rgba(59, 130, 246, 0.2)',
                                                            display: 'flex',
                                                            alignItems: 'flex-start',
                                                            gap: 1.5
                                                        }}
                                                    >
                                                        <Groups sx={{ color: 'primary.main', fontSize: 22, mt: 0.2 }} />
                                                        <Box>
                                                            <Typography variant="caption" sx={{ fontWeight: 800, color: 'primary.main', display: 'block' }}>
                                                                LEADERSHIP &amp; CRAFT
                                                            </Typography>
                                                            <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.4 }}>
                                                                {exp.leadership}
                                                            </Typography>
                                                        </Box>
                                                    </Paper>
                                                )}
                                            </Box>
                                        </Grid>

                                        {/* Right Column: Highlights */}
                                        <Grid size={{ xs: 12, md: 8 }}>
                                            <Typography variant="body1" color="text.secondary" sx={{ mb: 3.5, lineHeight: 1.7 }}>
                                                {exp.description}
                                            </Typography>

                                            {exp.highlights && exp.highlights.length > 0 && (
                                                <Stack spacing={3}>
                                                    <Typography variant="subtitle2" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>
                                                        Key Flagship Contributions:
                                                    </Typography>

                                                    {exp.highlights.map((item: any, i: number) => (
                                                        <Paper
                                                            key={i}
                                                            elevation={0}
                                                            sx={{
                                                                p: 2.5,
                                                                borderRadius: 2.5,
                                                                bgcolor: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                                                                border: '1px solid',
                                                                borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
                                                                transition: 'border-color 0.2s',
                                                                '&:hover': {
                                                                    borderColor: 'primary.main'
                                                                }
                                                            }}
                                                        >
                                                            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                                                <ArrowRight sx={{ color: 'primary.main', fontSize: 20 }} />
                                                                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                                                                    {item.name}
                                                                </Typography>
                                                            </Stack>

                                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6, pl: 3.5 }}>
                                                                {item.desc}
                                                            </Typography>

                                                            <Box sx={{ pl: 3.5 }}>
                                                                <Stack direction="row" flexWrap="wrap" gap={0.8}>
                                                                    {item.tech.split(',').map((t: string) => (
                                                                        <Chip
                                                                            key={t.trim()}
                                                                            label={t.trim()}
                                                                            size="small"
                                                                            sx={{
                                                                                fontSize: '0.7rem',
                                                                                fontWeight: 600,
                                                                                height: 22
                                                                            }}
                                                                        />
                                                                    ))}
                                                                </Stack>
                                                            </Box>
                                                        </Paper>
                                                    ))}
                                                </Stack>
                                            )}
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </motion.div>
                        );
                    })}
                </Stack>
            </Container>
        </Box>
    );
};

export default Experience;
