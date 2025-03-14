"use client"

import React from 'react'
import { Box, Typography, Grid, Container, Paper } from '@mui/material'

const guaranteeItems = [
  {
    title: "Price Promise",
    description: "Find the same mattress locally and at a cheaper price - We will beat the price!"
  },
  {
    title: "No Quibble Exchange!",
    description: "Exchange a new mattress up to 14 days after purchase."
  },
  {
    title: "Quality Assured!",
    description: "All of our new mattresses carry a MINIMUM 2 year warranty."
  }
]

export default function SpecialOffers() {
  return (
    <Box 
      sx={{ 
        py: { xs: 4, md: 8 },
        background: 'linear-gradient(to bottom, #001428 0%, #002952 100%)',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            mb: { xs: 2.5, md: 5 },
            fontWeight: 300,
            fontSize: { xs: '1.5rem', md: '3rem' },
            '&::after': {
              content: '""',
              display: 'block',
              width: { xs: '40px', md: '80px' },
              height: { xs: '2px', md: '3px' },
              bgcolor: 'white',
              mx: 'auto',
              mt: { xs: 1, md: 2 }
            }
          }}
        >
          Special Offers & Deals
        </Typography>

        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 2, md: 5 },
            bgcolor: '#001428', 
            color: 'white',
            maxWidth: 900,
            mx: 'auto',
            mb: { xs: 2.5, md: 5 },
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              mb: { xs: 1.5, md: 3 },
              fontWeight: 400,
              fontSize: { xs: '1.25rem', md: '2.125rem' },
              textAlign: 'center'
            }}
          >
            Satisfaction Guarantee
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: { xs: 2, md: 4 },
              textAlign: 'center',
              fontSize: { xs: '0.875rem', md: '1rem' },
              color: 'rgba(255,255,255,0.8)'
            }}
          >
            Buy your new mattress with confidence from Beds & More and take advantage of our unique satisfaction guarantee...
          </Typography>

          <Grid container spacing={{ xs: 1.5, md: 3 }}>
            {guaranteeItems.map((item, index) => (
              <Grid item xs={4} key={index}>
                <Box 
                  sx={{ 
                    p: { xs: 1.5, md: 3 },
                    height: '100%',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    sx={{ 
                      mb: { xs: 1, md: 2 },
                      fontWeight: 500,
                      fontSize: { xs: '0.9rem', md: '1.25rem' },
                      color: 'white'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.8)',
                      lineHeight: 1.6,
                      fontSize: { xs: '0.7rem', md: '0.875rem' },
                      display: { xs: '-webkit-box', md: 'block' },
                      WebkitLineClamp: { xs: 3, md: 'none' },
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
} 
 
 
