'use client'

import { createContext, useState, useContext, ReactNode } from 'react'

type FormStep = 'intro' | 'personal' | 'business' | 'goals' | 'budget' | 'success'

type FormContextType = {
  isFormOpen: boolean;
  setIsFormOpen: (open: boolean) => void;
  currentStep: FormStep;
  setCurrentStep: (step: FormStep) => void;
  openForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState<FormStep>('intro')
  
  const openForm = () => {
    setIsFormOpen(true)
    setCurrentStep('intro')
    // Scroll to form if it exists
    setTimeout(() => {
      document.getElementById('multi-step-form')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
  
  return (
    <FormContext.Provider value={{
      isFormOpen,
      setIsFormOpen,
      currentStep,
      setCurrentStep,
      openForm
    }}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}
