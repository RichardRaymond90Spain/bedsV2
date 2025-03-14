"use client"

import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Navbar from '../../components/layout/navbar'
import HeroSection from '../../components/sections/hero'
import Footer from '../../components/Footer'
import LoadingStateWrapper from '../../components/LoadingStateWrapper'

export default function BedsPage() {
  return (
    <LoadingStateWrapper type="content">
      <Container>
        <Navbar />
        <HeroSection 
          title="Quality Beds" 
          subtitle="Find the perfect bed frame for your bedroom."
          ctaText="Shop Now"
          ctaLink="/beds"
          backgroundImage="/placeholder.jpg"
        />
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Our Bed Collection
          </Typography>
          <Typography paragraph>
            Browse our selection of stylish and durable bed frames.
          </Typography>
          {/* Add your bed products here */}
        </Box>
        <Footer />
      </Container>
    </LoadingStateWrapper>
  )
} 