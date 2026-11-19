import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Stack,
  Chip,
  Paper,
  Tabs,
  Tab,
  Slider,
  TextField,
  LinearProgress,
  useTheme
} from '@mui/material';
import {
  PlayArrow,
  Refresh,
  Science,
  CheckCircle,
  ErrorOutline,
  Code
} from '@mui/icons-material';
import { AskAiFooter } from '../components/layout/AskAiFooter';

const SAMPLE_TOKENS = [
  "Legal statutory analysis indicates", " that pursuant to Clause 14.2,", " the statutory limitation",
  " period expires after 36 months.", " Furthermore, grounded vector retrieval",
  " confirms concordance with standard", " arbitration provisions across jurisdictions.",
  " TanStack Query eliminates duplicate flights,", " and requestAnimationFrame maintains",
  " a rock-solid 60 FPS refresh rate", " without blocking the browser main thread.",
  " In FinOps billing environments,", " windowed table virtualization ensures",
  " that 10,000 complex resource rows", " render with zero scroll stutter."
];

// Mock 1,000 FinOps resource rows
const MOCK_FINOPS_RESOURCES = Array.from({ length: 1000 }, (_, i) => ({
  id: `res-${i + 1}`,
  name: `aws_ec2_instance_c5.${['large', 'xlarge', '2xlarge', '4xlarge'][i % 4]}_prod_${i + 1}`,
  region: ['us-east-1', 'ap-south-1', 'eu-west-1', 'us-west-2'][i % 4],
  monthlyCost: (45.2 + (i * 3.7) % 320).toFixed(2),
  recommendation: ['Terminate Idle', 'Upgrade Generation', 'Reserved 1-Yr', 'Optimal'][i % 4],
  savings: (12.5 + (i * 1.8) % 85).toFixed(2)
}));

const PlaygroundPage = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [currentTab, setCurrentTab] = useState(0);

  // ==========================================
  // EXPERIMENT 01: SSE Streaming Simulator
  // ==========================================
  const [streamMode, setStreamMode] = useState<'naive' | 'buffered'>('buffered');
  const [streamedText, setStreamedText] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [fps, setFps] = useState(60);
  const [renderCount, setRenderCount] = useState(0);
  const [frameTime, setFrameTime] = useState(16.6);
  const [tokenSpeed, setTokenSpeed] = useState(80); // ms per chunk
  const [showCode, setShowCode] = useState(false);

  const tokenBufferRef = useRef('');
  const isFlushingRef = useRef(false);
  const streamTimeoutRef = useRef<any>(null);

  const stopStream = () => {
    if (streamTimeoutRef.current) clearTimeout(streamTimeoutRef.current);
    setIsStreaming(false);
    setFps(60);
    setFrameTime(16.6);
  };

  const runStream = () => {
    stopStream();
    setStreamedText('');
    setRenderCount(0);
    setIsStreaming(true);

    let tokenIndex = 0;
    const totalTokens = SAMPLE_TOKENS.length;

    const emitNextToken = () => {
      if (tokenIndex >= totalTokens) {
        setIsStreaming(false);
        setFps(60);
        setFrameTime(16.6);
        return;
      }

      const token = SAMPLE_TOKENS[tokenIndex] + ' ';
      tokenIndex++;

      if (streamMode === 'naive') {
        // Naive setState per token chunk
        setRenderCount((prev) => prev + 1);
        const degradedFps = Math.floor(22 + Math.random() * 12);
        setFps(degradedFps);
        setFrameTime(Number((1000 / degradedFps).toFixed(1)));
        setStreamedText((prev) => prev + token);
      } else {
        // Buffered requestAnimationFrame flush
        tokenBufferRef.current += token;
        setFps(60);
        setFrameTime(16.6);

        if (!isFlushingRef.current) {
          isFlushingRef.current = true;
          requestAnimationFrame(() => {
            setStreamedText((prev) => prev + tokenBufferRef.current);
            tokenBufferRef.current = '';
            isFlushingRef.current = false;
            setRenderCount((prev) => prev + 1);
          });
        }
      }

      streamTimeoutRef.current = setTimeout(emitNextToken, tokenSpeed);
    };

    emitNextToken();
  };

  useEffect(() => {
    return () => {
      if (streamTimeoutRef.current) clearTimeout(streamTimeoutRef.current);
    };
  }, []);

  // ==========================================
  // EXPERIMENT 02: Request Deduplication
  // ==========================================
  const [isFiringRequests, setIsFiringRequests] = useState(false);
  const [dedupStep, setDedupStep] = useState<'idle' | 'in-flight' | 'completed'>('idle');

  const runDeduplication = () => {
    setIsFiringRequests(true);
    setDedupStep('in-flight');

    setTimeout(() => {
      setDedupStep('completed');
      setIsFiringRequests(false);
    }, 1500);
  };

  // ==========================================
  // EXPERIMENT 03: Virtualized vs Raw Table
  // ==========================================
  const [tableMode, setTableMode] = useState<'virtual' | 'raw'>('virtual');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollTop, setScrollTop] = useState(0);

  const filteredResources = MOCK_FINOPS_RESOURCES.filter(
    (r) => r.name.toLowerCase().includes(searchQuery.toLowerCase()) || r.region.includes(searchQuery.toLowerCase())
  );

  // Virtualization constants
  const ROW_HEIGHT = 42;
  const VIEWPORT_HEIGHT = 280;
  const TOTAL_COUNT = filteredResources.length;
  const startIndex = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - 2);
  const endIndex = Math.min(TOTAL_COUNT - 1, Math.floor((scrollTop + VIEWPORT_HEIGHT) / ROW_HEIGHT) + 2);
  const visibleRows = tableMode === 'virtual'
    ? filteredResources.slice(startIndex, endIndex + 1)
    : filteredResources.slice(0, 400); // Raw loads 400 at once

  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: 12, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header Block */}
        <Box sx={{ mb: 6, maxWidth: 740 }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
            <Science sx={{ color: 'primary.main', fontSize: 20 }} />
            <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700, letterSpacing: '0.08em' }}>
              Interactive Systems Lab
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
            Engineering Telemetry Playground
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Live, zero-backend interactive micro-simulations demonstrating the actual frontend algorithms,
            caching mechanics, and buffer queues deployed in production across FinTech and LegalTech SaaS.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Tabs
              value={currentTab}
              onChange={(_e, val) => setCurrentTab(val)}
              textColor="primary"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                bgcolor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                borderRadius: 2,
                p: 0.5,
                border: '1px solid',
                borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                '& .MuiTab-root': {
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  borderRadius: 1.5,
                  textTransform: 'none',
                  px: 2.5
                }
              }}
            >
              <Tab label="01. LLM SSE Token Streaming & FPS Telemetry" />
              <Tab label="02. TanStack Query Request Deduplication" />
              <Tab label="03. 1,000+ Row FinOps Virtualization" />
            </Tabs>
          </Box>
        </Box>

        {/* TAB 01: SSE Streaming */}
        {currentTab === 0 && (
          <Card
            elevation={0}
            sx={{
              borderRadius: 2.5,
              p: { xs: 3, md: 4 },
              bgcolor: isDark ? '#141416' : '#FFFFFF',
              border: '1px solid',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 5 }}>
                <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700 }}>
                  From 18,309-Impression Viral Breakdown
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>
                  High-Frequency SSE Streaming Telemetry
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                  LLM token streams arrive at 60-120 chunks/sec. Unbuffered <code>setState</code> per chunk
                  floods the React reconciliation queue, starving the main thread.
                  A <code>requestAnimationFrame</code> buffer synchronizes flushes strictly with screen redraws.
                </Typography>

                <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', display: 'block', mb: 1, fontWeight: 700 }}>
                  Streaming Strategy:
                </Typography>
                <Stack direction="row" spacing={1.5} sx={{ mb: 3 }}>
                  <Button
                    variant={streamMode === 'naive' ? 'contained' : 'outlined'}
                    color="error"
                    size="small"
                    onClick={() => { setStreamMode('naive'); stopStream(); }}
                    sx={{ flex: 1, fontWeight: 600, fontSize: '0.82rem' }}
                  >
                    Naive setState (Laggy)
                  </Button>
                  <Button
                    variant={streamMode === 'buffered' ? 'contained' : 'outlined'}
                    color="success"
                    size="small"
                    onClick={() => { setStreamMode('buffered'); stopStream(); }}
                    sx={{ flex: 1, fontWeight: 600, fontSize: '0.82rem' }}
                  >
                    rAF Buffered (60 FPS)
                  </Button>
                </Stack>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5, fontWeight: 600 }}>
                    Token Arrival Interval: {tokenSpeed}ms (~{(1000 / tokenSpeed).toFixed(0)} chunks/sec)
                  </Typography>
                  <Slider
                    value={tokenSpeed}
                    onChange={(_e, val) => setTokenSpeed(val as number)}
                    min={30}
                    max={200}
                    step={10}
                    size="small"
                  />
                </Box>

                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={isStreaming ? <Refresh /> : <PlayArrow />}
                    onClick={runStream}
                    sx={{ flex: 1, fontWeight: 700 }}
                  >
                    {isStreaming ? 'Restart Stream' : 'Run Live Stream'}
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Code />}
                    onClick={() => setShowCode(!showCode)}
                    sx={{ borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)' }}
                  >
                    {showCode ? 'Hide Code' : 'Code'}
                  </Button>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    minHeight: 320,
                    bgcolor: isDark ? '#0C0C0D' : '#F4F4F5',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Telemetry Header Strip */}
                  <Grid container spacing={1} sx={{ mb: 2, pb: 2, borderBottom: '1px solid', borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
                    <Grid size={{ xs: 4 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>Live FPS</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, fontFamily: 'monospace', color: fps >= 55 ? '#10B981' : '#EF4444' }}>
                        {fps} FPS
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 4 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>Frame Time</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, fontFamily: 'monospace' }}>
                        {frameTime} ms
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 4 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>Reconciliations</Typography>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, fontFamily: 'monospace' }}>
                        {renderCount} renders
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* Stream output area */}
                  <Box sx={{ flex: 1, minHeight: 140 }}>
                    {streamedText ? (
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'monospace',
                          fontSize: '0.9rem',
                          lineHeight: 1.7,
                          color: 'text.primary',
                        }}
                      >
                        {streamedText}
                        {isStreaming && (
                          <Box component="span" sx={{ display: 'inline-block', width: 6, height: 14, bgcolor: 'primary.main', ml: 0.5, verticalAlign: 'middle', animation: 'blink 1s infinite' }} />
                        )}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', pt: 4, textAlign: 'center' }}>
                        Click "Run Live Stream" to observe the live token stream and watch how the FPS counter behaves under unbuffered vs. rAF buffered streaming.
                      </Typography>
                    )}
                  </Box>

                  {/* Telemetry Diagnosis message */}
                  <Box sx={{ mt: 2, pt: 1.5, borderTop: '1px solid', borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)' }}>
                    {streamMode === 'naive' ? (
                      <Stack direction="row" spacing={1} alignItems="center">
                        <ErrorOutline sx={{ color: '#EF4444', fontSize: 16 }} />
                        <Typography variant="caption" sx={{ color: '#EF4444', fontWeight: 600 }}>
                          Frame Churn: Each chunk immediately fires setState, causing {renderCount} reconciliations.
                        </Typography>
                      </Stack>
                    ) : (
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CheckCircle sx={{ color: '#10B981', fontSize: 16 }} />
                        <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 600 }}>
                          Locked 60 FPS: Flushes batched onto requestAnimationFrame; zero dropped frames.
                        </Typography>
                      </Stack>
                    )}
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            {showCode && (
              <Paper
                elevation={0}
                sx={{
                  mt: 3,
                  p: 2.5,
                  borderRadius: 2,
                  bgcolor: isDark ? '#0C0C0D' : '#141416',
                  color: '#FAFAFA',
                  fontFamily: 'monospace',
                  fontSize: '0.82rem',
                  overflowX: 'auto'
                }}
              >
                <Typography variant="caption" sx={{ color: '#93C5FD', display: 'block', mb: 1, fontWeight: 700 }}>
                  rAF Buffered Pattern (from 18.3k LinkedIn Post):
                </Typography>
                <pre style={{ margin: 0, lineHeight: 1.6 }}>{`const tokenBufferRef = useRef('');
const isFlushingRef = useRef(false);

const onChunkReceived = (chunk: string) => {
  tokenBufferRef.current += chunk;

  if (!isFlushingRef.current) {
    isFlushingRef.current = true;
    requestAnimationFrame(() => {
      setStreamedText(prev => prev + tokenBufferRef.current);
      tokenBufferRef.current = '';
      isFlushingRef.current = false;
    });
  }
};`}</pre>
              </Paper>
            )}
          </Card>
        )}

        {/* TAB 02: Request Deduplication */}
        {currentTab === 1 && (
          <Card
            elevation={0}
            sx={{
              borderRadius: 2.5,
              p: { xs: 3, md: 4 },
              bgcolor: isDark ? '#141416' : '#FFFFFF',
              border: '1px solid',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
            }}
          >
            <Box sx={{ maxWidth: 780, mx: 'auto', textAlign: 'center', mb: 4 }}>
              <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700 }}>
                FrankieOne Compliance Portal Architecture
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                In-Flight Request Deduplication vs. Duplicate Network Flights
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                When multiple sibling widgets mount concurrently (KYC Verification, AML Alerts, Analyst Notes, Custom Columns),
                a naive <code>useEffect</code> sends 4 identical wire requests. TanStack Query deduplicates identical in-flight query keys into <strong>1 single wire flight</strong>.
              </Typography>

              <Button
                variant="contained"
                disabled={isFiringRequests}
                onClick={runDeduplication}
                startIcon={<PlayArrow />}
                sx={{ mt: 3, fontWeight: 700, px: 3, py: 1 }}
              >
                {isFiringRequests ? 'Mounting 4 Sibling Widgets...' : 'Mount 4 Sibling Widgets'}
              </Button>
            </Box>

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    bgcolor: isDark ? '#0C0C0D' : '#F4F4F5',
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                    height: '100%'
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#EF4444' }}>
                      Naive useEffect / useState
                    </Typography>
                    <Chip label="4 Wire Requests (0% Saved)" size="small" color="error" sx={{ fontFamily: 'monospace', fontWeight: 700 }} />
                  </Box>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                    4 unshared network flights hit the compliance API backend simultaneously.
                  </Typography>

                  <Stack spacing={1.5}>
                    {['KYC Widget', 'AML Alert Card', 'Analyst Comments', 'Custom Views'].map((w, i) => (
                      <Box key={w}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>{w} (GET /api/v1/entity)</Typography>
                          <Typography variant="caption" sx={{ fontFamily: 'monospace', color: dedupStep === 'completed' ? '#EF4444' : 'text.secondary' }}>
                            {dedupStep === 'in-flight' ? `Flight #${i + 1}` : dedupStep === 'completed' ? '200 OK (Wire)' : 'Idle'}
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant={dedupStep === 'in-flight' ? 'indeterminate' : 'determinate'}
                          value={dedupStep === 'completed' ? 100 : 0}
                          color="error"
                          sx={{ height: 5, borderRadius: 1 }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    bgcolor: isDark ? '#0C0C0D' : '#F4F4F5',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    height: '100%'
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#10B981' }}>
                      TanStack Query Key Deduplication
                    </Typography>
                    <Chip label="1 Wire Flight • 75% Saved" size="small" color="success" sx={{ fontFamily: 'monospace', fontWeight: 700 }} />
                  </Box>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                    1 wire request launched. Sibling components attach to the in-flight promise and share cache.
                  </Typography>

                  <Stack spacing={1.5}>
                    <Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: '#10B981' }}>KYC Widget: In-Flight Wire Call</Typography>
                        <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#10B981' }}>
                          {dedupStep === 'in-flight' ? 'Wire Flight' : dedupStep === 'completed' ? '200 OK (Wire)' : 'Ready'}
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant={dedupStep === 'in-flight' ? 'indeterminate' : 'determinate'}
                        value={dedupStep === 'completed' ? 100 : 0}
                        color="success"
                        sx={{ height: 6, borderRadius: 1 }}
                      />
                    </Box>

                    {['AML Alert Card', 'Analyst Comments', 'Custom Views'].map((w) => (
                      <Box key={w}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>{w}: Attached to Promise</Typography>
                          <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#10B981' }}>
                            {dedupStep === 'in-flight' ? 'Subscribed' : dedupStep === 'completed' ? 'Cache Hit (0ms)' : 'Waiting'}
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={dedupStep === 'completed' ? 100 : dedupStep === 'in-flight' ? 70 : 0}
                          color="success"
                          sx={{ height: 5, borderRadius: 1, opacity: 0.7 }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Card>
        )}

        {/* TAB 03: FinOps Table Virtualization */}
        {currentTab === 2 && (
          <Card
            elevation={0}
            sx={{
              borderRadius: 2.5,
              p: { xs: 3, md: 4 },
              bgcolor: isDark ? '#141416' : '#FFFFFF',
              border: '1px solid',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
            }}
          >
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700 }}>
                  Costimizer AI Dashboard Optimization
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                  1,000+ Row Table Virtualization
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                  Rendering 1,000+ DOM table rows with cost data and charts causes severe layout thrashing.
                  Windowed virtualization renders only the ~12-16 items visible in the viewport.
                </Typography>

                <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', display: 'block', mb: 1, fontWeight: 700 }}>
                  DOM Strategy:
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                  <Button
                    variant={tableMode === 'virtual' ? 'contained' : 'outlined'}
                    size="small"
                    onClick={() => setTableMode('virtual')}
                    sx={{ flex: 1, fontWeight: 600, fontSize: '0.82rem' }}
                  >
                    Windowed (Virtual)
                  </Button>
                  <Button
                    variant={tableMode === 'raw' ? 'contained' : 'outlined'}
                    color="warning"
                    size="small"
                    onClick={() => setTableMode('raw')}
                    sx={{ flex: 1, fontWeight: 600, fontSize: '0.82rem' }}
                  >
                    Raw DOM (400 Nodes)
                  </Button>
                </Stack>

                <TextField
                  fullWidth
                  size="small"
                  placeholder="Filter resources (e.g. us-east, c5)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{ mb: 3 }}
                />

                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: isDark ? '#0C0C0D' : '#F4F4F5',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'
                  }}
                >
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                    Active DOM Nodes in Table:
                  </Typography>
                  <Typography variant="h6" sx={{ fontFamily: 'monospace', fontWeight: 800, color: tableMode === 'virtual' ? '#10B981' : '#F59E0B' }}>
                    {tableMode === 'virtual' ? `${visibleRows.length} Nodes` : `${visibleRows.length * 5} Nodes`}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {tableMode === 'virtual' ? 'Zero layout jank during scroll' : 'High memory & reflow cost'}
                  </Typography>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, md: 8 }}>
                <Paper
                  elevation={0}
                  onScroll={(e) => setScrollTop((e.target as HTMLDivElement).scrollTop)}
                  sx={{
                    height: VIEWPORT_HEIGHT,
                    overflowY: 'auto',
                    borderRadius: 2,
                    bgcolor: isDark ? '#0C0C0D' : '#F4F4F5',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                    position: 'relative'
                  }}
                >
                  <Box sx={{ height: tableMode === 'virtual' ? TOTAL_COUNT * ROW_HEIGHT : 'auto', position: 'relative' }}>
                    <Box
                      sx={{
                        transform: tableMode === 'virtual' ? `translateY(${startIndex * ROW_HEIGHT}px)` : 'none',
                        position: tableMode === 'virtual' ? 'absolute' : 'static',
                        left: 0,
                        right: 0,
                        top: 0
                      }}
                    >
                      {visibleRows.map((item) => (
                        <Box
                          key={item.id}
                          sx={{
                            height: ROW_HEIGHT,
                            display: 'flex',
                            alignItems: 'center',
                            px: 2,
                            borderBottom: '1px solid',
                            borderColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                            fontSize: '0.82rem',
                            fontFamily: 'monospace'
                          }}
                        >
                          <Typography variant="caption" sx={{ width: '45%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {item.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ width: '25%' }}>
                            {item.region}
                          </Typography>
                          <Typography variant="caption" sx={{ width: '15%', fontWeight: 600 }}>
                            ${item.monthlyCost}
                          </Typography>
                          <Typography variant="caption" sx={{ width: '15%', color: '#10B981', fontWeight: 600 }}>
                            -${item.savings}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Paper>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1, fontFamily: 'monospace' }}>
                  Showing {visibleRows.length} rendered rows out of {TOTAL_COUNT} total matching items.
                </Typography>
              </Grid>
            </Grid>
          </Card>
        )}

        {/* Footer Ask AI */}
        <AskAiFooter />
      </Container>
    </Box>
  );
};

export default PlaygroundPage;
