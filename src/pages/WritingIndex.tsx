import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Button,
  useTheme
} from '@mui/material';
import { ArrowForward, Article, Visibility } from '@mui/icons-material';
import content from '../data/content.json';
import { AskAiFooter } from '../components/layout/AskAiFooter';

const WritingIndex = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 12, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header Block */}
        <Box sx={{ mb: 6, maxWidth: 740 }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
            <Article sx={{ color: 'primary.main', fontSize: 20 }} />
            <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700, letterSpacing: '0.08em' }}>
              Engineering Notes &amp; Systems Writing
            </Typography>
          </Stack>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.25rem', md: '3rem' },
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              mb: 2
            }}
          >
            Technical Notes &amp; Architecture Breakdowns
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Permanent, high-signal engineering articles distilled from real production scale and viral discussions
            across LinkedIn (32k+ impressions) and Dev.to.
          </Typography>
        </Box>

        {/* Articles List */}
        <Grid container spacing={3.5}>
          {content.articles.map((art) => (
            <Grid size={{ xs: 12, md: 6 }} key={art.slug}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2.5,
                  p: 3,
                  bgcolor: isDark ? '#141416' : '#FFFFFF',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  transition: 'border-color 150ms ease',
                  '&:hover': {
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                  }
                }}
              >
                <CardContent sx={{ p: 0, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Chip
                      icon={<Visibility sx={{ fontSize: '14px !important' }} />}
                      label={art.stats}
                      size="small"
                      sx={{
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        fontSize: '0.72rem',
                        bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                      }}
                    />
                    <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                      {art.date}
                    </Typography>
                  </Box>

                  <Typography
                    component={RouterLink}
                    to={`/writing/${art.slug}`}
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1.3,
                      mb: 1,
                      textDecoration: 'none',
                      color: 'text.primary',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    {art.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontWeight: 500 }}>
                    {art.subtitle}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, flex: 1 }}>
                    {art.summary}
                  </Typography>

                  <Stack direction="row" flexWrap="wrap" gap={0.8} sx={{ mb: 3 }}>
                    {art.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          fontFamily: 'monospace',
                          fontSize: '0.7rem',
                          borderRadius: 1,
                          bgcolor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)'
                        }}
                      />
                    ))}
                  </Stack>

                  <Button
                    component={RouterLink}
                    to={`/writing/${art.slug}`}
                    variant="outlined"
                    endIcon={<ArrowForward />}
                    sx={{
                      alignSelf: 'flex-start',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'
                    }}
                  >
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Footer Ask AI */}
        <AskAiFooter />
      </Container>
    </Box>
  );
};

export default WritingIndex;
