

import React, { useState } from 'react'

import Popup from "./Popup";
import './App.css'

export default function App() {
  const [pop, setPop] = useState(false)

  const togglePop = () => {
    // alert('hello')
    setPop(!pop)
  }

  return (
    <div>
      <div className='btn-pack'>
        <button className='btn btn-new' onClick={togglePop}>Save Segment</button>
      </div>
      {pop ? <Popup toggle={togglePop} /> : null}
    </div>
  )
}