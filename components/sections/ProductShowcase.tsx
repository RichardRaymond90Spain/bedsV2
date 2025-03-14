"use client"

import React from 'react'
import { Box, Typography, Grid, Button, Container } from '@mui/material'
import Link from 'next/link'

const showcaseItems = [
  {
    title: "Premium Mattresses",
    description: "Experience the perfect balance of comfort and support with our premium mattress collection. Handcrafted with the finest materials for a restful night's sleep.",
    buttonText: "SHOP MATTRESSES",
    link: "/mattresses"
  },
  {
    title: "Designer Beds",
    description: "Transform your bedroom with our stylish and durable bed frames. From classic designs to contemporary styles, find the perfect centerpiece for your space.",
    buttonText: "SHOP BEDS",
    link: "/beds"
  },
  {
    title: "Luxury Headboards",
    description: "Complete your bed with a beautiful headboard that adds style and comfort. Choose from our wide selection of designs, materials, and finishes.",
    buttonText: "SHOP HEADBOARDS",
    link: "/headboards"
  }
]

export default function ProductShowcase() {
  return (
    <Box sx={{ py: 6, bgcolor: 'white' }}>
      <Container>
        <Grid container spacing={4}>
          {/* Left side - Title and Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  fontWeight: 500,
                  color: '#333',
                  mb: 3
                }}
              >
                FEATURED PRODUCTS
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#555',
                  lineHeight: 1.6
                }}
              >
                Discover our handpicked selection of premium sleep products designed for ultimate comfort and style. Each item is crafted with care using the finest materials.
              </Typography>
            </Box>
          </Grid>
          
          {/* Right side - Product Cards */}
          <Grid item xs={12} md={8}>
            {showcaseItems.map((item, index) => (
              <Box 
                key={index} 
                sx={{ 
                  mb: 3,
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  border: '1px solid #eaeaea',
                  borderRadius: 0,
                  maxHeight: { md: 180 },
                  overflow: 'hidden'
                }}
              >
                {/* Text Content - Left Side */}
                <Box 
                  sx={{ 
                    p: 2.5,
                    width: { xs: '100%', md: '60%' },
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    bgcolor: 'white'
                  }}
                >
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    sx={{ 
                      mb: 1,
                      fontWeight: 500,
                      color: '#333',
                      fontSize: { xs: '1.1rem', md: '1.3rem' }
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 2,
                      color: '#555',
                      lineHeight: 1.4,
                      fontSize: '0.85rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Button 
                    component={Link}
                    href={item.link}
                    variant="contained"
                    size="small"
                    sx={{ 
                      bgcolor: '#333',
                      color: 'white',
                      py: 0.5,
                      px: 1.5,
                      alignSelf: 'flex-start',
                      borderRadius: 0,
                      textTransform: 'uppercase',
                      fontWeight: 'normal',
                      fontSize: '0.75rem',
                      '&:hover': {
                        bgcolor: '#555'
                      }
                    }}
                  >
                    {item.buttonText}
                  </Button>
                </Box>
                
                {/* Image - Right Side */}
                <Box 
                  sx={{ 
                    width: { xs: '100%', md: '40%' },
                    height: { xs: 150, md: '100%' },
                    bgcolor: '#1976d2', // Blue placeholder
                    '&:hover': {
                      bgcolor: '#1565c0', // Darker blue on hover
                      transition: 'background-color 0.5s ease'
                    }
                  }}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 