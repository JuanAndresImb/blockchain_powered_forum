import React from "react"
import { useEffect, useState } from "react"
import { Spoiler } from "spoiled"

const Mouse = () => { 
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

//pointermove event listener

useEffect(() => {
    console.log('effect', { enabled })

    const handleMove = (event) => {
        const { clientX, clientY } = event
        setPosition({ x: clientX, y: clientY }) //actualizar la posición del mouse
        console.log(clientX, clientY)
    }
    if (enabled) {
        window.addEventListener('pointermove', handleMove)
    }

    return () => {
        window.removeEventListener('pointermove', handleMove)
    }
}, [enabled])
    
    useEffect(() => {
        document.body.classList.toggle('no-cursor', enabled)

        return () => {
            document.body.classList.remove('no-cursor')
        }
    }, [enabled])

return (
    <>
    <div style={{
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid #fff',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -25,
      top: -25,
      width: 50,
      height: 50,
      transform: `translate(${position.x}px, ${position.y}px)`
    }}
    />
        <Spoiler><button onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Desactivar' : 'Activar'} seguir puntero
    </button>
            
</Spoiler>
    
  </>
)
}
function Follow () {
    return (
        <main>
            < Mouse />
        </main>
    )
}
export default Follow
    
