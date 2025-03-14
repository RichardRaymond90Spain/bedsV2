"use client"

import React from 'react'
import { Box, Typography, Grid, Button, Container, Avatar } from '@mui/material'
import Link from 'next/link'

const showcaseItems = [
  {
    title: "Premium Mattresses",
    description: "Experience the perfect balance of comfort and support with our premium mattress collection. Handcrafted with the finest materials for a restful night's sleep.",
    buttonText: "SHOP MATTRESSES",
    link: "/mattresses",
    img: "blue"
  },
  {
    title: "Designer Beds",
    description: "Transform your bedroom with our stylish and durable bed frames. From classic designs to contemporary styles, find the perfect centerpiece for your space.",
    buttonText: "SHOP BEDS",
    link: "/beds",
    img: "blue"
  },
  {
    title: "Luxury Headboards",
    description: "Complete your bed with a beautiful headboard that adds style and comfort. Choose from our wide selection of designs, materials, and finishes.",
    buttonText: "SHOP HEADBOARDS",
    link: "/headboards",
    img: "blue"
  }
]

export default function FeaturedProducts() {
  return (
    <Box sx={{ py: 6, bgcolor: 'white' }}>
      <Container>
        <Grid container spacing={4}>
          {/* Left side - Title and Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: { xs: 'static', md: 'sticky' }, top: 100, mb: { xs: 4, md: 0 } }}>
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  fontWeight: 500,
                  color: '#333',
                  mb: 3,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                FEATURED PRODUCTS
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#555',
                  lineHeight: 1.6,
                  textAlign: { xs: 'center', md: 'left' }
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
                  border: '1px solid #eaeaea',
                  borderRadius: 0,
                  overflow: 'hidden'
                }}
              >
                <Grid container spacing={0} minHeight={160} direction="row">
                  {/* Text Content - Left Side */}
                  <Grid 
                    item 
                    xs={7} 
                    md={7}
                    sx={{
                      display: "flex", 
                      flexDirection: "column",
                      justifyContent: "center", 
                      p: 2.5,
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
                        fontSize: { xs: '1rem', md: '1.3rem' }
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
                        fontSize: { xs: '0.75rem', md: '0.85rem' },
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
                        bgcolor: '#1565c0',
                        color: 'white',
                        py: 0.5,
                        px: 1.5,
                        alignSelf: 'flex-start',
                        borderRadius: 0,
                        textTransform: 'uppercase',
                        fontWeight: 'normal',
                        fontSize: { xs: '0.65rem', md: '0.75rem' },
                        '&:hover': {
                          bgcolor: '#0d47a1'
                        }
                      }}
                    >
                      {item.buttonText}
                    </Button>
                  </Grid>
                  
                  {/* Image - Right Side */}
                  <Grid 
                    item 
                    xs={5} 
                    md={5}
                    sx={{
                      display: "flex", 
                      justifyContent: "center", 
                      alignItems: "center",
                      bgcolor: '#1565c0',
                      '&:hover': {
                        bgcolor: '#0d47a1',
                        transition: 'background-color 0.5s ease'
                      }
                    }}
                  >
                    {/* We'll use a Box instead of Avatar for now as a placeholder */}
                    <Box 
                      sx={{ 
                        width: '100%',
                        height: '100%',
                        minHeight: { xs: 120, md: '100%' }
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 