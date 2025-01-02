import { useState } from 'react'

import './App.css'
import PhotoUpload from './components/PhotoUpload'
import CardView from './components/CardView'

function App() {
  const [photo, setPhoto] = useState(null)
  const [text, setText] = useState('')

  return (
    <>
      <PhotoUpload setPhoto={setPhoto}/>
      <CardView text={text} setText={setText} photo={photo} />
    </>
  )
}

export default App
