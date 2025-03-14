"use client"

import React from 'react'
import { Box, Typography, Grid, Button, Container } from '@mui/material'
import Link from 'next/link'

const carouselItems = [
  {
    title: "MATTRESSES",
    link: "/mattresses"
  },
  {
    title: "BEDS",
    link: "/beds"
  },
  {
    title: "HEADBOARDS",
    link: "/headboards"
  }
]

export default function HeroCarousel() {
  return (
    <Box sx={{ py: 4, bgcolor: '#f5f5f5' }}>
      <Container>
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 500, 
              color: '#333',
              mb: 1
            }}
          >
            AT BEDS & MORE
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 500, 
              color: '#333',
              mb: 1
            }}
          >
            WE BELIEVE SLEEP
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 500, 
              color: '#333',
              mb: 4
            }}
          >
            IS THE ULTIMATE LUXURY
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '600px',
              mb: 2,
              color: '#555'
            }}
          >
            At Beds & More, we take our responsibility for helping you to sleep well and wake up feeling rejuvenated very seriously. We have a passion for working with nature's very best comfort materials to inspire you to sleep sustainably.
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '600px',
              color: '#555'
            }}
          >
            We responsibly source the finest materials to handcraft beautifully comfortable beds and supremely comfortable mattresses that help enhance your health and wellbeing.
          </Typography>
        </Box>
        
        <Grid container spacing={3}>
          {carouselItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box 
                sx={{ 
                  position: 'relative',
                  height: 300,
                  bgcolor: '#1976d2', // Blue background as placeholder
                  overflow: 'hidden',
                  '&:hover': {
                    bgcolor: '#1565c0', // Darker blue on hover
                    transition: 'background-color 0.5s ease'
                  }
                }}
              >
                <Box 
                  sx={{ 
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                      VIEW OUR
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Button 
                    component={Link}
                    href={item.link}
                    variant="outlined"
                    sx={{ 
                      color: 'white', 
                      borderColor: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    View
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
} 