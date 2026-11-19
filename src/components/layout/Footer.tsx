import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Divider,
  Snackbar,
  Alert,
  useTheme
} from '@mui/material';
import { ContentCopy, Check } from '@mui/icons-material';

export const Footer: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('adityasrivastav0853@gmail.com');
    setCopiedEmail(true);
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 8,
        borderTop: '1px solid',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
        bgcolor: isDark ? '#0C0C0D' : '#FAFAF9',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 4,
            mb: 6
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '-0.02em', mb: 0.5 }}>
              Aditya Raj
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Software Engineer • Frontend Architecture &amp; AI-Native Systems
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5, fontFamily: 'monospace' }}>
              Noida, Uttar Pradesh, India
            </Typography>
          </Box>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems={{ xs: 'flex-start', sm: 'center' }}>
            <Button
              size="small"
              variant="outlined"
              onClick={handleCopyEmail}
              startIcon={copiedEmail ? <Check sx={{ color: '#10B981', fontSize: 16 }} /> : <ContentCopy sx={{ fontSize: 15 }} />}
              sx={{
                fontFamily: 'monospace',
                fontSize: '0.78rem',
                borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
                color: 'text.primary'
              }}
            >
              {copiedEmail ? 'Email Copied!' : 'adityasrivastav0853@gmail.com'}
            </Button>
            <Button
              component="a"
              href="mailto:adityasrivastav0853@gmail.com"
              size="small"
              variant="contained"
              sx={{ fontSize: '0.82rem', fontWeight: 600 }}
            >
              Get in Touch
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ mb: 4, borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }} />

        {/* Footer Navigation & Colophon */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2
          }}
        >
          <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
            <Box
              component={RouterLink}
              to="/"
              sx={{ color: 'text.secondary', fontSize: '0.82rem', textDecoration: 'none', '&:hover': { color: 'text.primary' } }}
            >
              Home
            </Box>
            <Box
              component={RouterLink}
              to="/work"
              sx={{ color: 'text.secondary', fontSize: '0.82rem', textDecoration: 'none', '&:hover': { color: 'text.primary' } }}
            >
              Work
            </Box>
            <Box
              component={RouterLink}
              to="/playground"
              sx={{ color: 'text.secondary', fontSize: '0.82rem', textDecoration: 'none', '&:hover': { color: 'text.primary' } }}
            >
              Playground
            </Box>
            <Box
              component={RouterLink}
              to="/writing"
              sx={{ color: 'text.secondary', fontSize: '0.82rem', textDecoration: 'none', '&:hover': { color: 'text.primary' } }}
            >
              Writing
            </Box>
            <Box
              component={RouterLink}
              to="/about"
              sx={{ color: 'text.secondary', fontSize: '0.82rem', textDecoration: 'none', '&:hover': { color: 'text.primary' } }}
            >
              About
            </Box>
            <Box
              component="a"
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary', fontSize: '0.82rem', textDecoration: 'none', fontFamily: 'monospace', '&:hover': { color: 'text.primary' } }}
            >
              /llms.txt ↗
            </Box>
          </Stack>

          <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', fontSize: '0.72rem' }}>
            Built with React, TypeScript &amp; Vite. Typeset in Inter &amp; JetBrains Mono.
          </Typography>
        </Box>
      </Container>

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
    </Box>
  );
};

export default Footer;
