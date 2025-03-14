"use client"

import React from 'react'
import { Container, Typography, Box, Grid, TextField, Button, Paper } from '@mui/material'
import Navbar from '../../components/layout/navbar'
import HeroSection from '../../components/sections/hero'
import Footer from '../../components/Footer'
import LoadingStateWrapper from '../../components/LoadingStateWrapper'

export default function ContactPage() {
  return (
    <LoadingStateWrapper type="content">
      <Container>
        <Navbar />
        <HeroSection 
          title="Contact Us" 
          subtitle="We're here to help with any questions you may have."
          ctaText="Get in Touch"
          ctaLink="#contact-form"
          backgroundImage="/placeholder.jpg"
        />
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Get in Touch
          </Typography>
          
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Typography paragraph>
                123 Sleep Street, Bedfordshire, UK
              </Typography>
              <Typography paragraph>
                Phone: 01234 567890
              </Typography>
              <Typography paragraph>
                Email: info@bedsandmore.com
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                Opening Hours
              </Typography>
              <Typography paragraph>
                Monday - Friday: 9am - 6pm
              </Typography>
              <Typography paragraph>
                Saturday: 10am - 5pm
              </Typography>
              <Typography paragraph>
                Sunday: Closed
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3 }} id="contact-form">
                <Typography variant="h6" gutterBottom>
                  Send us a Message
                </Typography>
                <form>
                  <TextField
                    fullWidth
                    label="Name"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Phone"
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ mt: 2 }}
                    fullWidth
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Container>
    </LoadingStateWrapper>
  )
} 