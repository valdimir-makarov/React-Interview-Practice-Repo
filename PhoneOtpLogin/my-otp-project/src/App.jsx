import { useState } from 'react'

import './App.css'
import PhoneOtp from './ component/PhoneOtp'

function App() {
  const [count, setCount] = useState(0)

  return (<>

<PhoneOtp></PhoneOtp>

  </>
   
  )
}

export default App
