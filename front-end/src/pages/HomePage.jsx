import React from 'react'
import { useState, useEffect } from 'react'

//const RAWG_API_GENRES = https://api.rawg.io/api/${genres}?key=5ee43335c6ed4a4c96d27500c2f1a0ec&
const ENDPOINT_API = 'https://api.rawg.io/api/games?key=5ee43335c6ed4a4c96d27500c2f1a0ec&json=true'

export function HomePage() {
  const [slug, setSlug] = useState()

  useEffect(() => {
    fetch(ENDPOINT_API)
      .then(res => res.json())
      .then(results => setSlug (results.slug))
  }, [])

  return (
    <main>
      <h1>Bienvenu a  GTA 6 Home</h1>
         
      { slug && <p>{slug}</p>}
    </main>
  )
}

export default HomePage
