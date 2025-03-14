"use client"

import React from 'react'
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material'
import Link from 'next/link'

const categories = [
  {
    title: "Mattresses",
    description: "Find the perfect mattress for your sleep style",
    link: "/categories/mattresses",
    img: "blue"
  },
  {
    title: "Beds",
    description: "Stylish bed frames for every bedroom",
    link: "/categories/beds",
    img: "blue"
  },
  {
    title: "Pillows",
    description: "Supportive pillows for a restful night",
    link: "/categories/pillows",
    img: "blue"
  },
  {
    title: "Bedding",
    description: "Luxury sheets, duvets and more",
    link: "/categories/bedding",
    img: "blue"
  }
]

export default function FeaturedCategories() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        sx={{ 
          mb: 4, 
          fontWeight: 500,
          color: '#333',
          textAlign: 'center'
        }}
      >
        SHOP BY CATEGORY
      </Typography>
      
      <Grid container spacing={3}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 0,
                boxShadow: 'none',
                border: '1px solid #eaeaea',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }
              }}
            >
              {/* Blue placeholder for image */}
              <Box
                sx={{
                  height: 200,
                  bgcolor: '#1565c0', // Blue placeholder
                  '&:hover': {
                    bgcolor: '#0d47a1', // Darker blue on hover
                    transition: 'background-color 0.5s ease'
                  }
                }}
              />
              
              <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                <Typography 
                  gutterBottom 
                  variant="h6" 
                  component="h3"
                  sx={{ 
                    fontWeight: 500,
                    fontSize: '1.1rem'
                  }}
                >
                  {category.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {category.description}
                </Typography>
                <Button
                  component={Link}
                  href={category.link}
                  variant="outlined"
                  size="small"
                  sx={{ 
                    borderColor: '#1565c0',
                    color: '#1565c0',
                    borderRadius: 0,
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                    '&:hover': {
                      borderColor: '#0d47a1',
                      color: '#0d47a1',
                      bgcolor: 'transparent'
                    }
                  }}
                >
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
