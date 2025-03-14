"use client"

import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Navbar from '../../components/layout/navbar'
import HeroSection from '../../components/sections/hero'
import Footer from '../../components/Footer'
import LoadingStateWrapper from '../../components/LoadingStateWrapper'

export default function FurniturePackagesPage() {
  return (
    <LoadingStateWrapper type="content">
      <Container>
        <Navbar />
        <HeroSection 
          title="Furniture Packages" 
          subtitle="Complete room solutions at great prices."
          ctaText="Explore"
          ctaLink="/furniture-packages"
          backgroundImage="/placeholder.jpg"
        />
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Our Furniture Packages
          </Typography>
          <Typography paragraph>
            Save time and money with our carefully curated furniture packages.
          </Typography>
          {/* Add your furniture packages here */}
        </Box>
        <Footer />
      </Container>
    </LoadingStateWrapper>
  )
} 