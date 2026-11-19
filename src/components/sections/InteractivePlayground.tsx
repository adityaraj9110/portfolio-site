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
    useTheme,
    LinearProgress
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayArrow, Refresh, Speed, Bolt, CheckCircle, ErrorOutline, Code } from '@mui/icons-material';

const SAMPLE_TOKENS = [
    "Legal analysis indicates", " that pursuant to Clause 14.2,", " the statutory limitation",
    " period expires after 36 months.", " Furthermore, grounded vector retrieval",
    " confirms concordance with standard", " arbitration provisions across jurisdictions.",
    " TanStack Query eliminates duplicate flights,", " and requestAnimationFrame maintains",
    " a rock-solid 60 FPS refresh rate", " without blocking the browser main thread."
];

const InteractivePlayground = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [currentTab, setCurrentTab] = useState(0);

    // ==========================================
    // DEMO 1: SSE Streaming Simulator
    // ==========================================
    const [streamMode, setStreamMode] = useState<'naive' | 'buffered'>('buffered');
    const [streamedText, setStreamedText] = useState('');
    const [isStreaming, setIsStreaming] = useState(false);
    const [fps, setFps] = useState(60);
    const [showCode, setShowCode] = useState(false);

    const tokenBufferRef = useRef('');
    const isFlushingRef = useRef(false);
    const streamTimeoutRef = useRef<any>(null);

    const stopStream = () => {
        if (streamTimeoutRef.current) clearTimeout(streamTimeoutRef.current);
        setIsStreaming(false);
        setFps(60);
    };

    const runStream = () => {
        stopStream();
        setStreamedText('');
        setIsStreaming(true);

        let tokenIndex = 0;
        const totalTokens = SAMPLE_TOKENS.length;

        const emitNextToken = () => {
            if (tokenIndex >= totalTokens) {
                setIsStreaming(false);
                setFps(60);
                return;
            }

            const token = SAMPLE_TOKENS[tokenIndex] + ' ';
            tokenIndex++;

            if (streamMode === 'naive') {
                // Naive: direct setState on each incoming chunk
                // Simulate main-thread churn and degraded FPS
                setFps(Math.floor(24 + Math.random() * 12));
                setStreamedText((prev) => prev + token);
            } else {
                // Buffered: accumulate in ref and flush on requestAnimationFrame
                tokenBufferRef.current += token;
                setFps(Math.floor(59 + Math.random() * 2)); // Stable ~60 FPS

                if (!isFlushingRef.current) {
                    isFlushingRef.current = true;
                    requestAnimationFrame(() => {
                        setStreamedText((prev) => prev + tokenBufferRef.current);
                        tokenBufferRef.current = '';
                        isFlushingRef.current = false;
                    });
                }
            }

            streamTimeoutRef.current = setTimeout(emitNextToken, 120);
        };

        emitNextToken();
    };

    useEffect(() => {
        return () => {
            if (streamTimeoutRef.current) clearTimeout(streamTimeoutRef.current);
        };
    }, []);

    // ==========================================
    // DEMO 2: Request Deduplication Simulator
    // ==========================================
    const [isFiringRequests, setIsFiringRequests] = useState(false);
    const [dedupStep, setDedupStep] = useState<'idle' | 'in-flight' | 'completed'>('idle');

    const runDeduplication = () => {
        setIsFiringRequests(true);
        setDedupStep('in-flight');

        setTimeout(() => {
            setDedupStep('completed');
            setIsFiringRequests(false);
        }, 1600);
    };

    return (
        <Box id="playground" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
                    <Chip
                        icon={<Bolt sx={{ fontSize: '18px !important' }} />}
                        label="Senior Credibility Playground"
                        color="primary"
                        sx={{ fontWeight: 700, mb: 1.5, letterSpacing: 0.5 }}
                    />
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            fontSize: { xs: '2rem', md: '2.75rem' },
                            mb: 2
                        }}
                    >
                        Interactive "Under the Hood" Lab
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400, lineHeight: 1.6 }}
                    >
                        Live, interactive micro-simulations demonstrating performance optimizations
                        engineered for production FinTech, FinOps, and AI interfaces.
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        <Tabs
                            value={currentTab}
                            onChange={(_e, val) => setCurrentTab(val)}
                            textColor="primary"
                            indicatorColor="primary"
                            sx={{
                                bgcolor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)',
                                borderRadius: 3,
                                p: 0.5,
                                '& .MuiTab-root': {
                                    fontWeight: 700,
                                    borderRadius: 2.5,
                                    textTransform: 'none',
                                    fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                    px: { xs: 2, sm: 3 }
                                }
                            }}
                        >
                            <Tab label="1. SSE Token Streaming & FPS Demo" />
                            <Tab label="2. Request Deduplication Visualizer" />
                        </Tabs>
                    </Box>
                </Box>

                {/* TAB 1: SSE Streaming */}
                {currentTab === 0 && (
                    <motion.div
                        key="tab-sse"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Card
                            elevation={0}
                            sx={{
                                borderRadius: 4,
                                p: { xs: 2.5, md: 4 },
                                bgcolor: isDark ? 'rgba(15, 23, 42, 0.75)' : '#FFFFFF',
                                border: '1px solid',
                                borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
                                boxShadow: isDark
                                    ? '0 20px 40px -15px rgba(0,0,0,0.5)'
                                    : '0 20px 40px -15px rgba(0,0,0,0.06)'
                            }}
                        >
                            <Grid container spacing={4} alignItems="center">
                                {/* Left Controls */}
                                <Grid size={{ xs: 12, md: 5 }}>
                                    <Typography variant="overline" color="primary" sx={{ fontWeight: 800 }}>
                                        From 18,309-Impression Viral Post
                                    </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>
                                        High-Frequency SSE Token Streaming
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                                        When an LLM streams 80+ tokens/sec, unbuffered <code>setState</code> per chunk
                                        triggers endless React reconciliations, causing frame drops. Buffered <code>rAF</code> flushes
                                        lock render cycles strictly to the screen's refresh interval.
                                    </Typography>

                                    <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 1 }}>
                                        Select Strategy:
                                    </Typography>
                                    <Stack direction="row" spacing={1.5} sx={{ mb: 3 }}>
                                        <Button
                                            variant={streamMode === 'naive' ? 'contained' : 'outlined'}
                                            color="error"
                                            size="small"
                                            onClick={() => { setStreamMode('naive'); stopStream(); }}
                                            sx={{ fontWeight: 700, textTransform: 'none', flex: 1 }}
                                        >
                                            Naive setState (Laggy)
                                        </Button>
                                        <Button
                                            variant={streamMode === 'buffered' ? 'contained' : 'outlined'}
                                            color="success"
                                            size="small"
                                            onClick={() => { setStreamMode('buffered'); stopStream(); }}
                                            sx={{ fontWeight: 700, textTransform: 'none', flex: 1 }}
                                        >
                                            Buffered rAF (Smooth 60 FPS)
                                        </Button>
                                    </Stack>

                                    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={isStreaming ? <Refresh /> : <PlayArrow />}
                                            onClick={runStream}
                                            sx={{ fontWeight: 700, py: 1.2, px: 3, flex: 1 }}
                                        >
                                            {isStreaming ? 'Restart Stream' : 'Run Live Stream'}
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            startIcon={<Code />}
                                            onClick={() => setShowCode(!showCode)}
                                            sx={{ fontWeight: 600 }}
                                        >
                                            {showCode ? 'Hide Code' : 'Code'}
                                        </Button>
                                    </Stack>
                                </Grid>

                                {/* Right Output Window */}
                                <Grid size={{ xs: 12, md: 7 }}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            borderRadius: 3,
                                            minHeight: 280,
                                            bgcolor: isDark ? '#020617' : '#F8FAFC',
                                            border: '1px solid',
                                            borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                                            position: 'relative',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        {/* Status Header */}
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, pb: 1.5, borderBottom: '1px solid', borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)' }}>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Speed sx={{ color: fps >= 55 ? '#10B981' : '#EF4444', fontSize: 20 }} />
                                                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                                                    Live FPS: <span style={{ color: fps >= 55 ? '#10B981' : '#EF4444', fontWeight: 800 }}>{fps} FPS</span>
                                                </Typography>
                                            </Stack>
                                            <Chip
                                                size="small"
                                                label={streamMode === 'naive' ? 'Unbuffered Churn' : 'rAF Synchronized'}
                                                color={streamMode === 'naive' ? 'error' : 'success'}
                                                sx={{ fontWeight: 700, fontSize: '0.72rem' }}
                                            />
                                        </Box>

                                        {/* Streaming text container */}
                                        <Box sx={{ flex: 1, minHeight: 140 }}>
                                            {streamedText ? (
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        fontFamily: 'monospace',
                                                        fontSize: '0.95rem',
                                                        lineHeight: 1.7,
                                                        color: isDark ? '#E2E8F0' : '#1E293B',
                                                    }}
                                                >
                                                    {streamedText}
                                                    {isStreaming && (
                                                        <Box component="span" sx={{ display: 'inline-block', width: 8, height: 16, bgcolor: 'primary.main', ml: 0.5, verticalAlign: 'middle', animation: 'blink 1s infinite' }} />
                                                    )}
                                                </Typography>
                                            ) : (
                                                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', pt: 4, textAlign: 'center' }}>
                                                    Click "Run Live Stream" to observe the live token stream and watch how the FPS counter behaves under unbuffered vs. rAF buffered streaming.
                                                </Typography>
                                            )}
                                        </Box>

                                        {/* Performance Diagnosis banner */}
                                        <Box sx={{ mt: 2, pt: 1.5, borderTop: '1px solid', borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)' }}>
                                            {streamMode === 'naive' ? (
                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    <ErrorOutline sx={{ color: '#EF4444', fontSize: 18 }} />
                                                    <Typography variant="caption" sx={{ color: '#EF4444', fontWeight: 600 }}>
                                                        Warning: Uncontrolled setState on every token chunk starves the browser event loop.
                                                    </Typography>
                                                </Stack>
                                            ) : (
                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    <CheckCircle sx={{ color: '#10B981', fontSize: 18 }} />
                                                    <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 600 }}>
                                                        Optimal: requestAnimationFrame queues tokens and renders once per screen refresh (60 FPS).
                                                    </Typography>
                                                </Stack>
                                            )}
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>

                            {/* Code snippet expandable */}
                            <AnimatePresence>
                                {showCode && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                mt: 3,
                                                p: 2.5,
                                                borderRadius: 2.5,
                                                bgcolor: isDark ? '#020617' : '#0F172A',
                                                color: '#F8FAFC',
                                                fontFamily: 'monospace',
                                                fontSize: '0.85rem'
                                            }}
                                        >
                                            <Typography variant="caption" sx={{ color: '#93C5FD', display: 'block', mb: 1, fontWeight: 700 }}>
                                                Production rAF Buffered Streaming Pattern (from Aditya's 18k LinkedIn Breakdown):
                                            </Typography>
                                            <pre style={{ margin: 0, overflowX: 'auto', lineHeight: 1.6 }}>
{`// 1. Maintain mutable token buffer in a ref to bypass immediate re-render
const tokenBufferRef = useRef('');
const isFlushingRef = useRef(false);

const onChunkReceived = (chunk: string) => {
  tokenBufferRef.current += chunk;

  // 2. Schedule flush only when browser is ready for next frame
  if (!isFlushingRef.current) {
    isFlushingRef.current = true;
    requestAnimationFrame(() => {
      setStreamedText(prev => prev + tokenBufferRef.current);
      tokenBufferRef.current = '';
      isFlushingRef.current = false;
    });
  }
};`}
                                            </pre>
                                        </Paper>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Card>
                    </motion.div>
                )}

                {/* TAB 2: Request Deduplication */}
                {currentTab === 1 && (
                    <motion.div
                        key="tab-dedup"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Card
                            elevation={0}
                            sx={{
                                borderRadius: 4,
                                p: { xs: 2.5, md: 4 },
                                bgcolor: isDark ? 'rgba(15, 23, 42, 0.75)' : '#FFFFFF',
                                border: '1px solid',
                                borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
                            }}
                        >
                            <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center', mb: 4 }}>
                                <Typography variant="overline" color="primary" sx={{ fontWeight: 800 }}>
                                    FrankieOne &amp; Costimizer Architecture
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5 }}>
                                    TanStack Query Automatic Request Deduplication
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                    When 5 sibling components mount at the same instant (e.g. KYC status, comments, risk badge, custom views),
                                    naive <code>useEffect</code> sends 5 separate network flights. TanStack Query deduplicates identical in-flight query keys into <strong>1 single wire flight</strong>.
                                </Typography>

                                <Button
                                    variant="contained"
                                    size="large"
                                    disabled={isFiringRequests}
                                    onClick={runDeduplication}
                                    startIcon={<PlayArrow />}
                                    sx={{ mt: 2, fontWeight: 700, px: 4, py: 1.2 }}
                                >
                                    {isFiringRequests ? 'Simulating Concurrent Mount...' : 'Mount 5 Sibling Components'}
                                </Button>
                            </Box>

                            <Grid container spacing={4}>
                                {/* Lane 1: Naive useEffect */}
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            borderRadius: 3,
                                            bgcolor: isDark ? 'rgba(239, 68, 68, 0.05)' : 'rgba(239, 68, 68, 0.03)',
                                            border: '1px solid rgba(239, 68, 68, 0.25)',
                                            height: '100%'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#EF4444' }}>
                                                ❌ Naive useEffect / useState
                                            </Typography>
                                            <Chip label="5 Wire Requests" size="small" color="error" sx={{ fontWeight: 700 }} />
                                        </Box>

                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, fontSize: '0.85rem' }}>
                                            Each component fires an independent <code>fetch()</code> on mount. 5x backend server load.
                                        </Typography>

                                        <Stack spacing={1.5}>
                                            {[1, 2, 3, 4, 5].map((compNum) => (
                                                <Box key={compNum}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                                        <Typography variant="caption" sx={{ fontWeight: 600 }}>
                                                            Component #{compNum} (GET /api/v1/compliance/entity)
                                                        </Typography>
                                                        <Typography variant="caption" sx={{ color: dedupStep === 'completed' ? '#EF4444' : 'text.secondary' }}>
                                                            {dedupStep === 'in-flight' ? 'Flight # ' + compNum : dedupStep === 'completed' ? '200 OK (Wire Flight)' : 'Waiting'}
                                                        </Typography>
                                                    </Box>
                                                    <LinearProgress
                                                        variant={dedupStep === 'in-flight' ? 'indeterminate' : 'determinate'}
                                                        value={dedupStep === 'completed' ? 100 : 0}
                                                        color="error"
                                                        sx={{ height: 6, borderRadius: 1 }}
                                                    />
                                                </Box>
                                            ))}
                                        </Stack>
                                    </Paper>
                                </Grid>

                                {/* Lane 2: TanStack Query */}
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 3,
                                            borderRadius: 3,
                                            bgcolor: isDark ? 'rgba(16, 185, 129, 0.05)' : 'rgba(16, 185, 129, 0.03)',
                                            border: '1px solid rgba(16, 185, 129, 0.25)',
                                            height: '100%'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#10B981' }}>
                                                ✅ TanStack Query Key Caching
                                            </Typography>
                                            <Chip label="1 Wire Request • 4 Cache Hits" size="small" color="success" sx={{ fontWeight: 700 }} />
                                        </Box>

                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, fontSize: '0.85rem' }}>
                                            1 network request launched. Remaining 4 components subscribe to in-flight promise and share cache.
                                        </Typography>

                                        <Stack spacing={1.5}>
                                            <Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                                    <Typography variant="caption" sx={{ fontWeight: 700, color: '#10B981' }}>
                                                        Component #1: Single In-Flight Wire Request
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 600 }}>
                                                        {dedupStep === 'in-flight' ? 'In-Flight' : dedupStep === 'completed' ? '200 OK (Shared)' : 'Ready'}
                                                    </Typography>
                                                </Box>
                                                <LinearProgress
                                                    variant={dedupStep === 'in-flight' ? 'indeterminate' : 'determinate'}
                                                    value={dedupStep === 'completed' ? 100 : 0}
                                                    color="success"
                                                    sx={{ height: 8, borderRadius: 1 }}
                                                />
                                            </Box>

                                            {[2, 3, 4, 5].map((compNum) => (
                                                <Box key={compNum}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                                        <Typography variant="caption" sx={{ fontWeight: 600 }}>
                                                            Component #{compNum}: Attached to Promise
                                                        </Typography>
                                                        <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 600 }}>
                                                            {dedupStep === 'in-flight' ? 'Subscribed' : dedupStep === 'completed' ? 'Cache Hit (0ms Wire)' : 'Waiting'}
                                                        </Typography>
                                                    </Box>
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={dedupStep === 'completed' ? 100 : dedupStep === 'in-flight' ? 70 : 0}
                                                        color="success"
                                                        sx={{ height: 6, borderRadius: 1, opacity: 0.7 }}
                                                    />
                                                </Box>
                                            ))}
                                        </Stack>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Card>
                    </motion.div>
                )}
            </Container>
        </Box>
    );
};

export default InteractivePlayground;
