"use client"

import React from 'react'
import { Box, Container, Grid, Typography, Link as MuiLink, IconButton } from '@mui/material'
import Link from 'next/link'
import { Facebook as FacebookIcon } from '@mui/icons-material'
import { Instagram as InstagramIcon } from '@mui/icons-material'
import { Twitter as TwitterIcon } from '@mui/icons-material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Beds & More
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Quality sleep solutions for every home. Visit our showroom or shop online for the best selection of beds, mattresses, and furniture.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="twitter">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <MuiLink component={Link} href="/mattresses" color="inherit" display="block" sx={{ mb: 1 }}>
                Mattresses
              </MuiLink>
              <MuiLink component={Link} href="/beds" color="inherit" display="block" sx={{ mb: 1 }}>
                Beds
              </MuiLink>
              <MuiLink component={Link} href="/headboards" color="inherit" display="block" sx={{ mb: 1 }}>
                Headboards
              </MuiLink>
              <MuiLink component={Link} href="/furniture-packages" color="inherit" display="block" sx={{ mb: 1 }}>
                Furniture Packages
              </MuiLink>
              <MuiLink component={Link} href="/offers" color="inherit" display="block" sx={{ mb: 1 }}>
                Special Offers
              </MuiLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              123 Sleep Street, Bedfordshire, UK
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Phone: 01234 567890
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Email: info@bedsandmore.com
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' Beds & More. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
