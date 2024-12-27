import React, { useEffect } from 'react'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

const App = () => {
  const [themeMode ,  setThemeMode] = React.useState('light')

  const lightTheme = () => setThemeMode('light')

  const darkTheme = () => setThemeMode('dark')

  //actual change in theme 
  useEffect(()=>{
      document.querySelector('html').classList.remove('dark' , 'light')
      document.querySelector('html').classList.add(themeMode)
  } , [themeMode])

  return (
    <ThemeProvider value={{themeMode , lightTheme , darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* Theme Button Component */}
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">{/* Card Component */}
        <Card/>
        </div>

      </div>
    </div>
    </ThemeProvider>

  );
}

export default App