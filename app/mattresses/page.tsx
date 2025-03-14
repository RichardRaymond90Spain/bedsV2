"use client"

import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Navbar from '../../components/layout/navbar'
import HeroSection from '../../components/sections/hero'
import Footer from '../../components/Footer'
import LoadingStateWrapper from '../../components/LoadingStateWrapper'

export default function MattressesPage() {
  return (
    <LoadingStateWrapper type="content">
      <Container>
        <Navbar />
        <HeroSection 
          title="Premium Mattresses" 
          subtitle="Find the perfect mattress for a great night's sleep."
          ctaText="Shop Now"
          ctaLink="/mattresses"
          backgroundImage="/placeholder.jpg"
        />
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Our Mattress Collection
          </Typography>
          <Typography paragraph>
            Browse our selection of high-quality mattresses designed for ultimate comfort and support.
          </Typography>
          {/* Add your mattress products here */}
        </Box>
        <Footer />
      </Container>
    </LoadingStateWrapper>
  )
} 