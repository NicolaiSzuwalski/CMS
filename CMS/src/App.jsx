
import { useQuery } from '@tanstack/react-query'
import './App.css'
import {request, gql} from 'graphql-request';
import { allPlanets } from './queries/allPlanets';
import { allFilms } from './queries/allFilms';
import { Modal } from './components/modal';
import { useState } from 'react';


function App() {

  const [selectedFilm, setSelectedFilm] = useState(null);

  const openModal = (films) => {
    setSelectedFilm(films);
  }

  const closeModal = () => {
    setSelectedFilm(null);
  }

  const baseUrl = `https://swapi-graphql.netlify.app/.netlify/functions/index`

  const filmsURL = `https://swapi-graphql.netlify.app/.netlify/functions/index`

  const {data: planets, isLoading : planetLoading, error} = useQuery({queryKey: ['allPlanets'], queryFn : async () => request(baseUrl, allPlanets)})

  const {data: films, isLoading : filmsLoading } = useQuery({queryKey: ['allFilms'], queryFn : async () => request(filmsURL, allFilms)})



  if(planetLoading || filmsLoading){
    return <span>Loading....</span>;
  }

  if (error){
    return<p>Error: {error}</p>;
  }

  const details = () => {

  }

  console.log(planets)
  console.log(films)
  return (
    <>
    <h1>Hello World</h1>
    {planets.allPlanets.planets.map((planet) =>{
      return(
        <div>
          <h5>{planet.name}</h5>
        </div>
      )
    })}

   

    {films.allFilms.films.map((films, index) =>{
          return(
            <div key={index}>
            <h5 onClick={() => openModal(films)}>{films.title}</h5>
          </div>
          )
        })}
        <Modal isOpen={selectedFilm !== null} onClose={closeModal} films={selectedFilm} />


      <footer>
        <h2>
        Nicolai
        </h2>
        </footer>
      </>
    )
  }

export default App
