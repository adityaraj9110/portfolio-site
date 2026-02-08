import { Box, Container, Typography, Stack, IconButton, Divider } from '@mui/material';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { styles } from './Footer.styles';

const Footer = () => {
    return (
        <Box sx={styles.container}>
            <Container maxWidth="lg">
                <Stack spacing={4} alignItems="center">
                    <Typography variant="h5" sx={styles.logo}>
                        ADITYA<span style={{ color: '#666' }}>.</span>
                    </Typography>

                    <Stack direction="row" spacing={3}>
                        <IconButton
                            color="inherit"
                            component="a"
                            href="https://github.com/adityaraj9110"
                            target="_blank"
                        >
                            <Github />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            component="a"
                            href="https://linkedin.com/in/aditya-raj-9b2165227/"
                            target="_blank"
                        >
                            <Linkedin />
                        </IconButton>
                        <IconButton color="inherit"><Twitter /></IconButton>
                        <IconButton
                            color="inherit"
                            component="a"
                            href="mailto:adityasrivastav0853@gmail.com"
                        >
                            <Mail />
                        </IconButton>
                    </Stack>

                    <Divider sx={styles.divider} />

                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Designed & Built by Aditya Raj. All rights reserved.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
