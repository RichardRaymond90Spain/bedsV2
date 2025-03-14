"use client"

import React from 'react'
import { Box, Typography, Container } from '@mui/material'

export default function InfoBar() {
  return (
    <Box 
      sx={{ 
        bgcolor: '#333', 
        color: 'white', 
        py: 1,
        position: 'sticky',
        top: 0,
        zIndex: 1100
      }}
    >
      <Container>
        <Typography 
          variant="body2" 
          align="center"
          sx={{ fontWeight: 'light' }}
        >
          Established Since 2008
        </Typography>
      </Container>
    </Box>
  )
} 