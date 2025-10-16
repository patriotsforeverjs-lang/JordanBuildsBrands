'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useFormContext } from '@/components/ui/form-context'

export default function HeroSection() {
  const { openForm } = useFormContext()
  
  return (
    <section className="bg-gray-900 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Data-Driven Marketing That <span className="text-red-500">Delivers Results</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We help brands scale profitably with proven marketing strategies that focus on ROI and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={openForm}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg"
              >
                Apply Now
              </Button>
              <Link href="#services">
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Campaign Performance</h3>
                  <p className="text-gray-400">Last 30 days</p>
                </div>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  +24.8%
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">ROAS</span>
                    <span className="text-white font-medium">3.7x</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">CTR</span>
                    <span className="text-white font-medium">4.2%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Conversion Rate</span>
                    <span className="text-white font-medium">8.9%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
