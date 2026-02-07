import { useState, useMemo } from 'react';
import { Box, Container, Typography, ToggleButton, ToggleButtonGroup, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ReviewCard from '../ReviewCard';
import content from '../../data/content.json';



const Reviews = () => {
    const theme = useTheme();
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = content.testimonials.map(t => t.category);
        return ['All', ...Array.from(new Set(cats))];
    }, []);

    const filteredTestimonials = useMemo(() => {
        if (selectedCategory === 'All') return content.testimonials;
        return content.testimonials.filter(t => t.category === selectedCategory);
    }, [selectedCategory]);

    const handleCategoryChange = (
        _event: React.MouseEvent<HTMLElement>,
        newCategory: string | null,
    ) => {
        if (newCategory !== null) {
            setSelectedCategory(newCategory);
        }
    };

    return (
        <Box id="reviews" sx={{ py: 15, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography variant="h3" gutterBottom align="center" sx={{ mb: 2, fontWeight: 800 }}>
                        What People Say
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 600, mx: 'auto' }}>
                        Feedback from clients and colleagues I've had the pleasure of working with.
                    </Typography>
                </motion.div>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
                    <ToggleButtonGroup
                        value={selectedCategory}
                        exclusive
                        onChange={handleCategoryChange}
                        aria-label="testimonial category"
                        sx={{
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                            padding: 0.5,
                            borderRadius: '12px !important',
                            '& .MuiToggleButton-root': {
                                border: 'none',
                                borderRadius: '8px !important',
                                px: 3,
                                py: 1,
                                textTransform: 'capitalize',
                                fontWeight: 600,
                                color: 'text.secondary',
                                '&.Mui-selected': {
                                    bgcolor: 'background.paper',
                                    color: 'primary.main',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                    '&:hover': {
                                        bgcolor: 'background.paper',
                                    }
                                }
                            }
                        }}
                    >
                        {categories.map((category: string) => (
                            <ToggleButton key={category} value={category}>
                                {category}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Box>

                <motion.div>
                    <Box
                        className="reviews-marquee-container"
                        sx={{
                            overflow: 'hidden',
                            width: '100%',
                            position: 'relative',
                            py: 4,
                            '&:hover .reviews-marquee-track': {
                                animationPlayState: 'paused'
                            }
                        }}
                    >
                        <Box
                            className="reviews-marquee-track"
                            sx={{
                                display: 'flex',
                                gap: 4,
                                width: 'fit-content',
                                animation: 'scroll-marquee 90s linear infinite',
                                '@keyframes scroll-marquee': {
                                    '0%': { transform: 'translateX(0)' },
                                    '100%': { transform: 'translateX(-50%)' }
                                }
                            }}
                        >
                            {/* Duplicate list 2 times for seamless loop */}
                            {[...filteredTestimonials, ...filteredTestimonials].map((testimonial, index) => (
                                <Box
                                    key={`${testimonial.name}-${index}`}
                                    sx={{
                                        minWidth: { xs: '300px', md: '400px' },
                                        maxWidth: { xs: '300px', md: '400px' },
                                        flexShrink: 0
                                    }}
                                >
                                    <ReviewCard {...testimonial} />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Reviews;
