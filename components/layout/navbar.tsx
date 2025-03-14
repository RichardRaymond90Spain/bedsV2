"use client"

import React, { useState } from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Box,
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Link from 'next/link'

const menuItems = [
  { text: 'HOME', href: '/' },
  { text: 'BEDS', href: '/beds' },
  { text: 'MATTRESSES', href: '/mattresses' },
  { text: 'HEADBOARDS', href: '/headboards' },
  { text: 'SOFT FURNISHINGS', href: '/soft-furnishings' },
  { text: 'FURNITURE & DECORATION', href: '/furniture-decoration' },
  { text: 'STORES', href: '/stores' }
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setDrawerOpen(open)
  }

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={0} 
      sx={{ 
        bgcolor: 'white',
        borderBottom: '1px solid #eaeaea',
        top: { xs: 0, sm: '32px' } // Adjust based on InfoBar height
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* Logo */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', mr: 4 }}>
            <Link href="/" passHref style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  fontWeight: 'light',
                  color: '#666',
                  letterSpacing: 1
                }}
              >
                BEDS & MORE
              </Typography>
            </Link>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  href={item.href}
                  sx={{ 
                    mx: 0.5, 
                    color: 'text.primary',
                    fontSize: '0.85rem',
                    fontWeight: 'normal',
                    '&:hover': {
                      bgcolor: 'transparent',
                      color: 'primary.main',
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}

          {/* Right Side Items */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Button
              startIcon={<LocationOnIcon />}
              sx={{ 
                mr: 2,
                display: { xs: 'none', md: 'flex' }
              }}
            >
              Find Us
            </Button>
            
            <Button
              sx={{ 
                display: { xs: 'none', md: 'flex' }
              }}
            >
              Contact
            </Button>
            
            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem 
                button 
                key={item.text} 
                component={Link}
                href={item.href}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <ListItem button component={Link} href="/find-us">
              <ListItemText primary="Find Us" />
            </ListItem>
            <ListItem button component={Link} href="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
