"use client"

import React, { useState, useEffect } from 'react'
import SkeletonLoader from './SkeletonLoader'

interface LoadingStateWrapperProps {
  children: React.ReactNode
  type?: 'navbar' | 'hero' | 'categories' | 'content' | 'full'
}

export default function LoadingStateWrapper({ 
  children, 
  type = 'full' 
}: LoadingStateWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Adjust this time as needed

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <SkeletonLoader type={type} />
  }

  return <>{children}</>
} 