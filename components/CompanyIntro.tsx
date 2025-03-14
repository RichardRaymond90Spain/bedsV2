"use client"

import React from 'react'
import { Box, Typography, Grid, Container } from '@mui/material'

export default function CompanyIntro() {
  return (
    <Box sx={{ py: 6, bgcolor: 'background.paper' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/placeholder.jpg"
              alt="Beds & More Store"
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Welcome to Beds & More
            </Typography>
            <Typography variant="body1" paragraph>
              For over 20 years, we've been helping customers find the perfect sleep solutions. Our extensive range of beds, mattresses, and furniture is carefully selected to provide quality, comfort, and style.
            </Typography>
            <Typography variant="body1" paragraph>
              We understand that everyone's sleep needs are different, which is why our knowledgeable team is always on hand to help you find the perfect products for your home.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Box textAlign="center">
                    <Typography variant="h4" color="primary" fontWeight="bold">
                      20+
                    </Typography>
                    <Typography variant="body2">Years Experience</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box textAlign="center">
                    <Typography variant="h4" color="primary" fontWeight="bold">
                      1000+
                    </Typography>
                    <Typography variant="body2">Products</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box textAlign="center">
                    <Typography variant="h4" color="primary" fontWeight="bold">
                      5000+
                    </Typography>
                    <Typography variant="body2">Happy Customers</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
