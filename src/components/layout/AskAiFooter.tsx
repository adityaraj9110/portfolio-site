import { useState } from 'react';
import { Box, Typography, Button, Stack, useTheme, Snackbar, Alert } from '@mui/material';
import { ContentCopy, Check, OpenInNew } from '@mui/icons-material';

const SITE_URL = "https://aditya-profile-site.netlify.app";

const ASK_AI_PROMPT = `Read ${SITE_URL}/llms.txt and summarize Aditya Raj's engineering background as a Software Engineer (Frontend & AI-Native Full Stack). Highlight his real production impact (LCP 7s to 1.2s, 70% API reduction via TanStack Query, @frankieone/one-sdk with 4.5k+ weekly npm downloads, and RAG/SSE streaming systems) and suggest 3 deep technical questions an engineering manager could ask him.`;

const AI_PROVIDERS = [
  {
    name: "ChatGPT",
    href: `https://chatgpt.com/?q=${encodeURIComponent(ASK_AI_PROMPT)}`,
  },
  {
    name: "Perplexity",
    href: `https://www.perplexity.ai/search?q=${encodeURIComponent(ASK_AI_PROMPT)}`,
  },
  {
    name: "Claude",
    href: `https://claude.ai/new?q=${encodeURIComponent(ASK_AI_PROMPT)}`,
  },
  {
    name: "Google AI",
    href: `https://www.google.com/search?udm=50&q=${encodeURIComponent(ASK_AI_PROMPT)}`,
  },
];

export function AskAiFooter() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = async () => {
    await navigator.clipboard.writeText(ASK_AI_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Box
      sx={{
        pt: 5,
        mt: 6,
        borderTop: '1px solid',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 3,
        }}
      >
        <Box sx={{ maxWidth: 520 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'text.secondary',
              display: 'block',
              mb: 0.5,
              letterSpacing: '0.08em',
              fontWeight: 700,
            }}
          >
            In a hurry? Ask an AI about my work
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            Opens a factual, prefilled prompt backed by{' '}
            <Box
              component="a"
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.primary',
                textDecoration: 'underline',
                textUnderlineOffset: 3,
                fontWeight: 600,
                '&:hover': { color: 'primary.main' },
              }}
            >
              /llms.txt
            </Box>
            . No memory poisoning, 100% transparent.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ alignItems: 'center' }}>
          {AI_PROVIDERS.map((provider) => (
            <Button
              key={provider.name}
              component="a"
              href={provider.href}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              variant="outlined"
              endIcon={<OpenInNew sx={{ fontSize: '13px !important', opacity: 0.7 }} />}
              sx={{
                fontSize: '0.78rem',
                py: 0.6,
                px: 1.4,
                borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
                color: 'text.primary',
                borderRadius: 2,
                fontWeight: 600,
                '&:hover': {
                  borderColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                  bgcolor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                },
              }}
            >
              {provider.name}
            </Button>
          ))}

          <Button
            size="small"
            variant="text"
            onClick={handleCopyPrompt}
            startIcon={copied ? <Check sx={{ color: '#10B981', fontSize: 16 }} /> : <ContentCopy sx={{ fontSize: 15 }} />}
            sx={{
              fontSize: '0.75rem',
              py: 0.6,
              px: 1.2,
              color: 'text.secondary',
              fontFamily: 'monospace',
              '&:hover': { color: 'text.primary' },
            }}
          >
            {copied ? "Copied prompt" : "Copy prompt"}
          </Button>
        </Stack>
      </Box>

      <Snackbar
        open={copied}
        autoHideDuration={2500}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%', fontWeight: 600 }}>
          Prompt copied to clipboard! Paste into your preferred LLM.
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default AskAiFooter;
