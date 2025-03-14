"use client"

import React from 'react'
import { Box, Typography, Grid, Paper, Button } from '@mui/material'
import Link from 'next/link'

const categories = [
  {
    title: 'Furniture Packages',
    description: 'Complete room solutions at great prices',
    image: '/placeholder.jpg',
    link: '/furniture-packages'
  },
  {
    title: 'Special Offers',
    description: 'Limited time deals on premium products',
    image: '/placeholder.jpg',
    link: '/offers'
  }
]

export default function SecondaryCategories() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        More Ways to Shop
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {categories.map((category) => (
          <Grid item xs={12} md={6} key={category.title}>
            <Paper
              sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${category.image})`,
                height: 200,
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  backgroundColor: 'rgba(0,0,0,.3)',
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  p: 4,
                }}
              >
                <Typography component="h3" variant="h5" gutterBottom>
                  {category.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {category.description}
                </Typography>
                <Button 
                  component={Link} 
                  href={category.link} 
                  variant="contained"
                >
                  Explore
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
