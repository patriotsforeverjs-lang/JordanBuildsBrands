'use client'

import { useState, useEffect } from 'react'
import MultiStepForm from '@/components/ui/multi-step-form'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ClientShowcase from '@/components/sections/ClientShowcase'
import ServicesSection from '@/components/sections/ServicesSection'
import PerformanceMetrics from '@/components/sections/PerformanceMetrics'
import TestimonialSection from '@/components/sections/TestimonialSection'
import CTASection from '@/components/sections/CTASection'
import ScrollToTop from '@/components/ui/scroll-to-top'
import { FormProvider } from '@/components/ui/form-context'

export default function Home() {
  return (
    <FormProvider>
      <main className="min-h-screen bg-gray-900 text-white">
        <Header />
        <HeroSection />
        <ClientShowcase />
        <ServicesSection />
        <PerformanceMetrics />
        <TestimonialSection />
        <CTASection />
        <MultiStepForm />
        <Footer />
        <ScrollToTop />
      </main>
    </FormProvider>
  )
}
