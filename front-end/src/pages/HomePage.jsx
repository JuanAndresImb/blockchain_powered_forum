import React from 'react'
import { useState, useEffect } from 'react'

//const RAWG_API_GENRES = https://api.rawg.io/api/${genres}?key=5ee43335c6ed4a4c96d27500c2f1a0ec&
const ENDPOINT_API = `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}`;

export function HomePage() {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch(ENDPOINT_API)
      .then(res => res.json())
      .then((data) => {
        if (data.results) {
          setGames(data.results)
        }
      })
    .catch((error) => console.log('Error fetching data :  '))
  }, [])

  return (
    <main>
      <h1>Bienvenido a GTA 6 Home</h1>

      {/* Renderizamos la lista de juegos */}
      {games.length > 0 ? (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              <h2>{game.name}</h2>
              <p>Slug: {game.slug}</p>
              <p>Lanzamiento: {game.released}</p>
              <p>Reputacion : {game.rating_top}</p>
              <section id='image'>
                {game.background_image && (
                <img src={game.background_image} alt={game.name}  />
              )}
              </section>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando juegos...</p>
      )}
    </main>
  );
}

export default HomePage
