import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { drawTree } from './utils'

function App() {
  const [animate, setAnimate] = useState(false)

  const canvasRef = useRef()

  useEffect(() => {
    canvasRef.current.width = window.innerWidth
    canvasRef.current.height = window.innerHeight

    const ctx = canvasRef.current.getContext('2d');
    
    drawTree(ctx,window.innerWidth,window.innerHeight)    

  }, [])

  return (
    <div>
      <canvas ref={canvasRef}>

      </canvas>
    </div>

  )
}

export default App
