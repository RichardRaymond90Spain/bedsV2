"use client"

import React from 'react'
import { Box, Typography, Grid, Button, Container, Avatar } from '@mui/material'
import Link from 'next/link'

const collectionItems = [
  {
    title: "Organic Collection",
    description: "Experience the natural comfort of our organic collection. Made with sustainable materials that are better for you and the environment.",
    buttonText: "SHOP ORGANIC",
    link: "/collections/organic",
    img: "blue"
  },
  {
    title: "Luxury Collection",
    description: "Indulge in the ultimate sleep experience with our luxury collection. Premium materials and craftsmanship for those who demand the very best.",
    buttonText: "SHOP LUXURY",
    link: "/collections/luxury",
    img: "blue"
  },
  {
    title: "Essential Collection",
    description: "Quality sleep doesn't have to break the bank. Our essential collection offers excellent value without compromising on comfort or durability.",
    buttonText: "SHOP ESSENTIALS",
    link: "/collections/essential",
    img: "blue"
  }
]

export default function FeaturedCollection() {
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
                FEATURED COLLECTIONS
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#555',
                  lineHeight: 1.6,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Explore our carefully curated collections designed to suit different preferences and needs. From organic to luxury, we have the perfect sleep solution for you.
              </Typography>
            </Box>
          </Grid>
          
          {/* Right side - Collection Cards */}
          <Grid item xs={12} md={8}>
            {collectionItems.map((item, index) => (
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
                  {/* Image - Left Side */}
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
                  
                  {/* Text Content - Right Side */}
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
                </Grid>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 