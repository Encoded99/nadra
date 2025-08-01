'use client'

import React, {
  useContext,
  createContext,
  ReactNode,
  useState,
} from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { apiUrl } from './axios'

// Define the shape of the rates object
type RatesType = {
  [currencyCode: string]: number
}

// Define the shape of the context
type AppContextType = {
  rates: RatesType
  isLoading: boolean
  isError: boolean,
   fetchExchange:()=>void
}

// Default context value (optional but useful for safety)
const defaultContext: AppContextType = {
  rates: {},
  isLoading: false,
  isError: false,
  fetchExchange:() => {}
}

// Create the context
const AppContext = createContext<AppContextType>(defaultContext)

// Define props for the provider
type AppProviderProps = {
  children: ReactNode
}

// Provider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {


  const [isEnabled,setIsEnabled]=useState<boolean>(false)


  // Async function to fetch rates
  const checkConversion = async (): Promise<RatesType> => {
    const url = `${apiUrl}/users/get-exchange`
    const response = await axios.get(url)
   setIsEnabled(true)
    return response.data?.rates || {}  
  }

  // Use React Query
  const {
    data: rates = {},
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<RatesType>({
    queryKey: ['exchange'],
    queryFn: checkConversion,
    staleTime: 1000 * 60 * 60, // 1 hour cache

  })



  

const fetchExchange=()=>{
  refetch()
}
  return (
    <AppContext.Provider value={{ rates, isLoading, isError,fetchExchange }}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook for consuming the context
export const useGlobal = (): AppContextType => {
  return useContext(AppContext)
}
