import { useState, useMemo } from 'react';
import { Box, Container, Typography, ToggleButton, ToggleButtonGroup, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ReviewCard from '../ReviewCard';
import { styles } from './Reviews.styles';
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
        <Box id="reviews" sx={styles.container}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography variant="h3" gutterBottom align="center" sx={styles.sectionTitle}>
                        What People Say
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={styles.sectionSubtitle}>
                        Feedback from clients and colleagues I've had the pleasure of working with.
                    </Typography>
                </motion.div>

                <Box sx={styles.filterContainer}>
                    <ToggleButtonGroup
                        value={selectedCategory}
                        exclusive
                        onChange={handleCategoryChange}
                        aria-label="testimonial category"
                        sx={styles.toggleButtonGroup(theme)}
                    >
                        {categories.map((category: string) => (
                            <ToggleButton key={category} value={category}>
                                {category}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Box>

                <motion.div>
                    <Box className="reviews-marquee-container" sx={styles.marqueeContainer}>
                        <Box className="reviews-marquee-track" sx={styles.marqueeTrack}>
                            {/* Duplicate list 2 times for seamless loop */}
                            {[...filteredTestimonials, ...filteredTestimonials].map((testimonial, index) => (
                                <Box key={`${testimonial.name}-${index}`} sx={styles.reviewCardContainer}>
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
