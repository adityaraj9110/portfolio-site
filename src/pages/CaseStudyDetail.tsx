import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Chip,
  Button,
  Paper,
  Divider,
  useTheme
} from '@mui/material';
import {
  ArrowBack,
  ArrowForward,
  OpenInNew,
  CheckCircle,
  Science
} from '@mui/icons-material';
import content from '../data/content.json';
import ArchitectureDiagram from '../components/work/ArchitectureDiagram';
import { AskAiFooter } from '../components/layout/AskAiFooter';

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const studies = content.caseStudies;
  const currentIndex = studies.findIndex((s) => s.id === slug);
  const study = studies[currentIndex] || studies[0];

  const prevStudy = currentIndex > 0 ? studies[currentIndex - 1] : null;
  const nextStudy = currentIndex < studies.length - 1 ? studies[currentIndex + 1] : null;

  const tocItems = [
    { id: 'context', label: '1. Context & Problem' },
    { id: 'diagnosis', label: '2. Constraints & Diagnosis' },
    { id: 'architecture', label: '3. Architecture & Trade-offs' },
    { id: 'implementation', label: '4. Implementation Deep-Dive' },
    { id: 'impact', label: '5. Measurable Impact' },
    { id: 'reflections', label: '6. What I\'d Do Differently' },
  ];

  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 12, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Top Breadcrumb */}
        <Box sx={{ mb: 4 }}>
          <Button
            component={RouterLink}
            to="/work"
            startIcon={<ArrowBack />}
            sx={{
              color: 'text.secondary',
              fontWeight: 600,
              fontSize: '0.88rem',
              p: 0,
              '&:hover': { color: 'text.primary', bgcolor: 'transparent' }
            }}
          >
            Back to All Work
          </Button>
        </Box>

        {/* Header Block */}
        <Box sx={{ maxWidth: '780px', mb: 5 }}>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
            <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700 }}>
              {study.domain}
            </Typography>
            <Typography variant="caption" color="text.secondary">•</Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
              PRODUCTION SYSTEM
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.18,
              letterSpacing: '-0.03em',
              mb: 3
            }}
          >
            {study.title}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 4 }}>
            {study.summary}
          </Typography>

          {/* Metadata Grid */}
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              borderRadius: 2,
              bgcolor: isDark ? '#141416' : '#FFFFFF',
              border: '1px solid',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
            }}
          >
            <Grid container spacing={2}>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', display: 'block', mb: 0.5 }}>
                  Role
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {study.role}
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', display: 'block', mb: 0.5 }}>
                  Key Impact
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 700, color: '#10B981' }}>
                  {study.headlineMetric}
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', display: 'block', mb: 0.5 }}>
                  Product
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {study.product}
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', display: 'block', mb: 0.5 }}>
                  Live Link
                </Typography>
                {study.link ? (
                  <Box
                    component="a"
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'primary.main',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    Visit Product <OpenInNew sx={{ fontSize: 14 }} />
                  </Box>
                ) : (
                  <Typography variant="body2" color="text.secondary">Proprietary</Typography>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* 2-Column Layout */}
        <Grid container spacing={8}>
          {/* Main Reading Column (Max 68ch) */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Box sx={{ maxWidth: '68ch' }}>
              {/* At-a-Glance Impact Strip */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1.5, letterSpacing: '0.08em' }}>
                  Verified Production Metrics
                </Typography>
                <Grid container spacing={2}>
                  {study.sections.results.map((res, i) => (
                    <Grid size={{ xs: 12, sm: 4 }} key={i}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          height: '100%',
                          borderRadius: 2,
                          bgcolor: isDark ? 'rgba(16, 185, 129, 0.05)' : 'rgba(16, 185, 129, 0.03)',
                          border: '1px solid rgba(16, 185, 129, 0.25)',
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.4, color: isDark ? '#A7F3D0' : '#065F46' }}>
                          {res}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* 01. Context & Problem */}
              <Box id="context" sx={{ mb: 6, scrollMarginTop: 120 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                  01. Context &amp; Problem
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {study.sections.problem}
                </Typography>
              </Box>

              {/* 02. Constraints & Diagnosis */}
              <Box id="diagnosis" sx={{ mb: 6, scrollMarginTop: 120 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                  02. Constraints &amp; Diagnosis
                </Typography>
                <Stack spacing={2}>
                  {study.sections.rootCause.map((cause, i) => (
                    <Paper
                      key={i}
                      elevation={0}
                      sx={{
                        p: 2.5,
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
                      <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                        {cause}
                      </Typography>
                    </Paper>
                  ))}
                </Stack>
              </Box>

              {/* 03. Architecture & Trade-offs */}
              <Box id="architecture" sx={{ mb: 6, scrollMarginTop: 120 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                  03. Architecture &amp; Trade-Offs
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                  {study.sections.architecture}
                </Typography>

                {/* Theme-Aware Architecture Diagram */}
                <ArchitectureDiagram caseStudyId={study.id} />
              </Box>

              {/* 04. Code & Implementation Deep-Dive */}
              <Box id="implementation" sx={{ mb: 6, scrollMarginTop: 120 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                  04. Code &amp; Implementation Deep-Dive
                </Typography>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: isDark ? '#141416' : '#FFFFFF',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
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
                    {study.sections.implementation}
                  </Typography>
                </Paper>
              </Box>

              {/* 05. Measurable Impact */}
              <Box id="impact" sx={{ mb: 6, scrollMarginTop: 120 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                  05. Measurable Production Impact
                </Typography>
                <Stack spacing={1.5}>
                  {study.sections.results.map((res, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <CheckCircle sx={{ color: '#10B981', fontSize: 18, mt: 0.3 }} />
                      <Typography variant="body1" sx={{ fontWeight: 500, lineHeight: 1.6 }}>
                        {res}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* 06. What I'd Do Differently Today */}
              <Box id="reflections" sx={{ mb: 8, scrollMarginTop: 120 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                  06. What I'd Do Differently Today
                </Typography>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.7 }}>
                    "{study.sections.lessons}"
                  </Typography>
                </Paper>
              </Box>

              {/* Interactive Demo Link Callout */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mb: 6,
                  borderRadius: 2.5,
                  bgcolor: isDark ? '#141416' : '#FFFFFF',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(37, 99, 235, 0.2)',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  gap: 2
                }}
              >
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                    See this pattern in action in the Interactive Playground
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Test live streaming, request deduplication, and windowed virtualization hands-on.
                  </Typography>
                </Box>
                <Button
                  component={RouterLink}
                  to="/playground"
                  variant="outlined"
                  size="small"
                  startIcon={<Science />}
                  sx={{ fontWeight: 600, flexShrink: 0 }}
                >
                  Open Playground
                </Button>
              </Paper>

              <Divider sx={{ my: 4 }} />

              {/* Prev / Next Navigation */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {prevStudy ? (
                  <Button
                    component={RouterLink}
                    to={`/work/${prevStudy.id}`}
                    startIcon={<ArrowBack />}
                    sx={{ textTransform: 'none', fontWeight: 600 }}
                  >
                    {prevStudy.product}
                  </Button>
                ) : <Box />}

                {nextStudy ? (
                  <Button
                    component={RouterLink}
                    to={`/work/${nextStudy.id}`}
                    endIcon={<ArrowForward />}
                    sx={{ textTransform: 'none', fontWeight: 600 }}
                  >
                    {nextStudy.product}
                  </Button>
                ) : <Box />}
              </Box>

              {/* Footer Ask AI Feature */}
              <AskAiFooter />
            </Box>
          </Grid>

          {/* Right Sticky Table of Contents */}
          <Grid size={{ xs: 12, lg: 4 }} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box sx={{ position: 'sticky', top: 120 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'text.secondary',
                  display: 'block',
                  mb: 1.5,
                  fontWeight: 700,
                  letterSpacing: '0.08em'
                }}
              >
                Table of Contents
              </Typography>
              <Stack spacing={1}>
                {tocItems.map((item) => (
                  <Box
                    key={item.id}
                    component="a"
                    href={`#${item.id}`}
                    sx={{
                      fontSize: '0.85rem',
                      color: 'text.secondary',
                      textDecoration: 'none',
                      py: 0.5,
                      fontWeight: 500,
                      transition: 'color 150ms ease',
                      '&:hover': {
                        color: 'primary.main',
                      }
                    }}
                  >
                    {item.label}
                  </Box>
                ))}
              </Stack>

              <Divider sx={{ my: 3 }} />

              <Typography
                variant="overline"
                sx={{
                  color: 'text.secondary',
                  display: 'block',
                  mb: 1.5,
                  fontWeight: 700,
                  letterSpacing: '0.08em'
                }}
              >
                Production Stack
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={0.8}>
                {study.stack.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    sx={{
                      fontFamily: 'monospace',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      borderRadius: 1.5,
                      bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CaseStudyDetail;
