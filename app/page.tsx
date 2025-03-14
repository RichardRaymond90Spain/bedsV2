"use client"

import React from 'react'
import { Container } from '@mui/material'
import InfoBar from '../components/layout/InfoBar'
import Navbar from '../components/layout/navbar'
import HeroCarousel from '../components/sections/HeroCarousel'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import FeaturedCollection from '../components/sections/FeaturedCollection'
import SpecialOffers from '../components/sections/SpecialOffers'
import FeaturedCategories from '../components/FeaturedCategories'
import SecondaryCategories from '../components/SecondaryCategories'
import CompanyIntro from '../components/CompanyIntro'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <InfoBar />
      <Navbar />
      <main>
        <HeroCarousel />
        <FeaturedProducts />
        <FeaturedCollection />
        <SpecialOffers />
        <Container>
          <FeaturedCategories />
          <CompanyIntro />
          <SecondaryCategories />
        </Container>
      </main>
      <Footer />
    </>
  )
}
