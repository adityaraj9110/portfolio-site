'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Box,
  Typography,
  Stack,
  Chip,
  Paper,
  Button,
  useTheme
} from '@mui/material';
import { ArrowForward, OpenInNew } from '@mui/icons-material';
import {
  LinkedInPost,
  FALLBACK_LINKEDIN_POSTS,
  formatCompactNumber,
  getTotalImpressions
} from '@/lib/linkedin-posts';

interface SelectedPostsProps {
  initialPosts?: LinkedInPost[];
}

export function SelectedPosts({ initialPosts = FALLBACK_LINKEDIN_POSTS }: SelectedPostsProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [posts, setPosts] = useState<LinkedInPost[]>(initialPosts);

  // Client-side auto-refresh to check if live metrics updated in Notion / remote JSON
  useEffect(() => {
    let isMounted = true;
    fetch('/api/posts')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isMounted && data?.posts?.length) {
          setPosts(data.posts);
        }
      })
      .catch(() => {
        // Silently keep current posts on network issue
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const totalImpressions = getTotalImpressions(posts);

  return (
    <Box sx={{ mb: { xs: 8, md: 12 } }}>
      {/* Section Header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'flex-end' },
          gap: 1.5,
          mb: 4,
          pb: 2,
          borderBottom: '1px solid',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
        }}
      >
        <Box>
          <Typography
            variant="overline"
            color="primary.main"
            sx={{ fontWeight: 700, letterSpacing: '0.08em', display: 'block' }}
          >
            Selected Engineering Notes
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.025em',
              fontSize: { xs: '1.75rem', sm: '2.25rem' }
            }}
          >
            Writing &amp; Community Reach
          </Typography>
        </Box>

        <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#10B981',
              bgcolor: isDark ? 'rgba(16, 185, 129, 0.08)' : 'rgba(16, 185, 129, 0.06)',
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              border: '1px solid rgba(16, 185, 129, 0.25)',
              display: 'inline-block'
            }}
          >
            {formatCompactNumber(totalImpressions)}+ verified impressions
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', mt: 0.5, fontFamily: 'monospace', fontSize: '0.72rem' }}
          >
            Auto-synced via ISR · Zero iframe bloat
          </Typography>
        </Box>
      </Box>

      {/* Post Rows */}
      <Stack
        spacing={2}
        sx={{
          '& > a': {
            textDecoration: 'none',
            color: 'inherit',
          }
        }}
      >
        {posts.map((post) => (
          <Paper
            key={post.id}
            component="a"
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            elevation={0}
            sx={{
              p: { xs: 2.5, sm: 3 },
              borderRadius: 2,
              bgcolor: isDark ? '#141416' : '#FFFFFF',
              border: '1px solid',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
              transition: 'border-color 150ms ease, background-color 150ms ease',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 2.5,
              '&:hover': {
                borderColor: isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(29, 78, 216, 0.3)',
                bgcolor: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.01)',
              }
            }}
          >
            {/* Left Content */}
            <Box sx={{ maxWidth: '64ch', flex: 1 }}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                <Chip
                  label={post.topic}
                  size="small"
                  sx={{
                    fontFamily: 'monospace',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    bgcolor: isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(29, 78, 216, 0.08)',
                    color: isDark ? '#60A5FA' : '#1D4ED8',
                    borderRadius: 1,
                  }}
                />
                {post.publishedDate && (
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontFamily: 'monospace', fontSize: '0.75rem' }}
                  >
                    {post.publishedDate}
                  </Typography>
                )}
              </Stack>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1rem', sm: '1.15rem' },
                  lineHeight: 1.35,
                  mb: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.75,
                  '&:hover': {
                    color: 'primary.main',
                  }
                }}
              >
                {post.title}
                <OpenInNew sx={{ fontSize: 16, color: 'text.secondary', opacity: 0.7 }} />
              </Typography>

              {post.takeaway && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.65, fontSize: '0.88rem' }}
                >
                  {post.takeaway}
                </Typography>
              )}
            </Box>

            {/* Right Tabular Metric Column */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                alignItems: { xs: 'center', md: 'flex-end' },
                justifyContent: { xs: 'space-between', md: 'center' },
                width: { xs: '100%', md: 'auto' },
                pt: { xs: 1.5, md: 0 },
                borderTop: { xs: '1px solid', md: 'none' },
                borderColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
                flexShrink: 0,
                fontFamily: 'monospace',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  fontFamily: 'monospace',
                  color: 'text.primary',
                }}
              >
                {formatCompactNumber(post.impressions)} impressions
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontFamily: 'monospace', fontSize: '0.78rem' }}
              >
                {post.reactions} likes · {post.comments} comments
              </Typography>
            </Box>
          </Paper>
        ))}
      </Stack>

      {/* Footer Navigation Strip */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 3,
          pt: 2,
        }}
      >
        <Button
          component={Link}
          href="/writing"
          endIcon={<ArrowForward />}
          sx={{ fontWeight: 600, fontSize: '0.88rem' }}
        >
          Read Long-Form Architecture Notes (4)
        </Button>

        <Button
          component="a"
          href="https://www.linkedin.com/in/aditya-raj-9b2165227/"
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNew sx={{ fontSize: 15 }} />}
          sx={{
            fontWeight: 600,
            fontSize: '0.85rem',
            color: 'text.secondary',
            '&:hover': { color: 'text.primary' }
          }}
        >
          LinkedIn Profile
        </Button>
      </Box>
    </Box>
  );
}
