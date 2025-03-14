"use client"

import React from 'react'
import { Box, Container, Skeleton, Grid } from '@mui/material'

interface SkeletonLoaderProps {
  type?: 'navbar' | 'hero' | 'categories' | 'content' | 'full'
}

export default function SkeletonLoader({ type = 'full' }: SkeletonLoaderProps) {
  const renderNavbarSkeleton = () => (
    <Box sx={{ width: '100%', height: 70, mb: 2 }}>
      <Skeleton variant="rectangular" width="100%" height={70} />
    </Box>
  )

  const renderHeroSkeleton = () => (
    <Box sx={{ width: '100%', height: 400, mb: 4 }}>
      <Skeleton variant="rectangular" width="100%" height={400} animation="wave" />
    </Box>
  )

  const renderCategoriesSkeleton = () => (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Skeleton variant="text" width={200} height={40} sx={{ mx: 'auto', mb: 3 }} />
      <Grid container spacing={2}>
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Skeleton variant="rectangular" width="100%" height={200} />
            <Skeleton variant="text" width="80%" sx={{ mt: 1 }} />
            <Skeleton variant="text" width="60%" />
          </Grid>
        ))}
      </Grid>
    </Box>
  )

  const renderContentSkeleton = () => (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Skeleton variant="rectangular" width="100%" height={300} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton variant="text" width="80%" height={40} />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="95%" />
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              {[1, 2, 3].map((item) => (
                <Grid item xs={4} key={item}>
                  <Skeleton variant="rectangular" width="100%" height={60} />
                  <Skeleton variant="text" width="100%" sx={{ mt: 1 }} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )

  const renderFullPageSkeleton = () => (
    <>
      {renderNavbarSkeleton()}
      {renderHeroSkeleton()}
      {renderCategoriesSkeleton()}
      {renderContentSkeleton()}
    </>
  )

  return (
    <Container>
      {type === 'navbar' && renderNavbarSkeleton()}
      {type === 'hero' && renderHeroSkeleton()}
      {type === 'categories' && renderCategoriesSkeleton()}
      {type === 'content' && renderContentSkeleton()}
      {type === 'full' && renderFullPageSkeleton()}
    </Container>
  )
} 