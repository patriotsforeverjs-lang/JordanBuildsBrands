'use client'

import { Button } from '@/components/ui/button'
import { useFormContext } from '@/components/ui/form-context'

export default function CTASection() {
  const { openForm } = useFormContext()
  
  return (
    <section className="bg-gray-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Marketing Strategy?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Join the brands that are seeing consistent growth and higher ROI with our data-driven approach.
        </p>
        <Button 
          onClick={openForm}
          className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 text-lg font-medium"
        >
          Apply Today
        </Button>
      </div>
    </section>
  )
}
