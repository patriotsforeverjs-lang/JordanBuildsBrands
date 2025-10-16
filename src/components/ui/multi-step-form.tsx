'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useFormContext } from '@/components/ui/form-context'

type FormStep = 'intro' | 'personal' | 'business' | 'goals' | 'budget' | 'success'

export default function MultiStepForm() {
  const { isFormOpen, currentStep, setCurrentStep } = useFormContext()
  const [formData, setFormData] = useState({
    // Personal info
    name: '',
    email: '',
    phone: '',
    
    // Business info
    companyName: '',
    website: '',
    industry: '',
    
    // Goals
    primaryGoal: '',
    currentChallenges: '',
    
    // Budget
    monthlyBudget: '',
    timeframe: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/jordanbuildsbrands@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        // If submission was successful, show success message
        setCurrentStep('success')
      } else {
        // If there was an error, alert the user
        alert('There was an error submitting your application. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your application. Please try again.')
    }
  }
  
  const nextStep = (step: FormStep) => {
    setCurrentStep(step)
    // Scroll to top of form
    document.getElementById('multi-step-form')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  if (!isFormOpen) return null
  
  return (
    <div className="bg-gray-900 rounded-lg p-8 shadow-xl max-w-2xl mx-auto mt-10 mb-10" id="multi-step-form">
      {currentStep === 'intro' && (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Apply to Work With JordanBuildsBrands</h3>
          <p className="text-gray-300 mb-8">
            Ready to transform your marketing strategy and achieve consistent growth? 
            Complete this short application to see if we're a good fit for your business.
          </p>
          <Button 
            onClick={() => nextStep('personal')}
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 font-medium"
          >
            Start Application
          </Button>
        </div>
      )}
      
      {currentStep === 'personal' && (
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Personal Information</h3>
            <p className="text-gray-300">Tell us a bit about yourself.</p>
          </div>
          
          <div className="space-y-4 mb-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                placeholder="John Smith"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              onClick={() => nextStep('intro')}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Back
            </Button>
            <Button 
              onClick={() => nextStep('business')}
              className="bg-red-500 hover:bg-red-600 text-white"
              disabled={!formData.name || !formData.email || !formData.phone}
            >
              Next Step
            </Button>
          </div>
        </div>
      )}
      
      {currentStep === 'business' && (
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Business Information</h3>
            <p className="text-gray-300">Tell us about your business.</p>
          </div>
          
          <div className="space-y-4 mb-8">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">Company Name *</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                placeholder="Your Company"
              />
            </div>
            
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-1">Website URL</label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                placeholder="https://yourcompany.com"
              />
            </div>
            
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-1">Industry *</label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
              >
                <option value="">Select your industry</option>
                <option value="E-commerce">E-commerce</option>
                <option value="SaaS">SaaS</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
                <option value="Education">Education</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Travel">Travel</option>
                <option value="Food & Beverage">Food & Beverage</option>
                <option value="Fashion">Fashion</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              onClick={() => nextStep('personal')}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Back
            </Button>
            <Button 
              onClick={() => nextStep('goals')}
              className="bg-red-500 hover:bg-red-600 text-white"
              disabled={!formData.companyName || !formData.industry}
            >
              Next Step
            </Button>
          </div>
        </div>
      )}
      
      {currentStep === 'goals' && (
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Your Marketing Goals</h3>
            <p className="text-gray-300">Help us understand what you're looking to achieve.</p>
          </div>
          
          <div className="space-y-4 mb-8">
            <div>
              <label htmlFor="primaryGoal" className="block text-sm font-medium text-gray-300 mb-1">Primary Goal *</label>
              <select
                id="primaryGoal"
                name="primaryGoal"
                value={formData.primaryGoal}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
              >
                <option value="">Select your primary goal</option>
                <option value="Increase sales">Increase sales</option>
                <option value="Generate leads">Generate leads</option>
                <option value="Build brand awareness">Build brand awareness</option>
                <option value="Improve ROI">Improve ROI</option>
                <option value="Launch new product">Launch new product</option>
                <option value="Enter new market">Enter new market</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-300 mb-1">Current Marketing Challenges *</label>
              <textarea
                id="currentChallenges"
                name="currentChallenges"
                value={formData.currentChallenges}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                placeholder="What challenges are you currently facing with your marketing efforts?"
              />
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              onClick={() => nextStep('business')}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Back
            </Button>
            <Button 
              onClick={() => nextStep('budget')}
              className="bg-red-500 hover:bg-red-600 text-white"
              disabled={!formData.primaryGoal || !formData.currentChallenges}
            >
              Next Step
            </Button>
          </div>
        </div>
      )}
      
      {currentStep === 'budget' && (
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Budget & Timeline</h3>
            <p className="text-gray-300">Help us understand your investment level and timeline.</p>
          </div>
          
          <div className="space-y-4 mb-8">
            <div>
              <label htmlFor="monthlyBudget" className="block text-sm font-medium text-gray-300 mb-1">Monthly Marketing Budget *</label>
              <select
                id="monthlyBudget"
                name="monthlyBudget"
                value={formData.monthlyBudget}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
              >
                <option value="">Select your budget range</option>
                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                <option value="$50,000+">$50,000+</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="timeframe" className="block text-sm font-medium text-gray-300 mb-1">When are you looking to start? *</label>
              <select
                id="timeframe"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
              >
                <option value="">Select your timeframe</option>
                <option value="Immediately">Immediately</option>
                <option value="Within 1 month">Within 1 month</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              onClick={() => nextStep('goals')}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Back
            </Button>
            <Button 
              onClick={handleSubmit}
              className="bg-red-500 hover:bg-red-600 text-white"
              disabled={!formData.monthlyBudget || !formData.timeframe}
            >
              Submit Application
            </Button>
          </div>
        </div>
      )}
      
      {currentStep === 'success' && (
        <div className="text-center py-8">
          <div className="bg-green-500 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-2xl font-bold mb-4">Application Submitted!</h4>
          <p className="text-gray-300 mb-6">
            Thank you for your interest in working with JordanBuildsBrands. Our team will review your application and contact you within 1-2 business days to discuss next steps.
          </p>
          <Button 
            onClick={() => nextStep('intro')}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            Back to Home
          </Button>
        </div>
      )}
    </div>
  )
}
