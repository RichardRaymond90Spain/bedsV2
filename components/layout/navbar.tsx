"use client"

import React, { useState } from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Link from 'next/link'

const navItems = [
  { title: 'HOME', path: '/' },
  { title: 'BEDS', path: '/beds' },
  { title: 'MATTRESSES', path: '/mattresses' },
  { title: 'HEADBOARDS', path: '/headboards' },
  { title: 'SOFT FURNISHINGS', path: '/soft-furnishings' },
  { title: 'FURNITURE & DECORATION', path: '/furniture-decoration' },
  { title: 'STORES', path: '/stores' }
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 500 }}>
        BEDS & MORE
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemText 
              primary={item.title} 
              sx={{ 
                textAlign: 'center',
                '& .MuiTypography-root': {
                  fontSize: '0.9rem',
                  fontWeight: 500
                }
              }}
              onClick={() => {
                // Handle navigation here
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid #eaeaea' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              mr: 2,
              fontWeight: 500,
              color: '#666',
              textDecoration: 'none',
              flexShrink: 0
            }}
          >
            BEDS & MORE
          </Typography>

          {/* Mobile menu button */}
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              {/* Desktop navigation */}
              <Box sx={{ 
                display: 'flex', 
                flexGrow: 1, 
                justifyContent: 'center',
                '& > *': {
                  mx: 0.5  // Reduced spacing between items
                }
              }}>
                {navItems.map((item) => (
                  <Button
                    key={item.title}
                    component={Link}
                    href={item.path}
                    sx={{
                      color: '#333',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      textTransform: 'uppercase',
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: '#1565c0'
                      }
                    }}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>

              {/* Right side buttons */}
              <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <Button
                  startIcon={<LocationOnIcon />}
                  sx={{
                    color: '#333',
                    fontSize: '0.75rem',
                    mr: 1,
                    whiteSpace: 'nowrap'
                  }}
                >
                  FIND US
                </Button>
                <Button
                  variant="text"
                  sx={{
                    color: '#333',
                    fontSize: '0.75rem',
                    whiteSpace: 'nowrap'
                  }}
                >
                  CONTACT
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}
