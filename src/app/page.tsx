'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  Paper,
  Tooltip,
  Snackbar,
  Alert,
  useTheme
} from '@mui/material';
import {
  ArrowForward,
  OpenInNew,
  ContentCopy,
  Check,
  Science
} from '@mui/icons-material';
import { Github, Linkedin } from 'lucide-react';
import content from '../data/content.json';
import { AskAiFooter } from '../components/layout/AskAiFooter';

export default function HomePage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('adityasrivastav0853@gmail.com');
    setCopiedEmail(true);
  };

  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 12, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* ========================================================
            1. HERO SECTION (Editorial, High-Trust, Zero AI-Slop)
        ======================================================== */}
        <Box sx={{ maxWidth: '820px', mb: { xs: 8, md: 10 } }}>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#10B981' }} />
            <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 600 }}>
              Noida, India • Software Engineer at Bigoh Notations
            </Typography>
          </Stack>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.25rem', md: '3.75rem' },
              lineHeight: 1.12,
              letterSpacing: '-0.035em',
              mb: 2.5,
              color: 'text.primary'
            }}
          >
            Aditya Raj
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1.35rem', sm: '1.65rem', md: '1.85rem' },
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              mb: 3,
              color: 'text.primary'
            }}
          >
            I build fast React &amp; Next.js SaaS systems that survive real production scale.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.75,
              mb: 4,
              maxWidth: '68ch'
            }}
          >
            3 years shipping production web platforms, published npm SDKs, and real-time RAG/SSE AI interfaces
            across FinTech, RegTech, LegalTech, and FinOps. Dropped LCP from 7.0s to 1.2s and reduced redundant API calls by 70%.
          </Typography>

          {/* CTAs */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
            <Button
              component={Link}
              href="/work"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{ fontWeight: 600, fontSize: '0.95rem', py: 1.2, px: 3 }}
            >
              View Production Work
            </Button>
            <Button
              component="a"
              href="https://www.npmjs.com/package/@frankieone/one-sdk"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="large"
              endIcon={<OpenInNew sx={{ fontSize: 16 }} />}
              sx={{ fontWeight: 600, fontSize: '0.95rem', py: 1.2, px: 3, borderColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)' }}
            >
              Explore @frankieone/one-sdk (4.5k+/wk)
            </Button>
          </Stack>

          {/* Social Icons & 1-Click Copy Email */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Tooltip title="GitHub (@adityaraj9110)">
              <Button
                component="a"
                href="https://github.com/adityaraj9110"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                variant="outlined"
                startIcon={<Github size={16} />}
                sx={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', color: 'text.secondary' }}
              >
                GitHub
              </Button>
            </Tooltip>
            <Tooltip title="LinkedIn Profile">
              <Button
                component="a"
                href="https://www.linkedin.com/in/aditya-raj-9b2165227/"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                variant="outlined"
                startIcon={<Linkedin size={16} />}
                sx={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', color: 'text.secondary' }}
              >
                LinkedIn
              </Button>
            </Tooltip>
            <Button
              size="small"
              variant="text"
              onClick={handleCopyEmail}
              startIcon={copiedEmail ? <Check sx={{ color: '#10B981', fontSize: 16 }} /> : <ContentCopy sx={{ fontSize: 15 }} />}
              sx={{
                fontFamily: 'monospace',
                fontSize: '0.78rem',
                color: 'text.secondary',
                '&:hover': { color: 'text.primary' }
              }}
            >
              {copiedEmail ? 'Email Copied!' : 'adityasrivastav0853@gmail.com'}
            </Button>
          </Stack>
        </Box>

        {/* ========================================================
            2. RECRUITER IMPACT STRIP (4-Column Bento, Tabular Monospace)
        ======================================================== */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 2, letterSpacing: '0.08em' }}>
            Production Impact Benchmarks
          </Typography>
          <Grid container spacing={2.5}>
            {content.metrics.map((m) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={m.label}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    height: '100%',
                    borderRadius: 2,
                    bgcolor: isDark ? '#141416' : '#FFFFFF',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      fontFamily: 'monospace',
                      fontSize: { xs: '1.75rem', md: '2rem' },
                      letterSpacing: '-0.03em',
                      mb: 0.5,
                      color: 'text.primary',
                    }}
                  >
                    {m.value}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {m.label}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', lineHeight: 1.4 }}>
                    {m.sub}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ========================================================
            3. SELECTED WORK (Direct links to /work/:slug)
        ======================================================== */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
            <Box>
              <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700, letterSpacing: '0.08em' }}>
                Flagship Systems
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, letterSpacing: '-0.025em' }}>
                Selected Case Studies
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/work"
              endIcon={<ArrowForward />}
              sx={{ fontWeight: 600, fontSize: '0.9rem' }}
            >
              All Work (4)
            </Button>
          </Box>

          <Grid container spacing={3.5}>
            {content.caseStudies.map((study) => (
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
                    transition: 'border-color 150ms ease',
                    '&:hover': {
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', height: 200, bgcolor: 'rgba(0,0,0,0.03)' }}>
                    <CardMedia
                      component="img"
                      image={study.image}
                      alt={study.title}
                      sx={{ height: '100%', objectFit: 'cover' }}
                    />
                    <Box sx={{ position: 'absolute', top: 12, left: 12 }}>
                      <Chip
                        label={study.domain}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: '0.72rem',
                          bgcolor: isDark ? 'rgba(12, 12, 13, 0.85)' : 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid',
                          borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)',
                        }}
                      />
                    </Box>
                    <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
                      <Chip
                        label={study.headlineMetric}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontFamily: 'monospace',
                          fontSize: '0.72rem',
                          bgcolor: isDark ? 'rgba(6, 78, 59, 0.9)' : 'rgba(209, 250, 229, 0.95)',
                          color: isDark ? '#A7F3D0' : '#065F46',
                        }}
                      />
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 600, display: 'block', mb: 0.5 }}>
                      {study.product}
                    </Typography>

                    <Typography
                      component={Link}
                      href={`/work/${study.id}`}
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

                    <Stack direction="row" spacing={1.5}>
                      <Button
                        component={Link}
                        href={`/work/${study.id}`}
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForward />}
                        sx={{ fontWeight: 600, fontSize: '0.88rem', py: 0.9 }}
                      >
                        Read Deep Dive
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
                          sx={{ fontWeight: 600, fontSize: '0.88rem', py: 0.9, borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)' }}
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
        </Box>

        {/* ========================================================
            4. INTERACTIVE SYSTEMS PLAYGROUND PREVIEW
        ======================================================== */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              bgcolor: isDark ? '#141416' : '#FFFFFF',
              border: '1px solid',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <Science sx={{ color: 'primary.main', fontSize: 20 }} />
                  <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700 }}>
                    Signature Senior Touch
                  </Typography>
                </Stack>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.5 }}>
                  Interactive Engineering Playground
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  Instead of taking architectural claims on faith, run live telemetry micro-simulations built directly in React:
                  test <strong>SSE rAF streaming buffering</strong> with live FPS counters, <strong>TanStack Query request deduplication</strong>, and <strong>1,000+ row table virtualization</strong>.
                </Typography>
                <Button
                  component={Link}
                  href="/playground"
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{ fontWeight: 600, px: 3 }}
                >
                  Launch Interactive Lab
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    bgcolor: isDark ? '#0C0C0D' : '#F4F4F5',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'
                  }}
                >
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1, fontWeight: 700 }}>
                    3 High-Signal Experiments
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', display: 'block' }}>
                      01. LLM SSE Token Streaming &amp; FPS Telemetry
                    </Typography>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', display: 'block' }}>
                      02. In-Flight Request Deduplication
                    </Typography>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', display: 'block' }}>
                      03. 1,000+ Row FinOps Virtualization
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* ========================================================
            5. RECENT WRITING & VIRAL BREAKDOWNS
        ======================================================== */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
            <Box>
              <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700, letterSpacing: '0.08em' }}>
                Engineering Notes
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, letterSpacing: '-0.025em' }}>
                Writing &amp; Systems Thinking
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/writing"
              endIcon={<ArrowForward />}
              sx={{ fontWeight: 600, fontSize: '0.9rem' }}
            >
              All Articles (4)
            </Button>
          </Box>

          <Grid container spacing={3}>
            {content.articles.slice(0, 2).map((art) => (
              <Grid size={{ xs: 12, md: 6 }} key={art.slug}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 2.5,
                    bgcolor: isDark ? '#141416' : '#FFFFFF',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'primary.main', fontWeight: 700 }}>
                      {art.stats}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                      {art.date}
                    </Typography>
                  </Box>

                  <Typography
                    component={Link}
                    href={`/writing/${art.slug}`}
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1.35,
                      mb: 1,
                      textDecoration: 'none',
                      color: 'text.primary',
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    {art.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6, flex: 1 }}>
                    {art.summary}
                  </Typography>

                  <Button
                    component={Link}
                    href={`/writing/${art.slug}`}
                    size="small"
                    endIcon={<ArrowForward sx={{ fontSize: 14 }} />}
                    sx={{ alignSelf: 'flex-start', fontWeight: 600, p: 0 }}
                  >
                    Read Article
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ========================================================
            6. ARCHITECTURE-GROUPED TECH MATRIX
        ======================================================== */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1, letterSpacing: '0.08em' }}>
            System Architecture
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, letterSpacing: '-0.025em', mb: 4 }}>
            Technical Capabilities by Layer
          </Typography>

          <Grid container spacing={3}>
            {content.techStackLayers.map((layer) => (
              <Grid size={{ xs: 12, md: 4 }} key={layer.category}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 2.5,
                    bgcolor: isDark ? '#141416' : '#FFFFFF',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>
                    {layer.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, minHeight: 40, lineHeight: 1.5 }}>
                    {layer.description}
                  </Typography>

                  <Stack spacing={0.8}>
                    {layer.skills.map((s) => (
                      <Box
                        key={s}
                        sx={{
                          py: 0.6,
                          px: 1.2,
                          borderRadius: 1.5,
                          bgcolor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>{s}</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.65rem' }}>PROD</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ========================================================
            7. FOOTER ASK AI & NETWORKING
        ======================================================== */}
        <AskAiFooter />

        <Snackbar
          open={copiedEmail}
          autoHideDuration={2500}
          onClose={() => setCopiedEmail(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="success" sx={{ width: '100%', fontWeight: 600 }}>
            Email copied: adityasrivastav0853@gmail.com
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
