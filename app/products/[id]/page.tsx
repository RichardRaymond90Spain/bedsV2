"use client"

import React from 'react'
import LoadingStateWrapper from '@/components/LoadingStateWrapper'
import ProductDetails from '@/components/ProductDetails'

export default function ProductPage({ params }) {
  return (
    <LoadingStateWrapper type="content">
      <ProductDetails id={params.id} />
    </LoadingStateWrapper>
  )
} 