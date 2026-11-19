import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Chip,
  useTheme
} from '@mui/material';
import {
  Home,
  Work,
  Science,
  Article,
  Person,
  ContentCopy,
  OpenInNew,
  Search,
  SmartToy
} from '@mui/icons-material';

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  label: string;
  category: 'Navigation' | 'Case Studies' | 'Actions';
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const commands: CommandItem[] = [
    {
      id: 'home',
      label: 'Home',
      category: 'Navigation',
      icon: <Home fontSize="small" />,
      action: () => { navigate('/'); onClose(); }
    },
    {
      id: 'work',
      label: 'Work (All Case Studies)',
      category: 'Navigation',
      icon: <Work fontSize="small" />,
      action: () => { navigate('/work'); onClose(); }
    },
    {
      id: 'playground',
      label: 'Interactive Systems Playground',
      category: 'Navigation',
      icon: <Science fontSize="small" />,
      action: () => { navigate('/playground'); onClose(); }
    },
    {
      id: 'writing',
      label: 'Writing & Engineering Notes',
      category: 'Navigation',
      icon: <Article fontSize="small" />,
      action: () => { navigate('/writing'); onClose(); }
    },
    {
      id: 'about',
      label: 'About & Career Philosophy',
      category: 'Navigation',
      icon: <Person fontSize="small" />,
      action: () => { navigate('/about'); onClose(); }
    },
    // Case studies
    {
      id: 'case-digilawyer',
      label: 'Case Study: DigiLawyer AI (LCP 7s → 1.2s & RAG)',
      category: 'Case Studies',
      icon: <Work fontSize="small" />,
      action: () => { navigate('/work/digilawyer-lcp-rag'); onClose(); }
    },
    {
      id: 'case-frankieone',
      label: 'Case Study: FrankieOne Portal (70% Fewer API Calls)',
      category: 'Case Studies',
      icon: <Work fontSize="small" />,
      action: () => { navigate('/work/frankieone-caching-mfe'); onClose(); }
    },
    {
      id: 'case-costimizer',
      label: 'Case Study: Costimizer AI (1,000+ Row FinOps & SSE)',
      category: 'Case Studies',
      icon: <Work fontSize="small" />,
      action: () => { navigate('/work/costimizer-finops-sse'); onClose(); }
    },
    {
      id: 'case-one-sdk',
      label: 'Case Study: FrankieOne One-SDK (4.5k+ Weekly npm)',
      category: 'Case Studies',
      icon: <Work fontSize="small" />,
      action: () => { navigate('/work/frankieone-one-sdk'); onClose(); }
    },
    // Actions
    {
      id: 'copy-email',
      label: 'Copy Email (adityasrivastav0853@gmail.com)',
      category: 'Actions',
      icon: <ContentCopy fontSize="small" />,
      action: () => {
        navigator.clipboard.writeText('adityasrivastav0853@gmail.com');
        onClose();
      }
    },
    {
      id: 'ask-ai',
      label: 'Ask AI About Aditya (/llms.txt prompt)',
      category: 'Actions',
      icon: <SmartToy fontSize="small" />,
      action: () => {
        window.open('https://chatgpt.com/?q=' + encodeURIComponent('Read https://aditya-profile-site.netlify.app/llms.txt and summarize Aditya Raj\'s engineering background'), '_blank');
        onClose();
      }
    },
    {
      id: 'github',
      label: 'Open GitHub Profile (@adityaraj9110)',
      category: 'Actions',
      icon: <OpenInNew fontSize="small" />,
      action: () => {
        window.open('https://github.com/adityaraj9110', '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn Profile',
      category: 'Actions',
      icon: <OpenInNew fontSize="small" />,
      action: () => {
        window.open('https://www.linkedin.com/in/aditya-raj-9b2165227/', '_blank', 'noopener,noreferrer');
        onClose();
      }
    }
  ];

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          bgcolor: isDark ? '#141416' : '#FFFFFF',
          border: '1px solid',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
          boxShadow: isDark
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
          mt: { xs: 4, md: 10 },
          alignSelf: 'flex-start',
        }
      }}
    >
      <Box sx={{ p: 2, pb: 1, display: 'flex', alignItems: 'center', borderBottom: '1px solid', borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}>
        <Search sx={{ color: 'text.secondary', mr: 1.5, fontSize: 20 }} />
        <TextField
          autoFocus
          fullWidth
          variant="standard"
          placeholder="Type a command or search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            disableUnderline: true,
            sx: {
              fontSize: '0.95rem',
              color: 'text.primary',
            }
          }}
        />
        <Chip
          label="ESC"
          size="small"
          onClick={onClose}
          sx={{
            fontFamily: 'monospace',
            fontSize: '0.7rem',
            height: 22,
            bgcolor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)',
            cursor: 'pointer'
          }}
        />
      </Box>

      <DialogContent sx={{ p: 1, maxHeight: 380, overflowY: 'auto' }}>
        {filtered.length === 0 ? (
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              No matching commands or pages found.
            </Typography>
          </Box>
        ) : (
          <List disablePadding>
            {filtered.map((item) => (
              <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={item.action}
                  sx={{
                    borderRadius: 2,
                    py: 1,
                    px: 1.5,
                    '&:hover': {
                      bgcolor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                    }
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 34, color: 'text.secondary' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'text.primary'
                    }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>
                    {item.category}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CommandPalette;
