import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Typography,
    Box,
    Stack,
    Chip,
    Button,
    Divider,
    useTheme,
    Paper,
    Grid
} from '@mui/material';
import { Close, OpenInNew, CheckCircle, WarningAmber, Memory, TrendingUp, MenuBook, Layers } from '@mui/icons-material';

export interface CaseStudyData {
    id: string;
    title: string;
    product: string;
    domain: string;
    headlineMetric: string;
    role: string;
    stack: string[];
    link: string;
    image: string;
    summary: string;
    sections: {
        problem: string;
        rootCause: string[];
        architecture: string;
        implementation: string;
        results: string[];
        lessons: string;
    };
}

interface CaseStudyModalProps {
    open: boolean;
    onClose: () => void;
    caseStudy: CaseStudyData | null;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ open, onClose, caseStudy }) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    if (!caseStudy) return null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            scroll="paper"
            PaperProps={{
                sx: {
                    borderRadius: 3,
                    background: isDark ? '#0F172A' : '#FFFFFF',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                }
            }}
        >
            <DialogTitle
                sx={{
                    p: 3,
                    pb: 2,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: 2,
                    borderBottom: '1px solid',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                }}
            >
                <Box>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }} flexWrap="wrap" gap={1}>
                        <Chip
                            label={caseStudy.domain}
                            size="small"
                            sx={{
                                fontWeight: 700,
                                bgcolor: 'primary.main',
                                color: '#FFFFFF',
                                fontSize: '0.75rem',
                            }}
                        />
                        <Chip
                            label={caseStudy.headlineMetric}
                            size="small"
                            variant="outlined"
                            sx={{
                                fontWeight: 800,
                                borderColor: '#10B981',
                                color: '#10B981',
                                fontSize: '0.75rem',
                            }}
                        />
                        <Typography variant="caption" color="text.secondary">
                            Role: <strong>{caseStudy.role}</strong>
                        </Typography>
                    </Stack>
                    <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1.3 }}>
                        {caseStudy.title}
                    </Typography>
                </Box>
                <IconButton onClick={onClose} aria-label="close" size="small" sx={{ color: 'text.secondary' }}>
                    <Close />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ p: { xs: 2.5, md: 4 } }}>
                <Stack spacing={4}>
                    {/* Tech Stack Pills */}
                    <Box>
                        <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700, color: 'text.secondary', display: 'block', mb: 1 }}>
                            Production Tech Stack
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" gap={1}>
                            {caseStudy.stack.map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    size="small"
                                    sx={{
                                        borderRadius: 1.5,
                                        fontWeight: 600,
                                        fontSize: '0.75rem',
                                        bgcolor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                                    }}
                                />
                            ))}
                        </Stack>
                    </Box>

                    {/* Section 1: Context & Problem */}
                    <Box>
                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                            <WarningAmber sx={{ color: '#F59E0B', fontSize: 22 }} />
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                1. Context &amp; Production Problem
                            </Typography>
                        </Stack>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                            {caseStudy.sections.problem}
                        </Typography>
                    </Box>

                    {/* Section 2: Root-Cause Diagnosis */}
                    <Box>
                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                            <Memory sx={{ color: 'primary.main', fontSize: 22 }} />
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                2. Root-Cause Diagnosis
                            </Typography>
                        </Stack>
                        <Stack spacing={1.5}>
                            {caseStudy.sections.rootCause.map((item, idx) => (
                                <Paper
                                    key={idx}
                                    elevation={0}
                                    sx={{
                                        p: 2,
                                        borderRadius: 2,
                                        bgcolor: isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(241, 245, 249, 0.7)',
                                        borderLeft: '4px solid',
                                        borderColor: 'primary.main',
                                    }}
                                >
                                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                        {item}
                                    </Typography>
                                </Paper>
                            ))}
                        </Stack>
                    </Box>

                    {/* Section 3: Architecture & Trade-offs */}
                    <Box>
                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                            <Layers sx={{ color: '#8B5CF6', fontSize: 22 }} />
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                3. Architecture Decisions &amp; Trade-offs
                            </Typography>
                        </Stack>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                            {caseStudy.sections.architecture}
                        </Typography>
                    </Box>

                    {/* Section 4: Implementation Deep-Dive */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                            4. Implementation Deep-Dive
                        </Typography>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 2.5,
                                borderRadius: 2,
                                bgcolor: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(248, 250, 252, 1)',
                                border: '1px solid',
                                borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                            }}
                        >
                            <Typography
                                component="div"
                                variant="body2"
                                sx={{
                                    lineHeight: 1.8,
                                    whiteSpace: 'pre-line',
                                    fontFamily: 'inherit',
                                    color: 'text.secondary'
                                }}
                            >
                                {caseStudy.sections.implementation}
                            </Typography>
                        </Paper>
                    </Box>

                    {/* Section 5: Quantified Results */}
                    <Box>
                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                            <TrendingUp sx={{ color: '#10B981', fontSize: 22 }} />
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                5. Quantified Results &amp; Verified Impact
                            </Typography>
                        </Stack>
                        <Grid container spacing={2}>
                            {caseStudy.sections.results.map((res, idx) => (
                                <Grid size={{ xs: 12, sm: idx === 0 ? 12 : 6 }} key={idx}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 2,
                                            height: '100%',
                                            borderRadius: 2,
                                            bgcolor: isDark ? 'rgba(16, 185, 129, 0.08)' : 'rgba(16, 185, 129, 0.06)',
                                            border: '1px solid rgba(16, 185, 129, 0.25)',
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: 1.5
                                        }}
                                    >
                                        <CheckCircle sx={{ color: '#10B981', fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                                        <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.5 }}>
                                            {res}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Section 6: Lessons Learned */}
                    <Box>
                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                            <MenuBook sx={{ color: '#EC4899', fontSize: 22 }} />
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                6. Lessons Learned &amp; Engineering Takeaways
                            </Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontStyle: 'italic' }}>
                            "{caseStudy.sections.lessons}"
                        </Typography>
                    </Box>
                </Stack>
            </DialogContent>

            <Divider />

            <DialogActions sx={{ p: 2.5, px: 3, justifyContent: 'space-between' }}>
                <Button onClick={onClose} color="inherit">
                    Close Case Study
                </Button>
                {caseStudy.link && (
                    <Button
                        variant="contained"
                        endIcon={<OpenInNew />}
                        component="a"
                        href={caseStudy.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ px: 3, fontWeight: 700 }}
                    >
                        Visit {caseStudy.product}
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};

export default CaseStudyModal;
