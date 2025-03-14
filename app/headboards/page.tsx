"use client"

import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Navbar from '../../components/layout/navbar'
import HeroSection from '../../components/sections/hero'
import Footer from '../../components/Footer'
import LoadingStateWrapper from '../../components/LoadingStateWrapper'

export default function HeadboardsPage() {
  return (
    <LoadingStateWrapper type="content">
      <Container>
        <Navbar />
        <HeroSection 
          title="Stylish Headboards" 
          subtitle="Complete your bed with a beautiful headboard."
          ctaText="Shop Now"
          ctaLink="/headboards"
          backgroundImage="/placeholder.jpg"
        />
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Our Headboard Collection
          </Typography>
          <Typography paragraph>
            Browse our selection of elegant headboards to enhance your bedroom.
          </Typography>
          {/* Add your headboard products here */}
        </Box>
        <Footer />
      </Container>
    </LoadingStateWrapper>
  )
} 