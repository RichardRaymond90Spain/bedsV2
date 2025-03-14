"use client"

import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title = "Quality Sleep Solutions",
  subtitle = "Discover our premium selection of beds, mattresses, and furniture packages.",
  ctaText = "Shop Now",
  ctaLink = "/mattresses",
  backgroundImage = "/underConstruction.jpg"
}: HeroSectionProps) {
  return (
    <Box 
      sx={{ 
        position: 'relative',
        height: { xs: '400px', md: '500px' },
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }
      }}
    >
      {/* Background Image */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </Box>
      
      {/* Content */}
      <Container sx={{ position: 'relative', zIndex: 2, color: 'white' }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="h5" 
          paragraph
          sx={{ 
            mb: 4,
            maxWidth: '600px',
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}
        >
          {subtitle}
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          component={Link} 
          href={ctaLink}
          size="large"
          sx={{ 
            fontWeight: 'bold',
            px: 4,
            py: 1.5
          }}
        >
          {ctaText}
        </Button>
      </Container>
    </Box>
  )
}
