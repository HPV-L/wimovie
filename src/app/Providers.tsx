"use client"
import React from 'react'
import { ThemeProvider } from "next-themes";
import {useTheme} from "next-themes"
type Props = {
    children: any
    
}

const Providers = ({children}:Props) => {
    
  return (
<>
<ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:text-gray-200 dark:bg-gray-700 text-black transition-colors duration-300 min-h-screen select-none z-10">
        {children}
      </div>
    </ThemeProvider>
</>
  )
}

export default Providers