import { useState } from 'react'

import './App.css'
import PhotoUpload from './components/PhotoUpload'

function App() {
  const [photo, setPhoto] = useState(null)

  return (
    <>
      <PhotoUpload/>
    </>
  )
}

export default App
