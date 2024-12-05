import React from "react"
import { useEffect, useState } from "react" 

const FollowMouse = () => { 
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
}
//pointermove event listener

useEffect(() => {
    const handlemove = (event => {
        const { clientX, clientY } = event
        console.log(clientX, clientY)   //actualizar la posición del mouse


    })
    window.addEventListener('pointermove, handlemove')
},[enabled])

    export default FollowMouse