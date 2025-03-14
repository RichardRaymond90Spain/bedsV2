"use client"

import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Navbar from '../../components/layout/navbar'
import HeroSection from '../../components/sections/hero'
import Footer from '../../components/Footer'
import LoadingStateWrapper from '../../components/LoadingStateWrapper'

export default function OffersPage() {
  return (
    <LoadingStateWrapper type="content">
      <Container>
        <Navbar />
        <HeroSection 
          title="Special Offers" 
          subtitle="Limited time deals on premium products."
          ctaText="Shop Now"
          ctaLink="/offers"
          backgroundImage="/placeholder.jpg"
        />
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Current Offers
          </Typography>
          <Typography paragraph>
            Take advantage of our limited-time special offers and promotions.
          </Typography>
          {/* Add your offers here */}
        </Box>
        <Footer />
      </Container>
    </LoadingStateWrapper>
  )
} 