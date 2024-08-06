import { useState } from 'react'
import CurrencyConverter from './components/CurrencyConverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
     <CurrencyConverter/>
     {/* 91e7a604ce3467e1e387bd5a */}
     </div>
    </>
  )
}

export default App
