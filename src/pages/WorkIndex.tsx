import { useState, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
  useTheme
} from '@mui/material';
import { ArrowForward, OpenInNew } from '@mui/icons-material';
import content from '../data/content.json';
import { AskAiFooter } from '../components/layout/AskAiFooter';

const WorkIndex = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Frontend Architecture', 'AI & Streaming', 'SDKs & Tooling'];

  const filteredStudies = useMemo(() => {
    if (filter === 'All') return content.caseStudies;
    if (filter === 'Frontend Architecture') {
      return content.caseStudies.filter((s) => s.id === 'digilawyer-lcp-rag' || s.id === 'frankieone-caching-mfe');
    }
    if (filter === 'AI & Streaming') {
      return content.caseStudies.filter((s) => s.id === 'digilawyer-lcp-rag' || s.id === 'costimizer-finops-sse');
    }
    if (filter === 'SDKs & Tooling') {
      return content.caseStudies.filter((s) => s.id === 'frankieone-one-sdk');
    }
    return content.caseStudies;
  }, [filter]);

  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 12, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header Block */}
        <Box sx={{ mb: 6, maxWidth: 720 }}>
          <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700, letterSpacing: '0.08em' }}>
            Production Portfolio
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.25rem', md: '3rem' },
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              mb: 2,
              mt: 1
            }}
          >
            Engineering Systems &amp; Case Studies
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Deep architectural breakdowns of production SaaS applications, client-side SDKs,
            and real-time streaming interfaces surviving real enterprise scale.
          </Typography>

          {/* Filter Group */}
          <Box sx={{ mt: 4 }}>
            <ToggleButtonGroup
              value={filter}
              exclusive
              onChange={(_e, val) => { if (val) setFilter(val); }}
              size="small"
              sx={{
                bgcolor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                borderRadius: 2,
                p: 0.5,
                border: '1px solid',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                '& .MuiToggleButton-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  borderRadius: 1.5,
                  px: 2,
                  py: 0.6,
                  border: 'none',
                  color: 'text.secondary',
                  '&.Mui-selected': {
                    bgcolor: isDark ? '#141416' : '#FFFFFF',
                    color: 'text.primary',
                    boxShadow: isDark
                      ? '0 2px 8px rgba(0,0,0,0.4)'
                      : '0 2px 8px rgba(0,0,0,0.06)',
                  }
                }
              }}
            >
              {categories.map((cat) => (
                <ToggleButton key={cat} value={cat}>
                  {cat}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
        </Box>

        {/* Case Study Cards */}
        <Grid container spacing={4}>
          {filteredStudies.map((study) => (
            <Grid size={{ xs: 12, md: 6 }} key={study.id}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2.5,
                  bgcolor: isDark ? '#141416' : '#FFFFFF',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  transition: 'border-color 150ms ease, box-shadow 150ms ease',
                  '&:hover': {
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                  }
                }}
              >
                <Box sx={{ position: 'relative', height: 210, overflow: 'hidden', bgcolor: 'rgba(0,0,0,0.03)' }}>
                  <CardMedia
                    component="img"
                    image={study.image}
                    alt={study.title}
                    sx={{
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Box sx={{ position: 'absolute', top: 14, left: 14 }}>
                    <Chip
                      label={study.domain}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.72rem',
                        bgcolor: isDark ? 'rgba(12, 12, 13, 0.85)' : 'rgba(255, 255, 255, 0.9)',
                        color: 'text.primary',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid',
                        borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)',
                      }}
                    />
                  </Box>
                  <Box sx={{ position: 'absolute', top: 14, right: 14 }}>
                    <Chip
                      label={study.headlineMetric}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        fontFamily: 'monospace',
                        fontSize: '0.75rem',
                        bgcolor: isDark ? 'rgba(6, 78, 59, 0.9)' : 'rgba(209, 250, 229, 0.95)',
                        color: isDark ? '#A7F3D0' : '#065F46',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                      }}
                    />
                  </Box>
                </Box>

                <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                    {study.product}
                  </Typography>

                  <Typography
                    component={RouterLink}
                    to={`/work/${study.id}`}
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1.3,
                      mb: 1.5,
                      textDecoration: 'none',
                      color: 'text.primary',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    {study.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, flex: 1 }}>
                    {study.summary}
                  </Typography>

                  {/* Tech stack pills */}
                  <Stack direction="row" flexWrap="wrap" gap={0.8} sx={{ mb: 3 }}>
                    {study.stack.slice(0, 4).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          fontFamily: 'monospace',
                          fontSize: '0.72rem',
                          borderRadius: 1,
                          bgcolor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                        }}
                      />
                    ))}
                    {study.stack.length > 4 && (
                      <Chip
                        label={`+${study.stack.length - 4}`}
                        size="small"
                        sx={{
                          fontFamily: 'monospace',
                          fontSize: '0.72rem',
                          borderRadius: 1,
                        }}
                      />
                    )}
                  </Stack>

                  {/* Buttons */}
                  <Stack direction="row" spacing={1.5}>
                    <Button
                      component={RouterLink}
                      to={`/work/${study.id}`}
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowForward />}
                      sx={{ fontWeight: 600, fontSize: '0.88rem', py: 1 }}
                    >
                      Read Case Study
                    </Button>
                    {study.link && (
                      <Button
                        component="a"
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        fullWidth
                        endIcon={<OpenInNew />}
                        sx={{ fontWeight: 600, fontSize: '0.88rem', py: 1, borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)' }}
                      >
                        Live Product
                      </Button>
                    )}
                  </Stack>
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

export default WorkIndex;
