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
    Paper
} from '@mui/material';
import { Close, Visibility, ArrowDownward } from '@mui/icons-material';

export interface ArticleData {
    slug: string;
    title: string;
    subtitle: string;
    stats: string;
    tags: string[];
    date: string;
    summary: string;
    content: string;
}

interface ArticleModalProps {
    open: boolean;
    onClose: () => void;
    article: ArticleData | null;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ open, onClose, article }) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    if (!article) return null;

    // Split article into paragraphs / sections for structured rendering
    const contentBlocks = article.content.split('\n\n');

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            scroll="paper"
            PaperProps={{
                sx: {
                    borderRadius: 3.5,
                    background: isDark ? '#0F172A' : '#FFFFFF',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
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
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }} flexWrap="wrap" gap={1}>
                        <Chip
                            icon={<Visibility sx={{ fontSize: '15px !important' }} />}
                            label={article.stats}
                            size="small"
                            color="primary"
                            sx={{ fontWeight: 700, fontSize: '0.75rem' }}
                        />
                        <Typography variant="caption" color="text.secondary">
                            Published: {article.date}
                        </Typography>
                    </Stack>
                    <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1.3 }}>
                        {article.title}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5, fontWeight: 500 }}>
                        {article.subtitle}
                    </Typography>
                </Box>
                <IconButton onClick={onClose} aria-label="close" size="small" sx={{ color: 'text.secondary' }}>
                    <Close />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ p: { xs: 2.5, md: 4 } }}>
                <Stack spacing={3}>
                    {/* Summary Callout */}
                    <Paper
                        elevation={0}
                        sx={{
                            p: 2.5,
                            borderRadius: 2.5,
                            bgcolor: isDark ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.05)',
                            borderLeft: '4px solid',
                            borderColor: 'primary.main',
                        }}
                    >
                        <Typography variant="body1" sx={{ fontWeight: 500, lineHeight: 1.7, color: 'text.primary' }}>
                            {article.summary}
                        </Typography>
                    </Paper>

                    {/* Article Body Content */}
                    <Box sx={{ mt: 2 }}>
                        {contentBlocks.map((block, idx) => {
                            if (block.startsWith('### ')) {
                                return (
                                    <Typography
                                        key={idx}
                                        variant="h6"
                                        sx={{ fontWeight: 800, mt: 3, mb: 1.5, color: 'text.primary' }}
                                    >
                                        {block.replace('### ', '')}
                                    </Typography>
                                );
                            }

                            if (block.startsWith('```')) {
                                const lines = block.split('\n');
                                const codeLines = lines.slice(1, -1).join('\n');
                                return (
                                    <Paper
                                        key={idx}
                                        elevation={0}
                                        sx={{
                                            my: 2,
                                            p: 2.5,
                                            borderRadius: 2,
                                            bgcolor: isDark ? '#020617' : '#0F172A',
                                            color: '#E2E8F0',
                                            fontFamily: 'monospace',
                                            fontSize: '0.85rem',
                                            overflowX: 'auto'
                                        }}
                                    >
                                        <pre style={{ margin: 0, lineHeight: 1.6 }}>{codeLines}</pre>
                                    </Paper>
                                );
                            }

                            return (
                                <Typography
                                    key={idx}
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.8, mb: 2 }}
                                >
                                    {block}
                                </Typography>
                            );
                        })}
                    </Box>

                    {/* Canonical Syndication Notice */}
                    <Paper
                        elevation={0}
                        sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                            border: '1px solid',
                            borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
                        }}
                    >
                        <Typography variant="caption" color="text.secondary" display="block">
                            💡 <strong>Author Attribution:</strong> Originally authored by Aditya Raj. Permanent canonical version hosted on <code>aditya-profile-site.netlify.app/writing/{article.slug}</code>. Syndicated to LinkedIn and Dev.to.
                        </Typography>
                    </Paper>
                </Stack>
            </DialogContent>

            <Divider />

            <DialogActions sx={{ p: 2.5, px: 3, justifyContent: 'space-between' }}>
                <Button onClick={onClose} color="inherit">
                    Back to Articles
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<ArrowDownward />}
                    component="a"
                    href="#case-studies"
                    onClick={onClose}
                    sx={{ fontWeight: 600 }}
                >
                    Read Related Case Studies
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ArticleModal;
