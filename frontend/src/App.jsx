import React, { useEffect, useState } from 'react'
import Pages from './Pages/Pages'
import Loader from './Components/Loader/Loader'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      {
        isLoading ? <Loader /> : <Pages />
      }
    </div>
  )
}

export default App
