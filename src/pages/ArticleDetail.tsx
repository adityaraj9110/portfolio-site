import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Button,
  Paper,
  Divider,
  useTheme
} from '@mui/material';
import { ArrowBack, ArrowForward, Visibility } from '@mui/icons-material';
import content from '../data/content.json';
import { AskAiFooter } from '../components/layout/AskAiFooter';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const article = content.articles.find((a) => a.slug === slug) || content.articles[0];
  const contentBlocks = article.content.split('\n\n');

  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 12, minHeight: '100vh' }}>
      <Container maxWidth="md">
        {/* Breadcrumb */}
        <Box sx={{ mb: 4 }}>
          <Button
            component={RouterLink}
            to="/writing"
            startIcon={<ArrowBack />}
            sx={{
              color: 'text.secondary',
              fontWeight: 600,
              fontSize: '0.88rem',
              p: 0,
              '&:hover': { color: 'text.primary', bgcolor: 'transparent' }
            }}
          >
            Back to All Notes
          </Button>
        </Box>

        {/* Article Header */}
        <Box sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
            <Chip
              icon={<Visibility sx={{ fontSize: '14px !important' }} />}
              label={article.stats}
              size="small"
              sx={{
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                fontWeight: 600,
                bgcolor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
              }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
              Published {article.date}
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '2.85rem' },
              lineHeight: 1.2,
              letterSpacing: '-0.03em',
              mb: 2
            }}
          >
            {article.title}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.6, mb: 3 }}>
            {article.subtitle}
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={0.8}>
            {article.tags.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  fontFamily: 'monospace',
                  fontSize: '0.72rem',
                  borderRadius: 1,
                  bgcolor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)'
                }}
              />
            ))}
          </Stack>
        </Box>

        <Divider sx={{ mb: 5 }} />

        {/* Reading Column (Max 68ch) */}
        <Box sx={{ maxWidth: '68ch', mx: 'auto' }}>
          {/* Summary Callout */}
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 2,
              bgcolor: isDark ? '#141416' : '#FFFFFF',
              borderLeft: '3px solid',
              borderColor: 'primary.main',
              borderTop: '1px solid',
              borderRight: '1px solid',
              borderBottom: '1px solid',
              borderTopColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
              borderRightColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
              borderBottomColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 500, lineHeight: 1.7 }}>
              {article.summary}
            </Typography>
          </Paper>

          {/* Formatted Body */}
          <Box sx={{ mb: 6 }}>
            {contentBlocks.map((block, idx) => {
              if (block.startsWith('### ')) {
                return (
                  <Typography
                    key={idx}
                    variant="h5"
                    sx={{ fontWeight: 800, mt: 4, mb: 1.5, letterSpacing: '-0.02em' }}
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
                      my: 2.5,
                      p: 2.5,
                      borderRadius: 2,
                      bgcolor: isDark ? '#0C0C0D' : '#141416',
                      color: '#FAFAFA',
                      fontFamily: 'monospace',
                      fontSize: '0.84rem',
                      overflowX: 'auto',
                    }}
                  >
                    <pre style={{ margin: 0, lineHeight: 1.65 }}>{codeLines}</pre>
                  </Paper>
                );
              }

              return (
                <Typography
                  key={idx}
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.85, mb: 2.5, fontSize: '1rem' }}
                >
                  {block}
                </Typography>
              );
            })}
          </Box>

          {/* Canonical Notice */}
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              borderRadius: 2,
              bgcolor: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
              border: '1px solid',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
              mb: 5
            }}
          >
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.6 }}>
              💡 <strong>Permanent Canonical Reference:</strong> Authored by Aditya Raj. Permanent source hosted at <code>aditya-profile-site.netlify.app/writing/{article.slug}</code>. Syndicated to LinkedIn and Dev.to.
            </Typography>
          </Paper>

          {/* Related Case Studies button */}
          <Button
            component={RouterLink}
            to="/work"
            variant="outlined"
            endIcon={<ArrowForward />}
            sx={{ fontWeight: 600, mb: 6 }}
          >
            Explore Related Production Case Studies
          </Button>

          {/* Ask AI Footer */}
          <AskAiFooter />
        </Box>
      </Container>
    </Box>
  );
};

export default ArticleDetail;
