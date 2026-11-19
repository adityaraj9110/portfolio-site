'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Paper,
  Divider,
  Button,
  useTheme
} from '@mui/material';
import {
  EmojiEvents,
  School,
  Business
} from '@mui/icons-material';
import { Github, Linkedin } from 'lucide-react';
import { AskAiFooter } from '../../components/layout/AskAiFooter';

export default function AboutClient() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 12, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header Block */}
        <Box sx={{ mb: 6, maxWidth: 740 }}>
          <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700, letterSpacing: '0.08em' }}>
            Personal Story &amp; Philosophy
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
            Engineering Systems That Survive Real Scale
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Software Engineer based in Noida, UP, India. Specializing in frontend architecture,
            web performance optimization (Core Web Vitals), and real-time AI interfaces.
          </Typography>
        </Box>

        <Grid container spacing={8}>
          {/* Main Content Column */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ maxWidth: '68ch' }}>
              {/* "Now" Box */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mb: 5,
                  borderRadius: 2,
                  bgcolor: isDark ? '#141416' : '#FFFFFF',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(59, 130, 246, 0.25)' : 'rgba(37, 99, 235, 0.2)',
                }}
              >
                <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700, display: 'block', mb: 0.5 }}>
                  NOW • What I'm Currently Exploring
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                  Currently digging deep into <strong>React rendering internals</strong>, high-frequency <strong>Server-Sent Events (SSE) buffering queues</strong>,
                  and <strong>FinOps analytics table virtualization</strong> for cloud infrastructure platforms in Noida, India.
                </Typography>
              </Paper>

              {/* Bio & Background */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                  Background &amp; Focus
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                  For the past 3 years at Bigoh Notations PVT LTD, I have worked across FinTech, RegTech, LegalTech, and FinOps platforms.
                  My work has ranged from optimizing consumer acquisition funnels (dropping Largest Contentful Paint from 7.0s to 1.2s on DigiLawyer AI)
                  to architecting enterprise KYC developer tools (<Box component="code" sx={{ fontFamily: 'monospace' }}>@frankieone/one-sdk</Box> with 4,500+ weekly npm downloads).
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  I believe that the best frontend code is boring, predictable, and resilient.
                  Instead of chasing shiny animation trends or over-engineering giant global stores, I prioritize type safety, strict performance budgets,
                  and ergonomics that make codebases easy for the next engineer to extend or delete.
                </Typography>
              </Box>

              {/* Three Core Engineering Principles */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
                  Three Engineering Principles
                </Typography>
                <Stack spacing={2.5}>
                  {[
                    {
                      num: '01',
                      title: 'Simple Code Beats Clever Code in Production',
                      desc: 'Clever abstractions are expensive to debug, maintain, and onboard teammates to. A clean, straightforward implementation that duplicates a pattern twice is vastly superior to a fragile premature factory pattern.'
                    },
                    {
                      num: '02',
                      title: 'Server State ≠ Client State',
                      desc: 'Putting API responses into giant global Redux stores creates sync bugs and boilerplate. Dedicated caching layers like TanStack Query handle caching, garbage collection, and request deduplication with zero mental overhead.'
                    },
                    {
                      num: '03',
                      title: 'Align Render Cycles with Hardware Refresh',
                      desc: 'Unthrottled setState per incoming streaming chunk starves the browser event loop. Flushes synchronized with requestAnimationFrame guarantee smooth 60 FPS scrolling and interaction even during high-throughput token generation.'
                    }
                  ].map((p) => (
                    <Paper
                      key={p.num}
                      elevation={0}
                      sx={{
                        p: 2.5,
                        borderRadius: 2,
                        bgcolor: isDark ? '#141416' : '#FFFFFF',
                        border: '1px solid',
                        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      }}
                    >
                      <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, fontFamily: 'monospace', display: 'block', mb: 0.5 }}>
                        PRINCIPLE {p.num}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                        {p.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {p.desc}
                      </Typography>
                    </Paper>
                  ))}
                </Stack>
              </Box>

              {/* Experience Timeline */}
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
                  Experience &amp; Career Progression
                </Typography>
                <Stack spacing={3}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: isDark ? '#141416' : '#FFFFFF',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                      <Business sx={{ color: 'primary.main', fontSize: 24 }} />
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>
                        Bigoh Notations PVT LTD
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2" color="primary.main" sx={{ fontWeight: 700, mb: 0.5 }}>
                      Software Engineer (Aug 2025 – Present) • Associate Software Engineer (Jan 2024 – Aug 2025)
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2, fontFamily: 'monospace' }}>
                      Noida, UP, India • Full-Time
                    </Typography>

                    {/* Honor Badge */}
                    <Box
                      sx={{
                        p: 1.5,
                        px: 2,
                        mb: 2,
                        borderRadius: 1.5,
                        bgcolor: isDark ? 'rgba(245, 158, 11, 0.08)' : 'rgba(245, 158, 11, 0.06)',
                        border: '1px solid rgba(245, 158, 11, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5
                      }}
                    >
                      <EmojiEvents sx={{ color: '#F59E0B', fontSize: 20 }} />
                      <Typography variant="caption" sx={{ fontWeight: 700, color: isDark ? '#FDE68A' : '#92400E' }}>
                        Honored as <strong>Employee of the Quarter</strong> for end-to-end technical leadership on FinOps and RegTech flagship releases.
                      </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                      Mentored 3 junior engineers, conducted 15+ weekly PR code reviews, and established automated Jest and Playwright testing pipelines.
                    </Typography>
                  </Paper>

                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: isDark ? '#141416' : '#FFFFFF',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                      <School sx={{ color: 'primary.main', fontSize: 24 }} />
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>
                        Chandigarh Engineering College
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2" color="text.primary" sx={{ fontWeight: 700, mb: 0.5 }}>
                      B.Tech in Computer Science &amp; Engineering
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1, fontFamily: 'monospace' }}>
                      Landran, Punjab • 2020 – 2024 • CGPA: 8.6 / 10
                    </Typography>
                  </Paper>
                </Stack>
              </Box>

              {/* Ask AI Footer */}
              <AskAiFooter />
            </Box>
          </Grid>

          {/* Right Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: 'sticky', top: 120 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: isDark ? '#141416' : '#FFFFFF',
                  border: '1px solid',
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  mb: 3
                }}
              >
                <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 2, fontWeight: 700 }}>
                  Contact &amp; Coordinates
                </Typography>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>Email</Typography>
                    <Typography
                      component="a"
                      href="mailto:adityasrivastav0853@gmail.com"
                      variant="body2"
                      sx={{ fontWeight: 600, color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                    >
                      adityasrivastav0853@gmail.com
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>Location</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Noida, UP, India</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>Availability</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#10B981' }}>Open to Select Conversations</Typography>
                  </Box>
                </Stack>

                <Divider sx={{ my: 2.5 }} />

                <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1.5, fontWeight: 700 }}>
                  Profiles
                </Typography>
                <Stack direction="row" spacing={1.5}>
                  <Button
                    component="a"
                    href="https://github.com/adityaraj9110"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    variant="outlined"
                    startIcon={<Github size={16} />}
                    sx={{ borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)' }}
                  >
                    GitHub
                  </Button>
                  <Button
                    component="a"
                    href="https://www.linkedin.com/in/aditya-raj-9b2165227/"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    variant="outlined"
                    startIcon={<Linkedin size={16} />}
                    sx={{ borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)' }}
                  >
                    LinkedIn
                  </Button>
                </Stack>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
