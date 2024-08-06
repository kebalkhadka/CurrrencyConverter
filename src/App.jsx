import { useState } from 'react'
import CurrencyConverter from './components/CurrencyConverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
     <CurrencyConverter/>
     </div>
    </>
  )
}

export default App
