import React from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material';

interface ArchitectureDiagramProps {
  caseStudyId: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ caseStudyId }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const strokeColor = isDark ? '#52525B' : '#D4D4D8';
  const boxBg = isDark ? '#18181B' : '#F4F4F5';
  const textColor = isDark ? '#FAFAFA' : '#09090B';
  const subTextColor = isDark ? '#A1A1AA' : '#71717A';
  const accentColor = '#3B82F6';
  const greenColor = '#10B981';
  const redColor = '#EF4444';

  const renderDiagram = () => {
    switch (caseStudyId) {
      case 'digilawyer-lcp-rag':
        return (
          <svg viewBox="0 0 760 260" width="100%" height="100%" style={{ maxHeight: 260 }}>
            {/* Before */}
            <rect x="20" y="20" width="340" height="220" rx="8" fill={boxBg} stroke={redColor} strokeDasharray="4 4" strokeWidth="1.5" />
            <text x="40" y="48" fill={redColor} fontWeight="700" fontSize="13" fontFamily="monospace">BEFORE: 7.0s LCP (Monolithic)</text>
            <rect x="40" y="65" width="300" height="40" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="55" y="90" fill={textColor} fontSize="12" fontWeight="600">Client-Side SPA (Empty HTML Shell)</text>
            
            <path d="M 190 105 L 190 125" stroke={strokeColor} strokeWidth="1.5" markerEnd="url(#arrow)" />
            
            <rect x="40" y="125" width="300" height="40" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="55" y="150" fill={textColor} fontSize="12" fontWeight="600">1.4MB Bundle + Quill + PDF Parsers</text>
            
            <path d="M 190 165 L 190 185" stroke={strokeColor} strokeWidth="1.5" />
            <rect x="40" y="185" width="300" height="35" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="55" y="207" fill={redColor} fontSize="12" fontWeight="600">Blocking REST Call (30% Acc)</text>

            {/* After */}
            <rect x="400" y="20" width="340" height="220" rx="8" fill={boxBg} stroke={greenColor} strokeWidth="1.5" />
            <text x="420" y="48" fill={greenColor} fontWeight="700" fontSize="13" fontFamily="monospace">AFTER: 1.2s LCP (SSR/SSG + SSE)</text>
            <rect x="420" y="65" width="300" height="40" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="435" y="90" fill={textColor} fontSize="12" fontWeight="600">Next.js SSG Marketing + Fast Edge Paint</text>

            <path d="M 570 105 L 570 125" stroke={accentColor} strokeWidth="1.5" />

            <rect x="420" y="125" width="300" height="40" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="435" y="150" fill={textColor} fontSize="12" fontWeight="600">next/dynamic Lazy Hydration Boundaries</text>

            <path d="M 570 165 L 570 185" stroke={accentColor} strokeWidth="1.5" />
            <rect x="420" y="185" width="300" height="35" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="435" y="207" fill={greenColor} fontSize="12" fontWeight="600">Grounded RAG + Streaming SSE (90% Acc)</text>
          </svg>
        );

      case 'frankieone-caching-mfe':
        return (
          <svg viewBox="0 0 760 260" width="100%" height="100%" style={{ maxHeight: 260 }}>
            {/* Monolith Sibling Calls */}
            <rect x="20" y="20" width="340" height="220" rx="8" fill={boxBg} stroke={redColor} strokeDasharray="4 4" strokeWidth="1.5" />
            <text x="40" y="48" fill={redColor} fontWeight="700" fontSize="13" fontFamily="monospace">BEFORE: 4 Duplicate Wire Flights</text>
            
            <rect x="40" y="65" width="135" height="40" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="50" y="90" fill={textColor} fontSize="11" fontWeight="600">KYC Widget</text>
            <rect x="195" y="65" width="145" height="40" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="205" y="90" fill={textColor} fontSize="11" fontWeight="600">AML Alert View</text>

            <rect x="40" y="115" width="135" height="40" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="50" y="140" fill={textColor} fontSize="11" fontWeight="600">Comments Tab</text>
            <rect x="195" y="115" width="145" height="40" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="205" y="140" fill={textColor} fontSize="11" fontWeight="600">Custom Columns</text>

            <rect x="40" y="180" width="300" height="40" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="55" y="205" fill={redColor} fontSize="12" fontWeight="600">4x Backend API Load (Tightly Coupled Vue)</text>

            {/* Normalized Query Layer */}
            <rect x="400" y="20" width="340" height="220" rx="8" fill={boxBg} stroke={greenColor} strokeWidth="1.5" />
            <text x="420" y="48" fill={greenColor} fontWeight="700" fontSize="13" fontFamily="monospace">AFTER: TanStack Query Deduplication</text>

            <rect x="420" y="65" width="300" height="50" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="435" y="88" fill={textColor} fontSize="12" fontWeight="600">React Micro-Frontends (AML, KYC, Risk)</text>
            <text x="435" y="105" fill={subTextColor} fontSize="11">Strangler Fig Migration with Strict Types</text>

            <rect x="420" y="125" width="300" height="40" rx="6" fill={isDark ? '#1E293B' : '#DBEAFE'} stroke={accentColor} />
            <text x="435" y="150" fill={accentColor} fontSize="12" fontWeight="700">Centralized Server-State Query Key Layer</text>

            <rect x="420" y="180" width="300" height="40" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="435" y="205" fill={greenColor} fontSize="12" fontWeight="700">1 Wire Flight (70% Redundant API Cut)</text>
          </svg>
        );

      case 'costimizer-finops-sse':
        return (
          <svg viewBox="0 0 760 260" width="100%" height="100%" style={{ maxHeight: 260 }}>
            {/* Raw DOM Churn */}
            <rect x="20" y="20" width="340" height="220" rx="8" fill={boxBg} stroke={redColor} strokeDasharray="4 4" strokeWidth="1.5" />
            <text x="40" y="48" fill={redColor} fontWeight="700" fontSize="13" fontFamily="monospace">BEFORE: Unvirtualized DOM Jitter</text>

            <rect x="40" y="65" width="300" height="50" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="55" y="88" fill={textColor} fontSize="12" fontWeight="600">1,000+ Raw Table Rows (25,000 Nodes)</text>
            <text x="55" y="105" fill={redColor} fontSize="11">Frequent Browser Dropdown Jank</text>

            <rect x="40" y="130" width="300" height="45" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="55" y="157" fill={textColor} fontSize="12" fontWeight="600">80 Token/Sec Raw setState Churn</text>

            <rect x="40" y="190" width="300" height="30" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="55" y="210" fill={redColor} fontSize="11" fontWeight="600">Main Thread Blocked (~25 FPS)</text>

            {/* Virtualized + Buffered */}
            <rect x="400" y="20" width="340" height="220" rx="8" fill={boxBg} stroke={greenColor} strokeWidth="1.5" />
            <text x="420" y="48" fill={greenColor} fontWeight="700" fontSize="13" fontFamily="monospace">AFTER: Virtualization + rAF Queue</text>

            <rect x="420" y="65" width="300" height="50" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="435" y="88" fill={textColor} fontSize="12" fontWeight="600">TanStack Virtual (~18 Active DOM Nodes)</text>
            <text x="435" y="105" fill={greenColor} fontSize="11">40% Fewer Re-renders • 60 FPS Scroll</text>

            <rect x="420" y="130" width="300" height="45" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="435" y="157" fill={textColor} fontSize="12" fontWeight="600">Token Buffer Queue + requestAnimationFrame</text>

            <rect x="420" y="190" width="300" height="30" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="435" y="210" fill={greenColor} fontSize="11" fontWeight="700">Smooth 60 FPS Stream + Hybrid RAG</text>
          </svg>
        );

      case 'frankieone-one-sdk':
      default:
        return (
          <svg viewBox="0 0 760 260" width="100%" height="100%" style={{ maxHeight: 260 }}>
            {/* Hardcoded */}
            <rect x="20" y="20" width="340" height="220" rx="8" fill={boxBg} stroke={redColor} strokeDasharray="4 4" strokeWidth="1.5" />
            <text x="40" y="48" fill={redColor} fontWeight="700" fontSize="13" fontFamily="monospace">BEFORE: Bespoke Client Hardcoding</text>

            <rect x="40" y="65" width="300" height="40" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="55" y="90" fill={textColor} fontSize="12" fontWeight="600">Static Form Definitions Per Bank Client</text>

            <rect x="40" y="115" width="300" height="40" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="55" y="140" fill={textColor} fontSize="12" fontWeight="600">Brittle Date &amp; Regional Compliance Logic</text>

            <rect x="40" y="165" width="300" height="55" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="55" y="188" fill={redColor} fontSize="11" fontWeight="600">Unhandled Camera Permission Timeouts</text>
            <text x="55" y="205" fill={subTextColor} fontSize="11">Global CSS Bleed in Host Enterprise Apps</text>

            {/* Schema-Driven Dynamic Engine */}
            <rect x="400" y="20" width="340" height="220" rx="8" fill={boxBg} stroke={greenColor} strokeWidth="1.5" />
            <text x="420" y="48" fill={greenColor} fontWeight="700" fontSize="13" fontFamily="monospace">AFTER: Schema-Driven Dynamic SDK</text>

            <rect x="420" y="65" width="300" height="40" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="435" y="90" fill={textColor} fontSize="12" fontWeight="600">JSON Schema Dynamic Step &amp; Rule Engine</text>

            <rect x="420" y="115" width="300" height="40" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="435" y="140" fill={textColor} fontSize="12" fontWeight="600">15+ Calendar Variants &amp; Async State Machine</text>

            <rect x="420" y="165" width="300" height="55" rx="6" fill={isDark ? '#27272A' : '#E4E4E7'} />
            <text x="435" y="188" fill={greenColor} fontSize="11" fontWeight="700">Automated Retry Resilience &amp; Headless Tokens</text>
            <text x="435" y="205" fill={subTextColor} fontSize="11">4,500+ Weekly npm Downloads Across FinTechs</text>
          </svg>
        );
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 3 },
        my: 3,
        borderRadius: 2.5,
        bgcolor: isDark ? '#141416' : '#FFFFFF',
        border: '1px solid',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
        overflowX: 'auto',
      }}
    >
      <Box sx={{ minWidth: 640 }}>
        {renderDiagram()}
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1, textAlign: 'center', fontFamily: 'monospace' }}>
        Architecture Flow: Bottleneck Diagnosis vs. Production Solution
      </Typography>
    </Paper>
  );
};

export default ArchitectureDiagram;
